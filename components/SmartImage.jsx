import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const SmartImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  skeletonClassName = "",
  ...rest
}) => {
  const resolvedSrc = typeof src === "object" ? src.src : src;
  const imgWidth = width || (typeof src === "object" ? src.width : undefined);
  const imgHeight =
    height || (typeof src === "object" ? src.height : undefined);

  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    setIsLoaded(false);
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [resolvedSrc]);

  const aspectStyle =
    imgWidth && imgHeight
      ? { aspectRatio: `${imgWidth} / ${imgHeight}` }
      : undefined;

  return (
    <div className="relative w-full h-full overflow-hidden" style={aspectStyle}>
      {!isLoaded && (
        <div
          className={`absolute inset-0 bg-slate-800 animate-pulse ${skeletonClassName}`}
          aria-hidden="true"
        />
      )}
      <Image
        ref={imgRef}
        src={src}
        alt={alt || ""}
        width={imgWidth}
        height={imgHeight}
        unoptimized
        onLoad={() => setIsLoaded(true)}
        className={`${className} transition-opacity duration-200 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        {...rest}
      />
    </div>
  );
};

export default SmartImage;
