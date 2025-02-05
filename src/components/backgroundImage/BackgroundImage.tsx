import React, { useEffect, useState } from "react";
import MySVG from "./MySVG";
import * as styles from "./backgroundImage.module.css";
import OwlImage from "./OwlImage";  // Імпортуємо Owl компонент
import TitImage from "./TitImage";  // Імпортуємо Tit компонент

const BackgroundImage: React.FC = () => {
    const [colorSvg, setColorSvg] = useState<string>("");
    const [strokeWidth, setStrokeWidth] = useState<string>("0.5");
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)

    useEffect(() => {
        const updateColorAndTheme = () => {
            const color = getComputedStyle(document.documentElement)
                .getPropertyValue('--svg-color').trim();
            setColorSvg(color);

            const theme = document.documentElement.getAttribute('data-theme');
            setIsDarkTheme(theme === "dark");
            setStrokeWidth(theme === "dark" ? "1.5" : "1");
        };

        updateColorAndTheme();

        const observer = new MutationObserver(updateColorAndTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.background_container}>
            {isDarkTheme ? <OwlImage /> : <TitImage />}
            <div className={styles.background_wrapper}>
                <div className={styles.mirrored_svg}>
                    <MySVG stroke={colorSvg} width="100%"
                           height="100%"
                           strokeWidth={strokeWidth}
                           quality={100} />
                </div>
                <div className={styles.background_image}>
                    <MySVG stroke={colorSvg}
                           width="100%"
                           height="100%"
                           strokeWidth={strokeWidth}
                           quality={10} />
                </div>
            </div>
        </div>
    );
};

export default BackgroundImage;
