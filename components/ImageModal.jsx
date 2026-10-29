import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { FiX, FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";

const ImageModalContext = createContext({
  openImage: () => {},
});

export const useImageModal = () => useContext(ImageModalContext);

export const ImageModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState(null);
  // modalState: { items: [{ src, alt, caption, link }], index: 0 }

  const openImage = useCallback((itemOrItems, startIndex = 0) => {
    if (Array.isArray(itemOrItems)) {
      setModalState({ items: itemOrItems, index: startIndex });
    } else {
      setModalState({ items: [itemOrItems], index: 0 });
    }
  }, []);

  const closeModal = useCallback(() => {
    setModalState(null);
  }, []);

  const showPrev = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      setModalState((prev) => {
        if (!prev || prev.items.length <= 1) return prev;
        return {
          ...prev,
          index: (prev.index - 1 + prev.items.length) % prev.items.length,
        };
      });
    },
    [],
  );

  const showNext = useCallback(
    (e) => {
      if (e) e.stopPropagation();
      setModalState((prev) => {
        if (!prev || prev.items.length <= 1) return prev;
        return {
          ...prev,
          index: (prev.index + 1) % prev.items.length,
        };
      });
    },
    [],
  );

  useEffect(() => {
    if (!modalState) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [modalState, closeModal, showPrev, showNext]);

  const currentItem = modalState ? modalState.items[modalState.index] : null;
  const hasMultiple = modalState && modalState.items.length > 1;
  const resolvedSrc =
    currentItem && typeof currentItem.src === "object"
      ? currentItem.src.src
      : currentItem?.src;

  return (
    <ImageModalContext.Provider value={{ openImage }}>
      {children}

      {modalState && currentItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 flex flex-col justify-between p-4 sm:p-6"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between gap-4 bg-slate-900 border border-slate-700 rounded px-4 py-2.5 max-w-5xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <span className="text-sm font-bold text-white truncate">
                {currentItem.caption || currentItem.alt || "Image Preview"}
              </span>
              {hasMultiple && (
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 shrink-0">
                  {modalState.index + 1} / {modalState.items.length}
                </span>
              )}
              {currentItem.link && (
                <a
                  href={currentItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 shrink-0 ml-2"
                >
                  <span>Visit Site</span>
                  <FiExternalLink />
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={closeModal}
              className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <FiX className="text-lg" />
            </button>
          </div>

          {/* Center Image Area */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            {hasMultiple && (
              <button
                type="button"
                onClick={showPrev}
                className="absolute left-2 sm:left-6 z-10 p-2.5 rounded bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 transition-colors"
                aria-label="Previous image"
              >
                <FiChevronLeft className="text-xl" />
              </button>
            )}

            <img
              src={resolvedSrc}
              alt={currentItem.alt || currentItem.caption || "Preview"}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[78vh] max-w-[90vw] w-auto h-auto object-contain rounded border border-slate-700 bg-slate-900"
            />

            {hasMultiple && (
              <button
                type="button"
                onClick={showNext}
                className="absolute right-2 sm:right-6 z-10 p-2.5 rounded bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 transition-colors"
                aria-label="Next image"
              >
                <FiChevronRight className="text-xl" />
              </button>
            )}
          </div>

          {/* Bottom Hint */}
          <div className="text-center">
            <span className="text-xs text-slate-400 font-medium">
              Click anywhere outside or press ESC to close
              {hasMultiple ? " · Use arrow keys to navigate" : ""}
            </span>
          </div>
        </div>
      )}
    </ImageModalContext.Provider>
  );
};
