import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.8,
    },
  },
};

const Hoc = ({ children }) => {
  // const [ isIntersecting, setIsIntersecting ] = useState(false);

  // useEffect(() => {

  //     const observer = new IntersectionObserver(([entry]) => {
  //         setIsIntersecting(entry.isIntersecting);
  //     });

  //     observer.observe(ref.current);

  //     // if (isIntersecting) {
  //     // 	observer.disconnect();
  //     // }

  //     return () => observer.disconnect();
  // }, [isIntersecting]);

  // const ref = useRef(null);

  return (
    <motion.div variants={container} initial="hidden" whileInView="visible">
      {children}
    </motion.div>
  );
};

export default Hoc;
