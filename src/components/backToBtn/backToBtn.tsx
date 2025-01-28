import React, { useEffect, useState } from "react";
import { ImArrowUp } from "react-icons/im";
import * as stules from "./backToBtn.module.css";

const BackToBtn: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
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
            className={`${stules.BackToBtn } ${isVisible ? stules.visible : ""}`}
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            <ImArrowUp className={stules.BackToBtn__icon} />
        </button>
    );
};

export default BackToBtn;
