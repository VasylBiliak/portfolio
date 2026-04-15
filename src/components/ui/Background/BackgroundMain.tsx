import React, { useEffect, useState } from "react";
import ShapeGrid from './ShapeGrid';
import * as styles from "./backgroundImage.module.css";

const BackgroundMain: React.FC = () => {
    const [theme, setTheme] = useState<string>("light");
    const [mainBgFoon, setmainBgFoon] = useState<string>("");

    useEffect(() => {
        if (typeof window === "undefined") return;

        const updateTheme = () => {
            const currentTheme = localStorage.getItem("theme") || document.documentElement.getAttribute("data-theme") || "light";
            setTheme(currentTheme);

            const color = getComputedStyle(document.documentElement)
                .getPropertyValue("--svg-color")
                .trim();
            setmainBgFoon(color);
        };

        updateTheme();

        const observer = new MutationObserver(updateTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.background_container}>
            {theme === "light" ?
                <ShapeGrid
                    speed={0.1}
                    squareSize={100}
                    direction="up"
                    shape="square"
                    borderColor={mainBgFoon}
                    hoverFillColor={getComputedStyle(document.documentElement).getPropertyValue("--btn-hover-bg").trim()}
                    overlayInnerColor="rgba(197, 229, 39, 0)"
                    overlayOuterColor="rgba(210, 197, 75, 0)"
                />
                :
                <ShapeGrid
                    speed={0.1}
                    squareSize={100}
                    direction="up"
                    shape="square"
                    borderColor={mainBgFoon}
                    hoverFillColor={getComputedStyle(document.documentElement).getPropertyValue("--btn-hover-bg").trim()}
                    overlayInnerColor="rgba(67, 101, 2, 0)" 
                    overlayOuterColor="rgba(9, 105, 46, 0)" 
                />
            }


        </div>
    );
};

export default BackgroundMain;
