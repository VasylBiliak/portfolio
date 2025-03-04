import React, { useEffect, useState } from "react";
import MySVG from "./MySVG2";
import * as styles from "./backgroundImage.module.css";
import OwlImage from "./OwlImage";
import TitImage from "./TitImage";

const BackgroundImage: React.FC = () => {
    const [theme, setTheme] = useState<string>("light");
    const [colorSvg, setColorSvg] = useState<string>("");
    const [strokeWidth, setStrokeWidth] = useState<string>("0.5");

    useEffect(() => {
        if (typeof window === "undefined") return; // Уникнення SSR помилок

        const updateTheme = () => {
            const currentTheme = localStorage.getItem("theme") || document.documentElement.getAttribute("data-theme") || "light";
            setTheme(currentTheme);
            setStrokeWidth(currentTheme === "dark" ? "1.5" : "0.5");

            const color = getComputedStyle(document.documentElement)
                .getPropertyValue("--svg-color")
                .trim();
            setColorSvg(color);
        };

        updateTheme();

        const observer = new MutationObserver(updateTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.background_container}>
            <div className={styles.wrapper_first_image}>
                {theme === "light" ? <TitImage /> : <OwlImage />}
            </div>
            <div className={styles.background_image}>
                <MySVG stroke={colorSvg}
                       width="100%"
                       height="100%"
                       strokeWidth={strokeWidth}
                       quality={100}
                />
            </div>
        </div>
    );
};

export default BackgroundImage;
