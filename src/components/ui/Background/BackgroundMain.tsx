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
                    speed={0.5}
                    squareSize={40}
                    direction="diagonal"
                    shape="hexagon"
                    borderColor={mainBgFoon}
                    hoverFillColor={getComputedStyle(document.documentElement).getPropertyValue("--btn-hover-bg").trim()}
                    overlayInnerColor="rgba(197, 229, 39, 0.2)" // центр
                    overlayOuterColor="rgba(210, 197, 75, 0.9)"
                />
                :
                <ShapeGrid
                    speed={0.5}
                    squareSize={40}
                    direction="diagonal"
                    shape="hexagon"
                    borderColor={mainBgFoon}
                    hoverFillColor={getComputedStyle(document.documentElement).getPropertyValue("--btn-hover-bg").trim()}
                    overlayInnerColor="rgba(67, 101, 2, 0.1)" 
                    overlayOuterColor="rgba(9, 105, 46, 0.1)" 
                />
            }


        </div>
    );
};

export default BackgroundMain;
