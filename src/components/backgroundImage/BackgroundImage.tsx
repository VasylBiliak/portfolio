import React, { useEffect, useState } from "react";
import MySVG from "./MySVG";
import * as styles from "./backgroundImage.module.css";
import { StaticImage } from "gatsby-plugin-image";

const BackgroundImage: React.FC = () => {
    const [colorSvg, setColorSvg] = useState<string>("#0B5959FF");

    useEffect(() => {
        const updateColor = () => {
            const rootStyles = getComputedStyle(document.documentElement);
            const computedColor = rootStyles.getPropertyValue('--colorSVG').trim();
            setColorSvg(computedColor);
        };

        updateColor();

        const themeObserver = new MutationObserver(updateColor);
        themeObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => {
            themeObserver.disconnect();
        };
    }, []);


    return (
        <div className={styles.background_container}>
            <StaticImage className={styles.background_second}
                         src="../../images/svg/Owl.svg"
                         // src="../../images/svg/Tit.svg"
                         alt="My description"
                         placeholder="blurred"
                         max-width={500}
                         quality={100}
                         layout="constrained"
            />
            <div className={styles.background_wrapper}>
                <div className={styles.mirrored_svg}>
                <MySVG
                    stroke={colorSvg}
                    width="100%"
                    height="100%"
                    strokeWidth="1.5"
                    quality={100}
                />
            </div>
                <div className={styles.background_image}>
                    <MySVG
                        stroke={colorSvg}
                        width="100%"
                        height="100%"
                        strokeWidth="1.5"
                        quality={100}
                    />
                </div>
            </div>
        </div>
    );
};

export default BackgroundImage;
