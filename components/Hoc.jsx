import { useState, useEffect, useRef } from "react";

// animate.css
import "animate.css";

const Hoc = ({children}) => {

	const [ isIntersecting, setIsIntersecting ] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        });

        observer.observe(ref.current);
        
        if (isIntersecting) {
        	observer.disconnect();
        }

        return () => observer.disconnect();
    }, [isIntersecting]);

    const ref = useRef(null);

	return (
		<div ref={ref} className={`opacity-0 animate__animated ${isIntersecting ? "animate__fadeIn" : ""}`}>
			{children}
		</div>
	)
}

export default Hoc;