import React, { useEffect, useState } from "react";
import MySVG from "./MySVG";
import * as styles from "./backgroundImage.module.css";
import OwlImage from "./OwlImage";
import TitImage from "./TitImage";

const BackgroundImage: React.FC = () => {
    const [theme, setTheme] = useState<string>("");
    const [colorSvg, setColorSvg] = useState<string>("");
    const [strokeWidth, setStrokeWidth] = useState<string>("0.5");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const updateTheme = () => {
                const currentTheme = localStorage.getItem("theme") || document.documentElement.getAttribute("data-theme") || "";
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
        }
    }, []);

    return (
        <div className={styles.background_container}>
            {theme === "dark" ? <OwlImage /> : theme === "light" ? <TitImage /> : null}
            <div className={styles.background_wrapper}>
                <div className={styles.mirrored_svg}>
                    <MySVG stroke={colorSvg} width="100%" height="100%" strokeWidth={strokeWidth} quality={100} />
                </div>
                <div className={styles.background_image}>
                    <MySVG stroke={colorSvg} width="100%" height="100%" strokeWidth={strokeWidth} quality={10} />
                </div>
            </div>
        </div>
    );
};

export default BackgroundImage;
