import React, { useEffect, useState } from "react";
import { ImArrowUp } from "react-icons/im";
import * as styles from "./backToTop.module.css";

const BackToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsVisible(false)
    };

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <button
            className={`${styles.BackToBtn} ${isVisible ? styles.visible : ""}`}
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            <ImArrowUp className={styles.BackToBtn__icon} />
        </button>
    );
};

export default BackToTop;
