import React, { useEffect, useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import * as styles from "./qrcode.module.css";
import { createPortal } from "react-dom";

interface QRCodeProps {
    repoUrl: string;
}

const QRCode: React.FC<QRCodeProps> = ({ repoUrl }) => {
    const [fgColor, setFgColor] = useState("#000");
    const [gfColor, setGfColor] = useState("#000");
    const [bgColor, setBgColor] = useState("transparent");
    const [isHovered, setIsHovered] = useState(false);
    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const updateColors = () => {
            const rootStyles = getComputedStyle(document.documentElement);
            const fg = rootStyles.getPropertyValue("--text-primary").trim() || "#000";
            const gf = rootStyles.getPropertyValue("--btn-text").trim() || "#ffffff";
            const bg = rootStyles.getPropertyValue("--color-bg-section-el").trim() || "transparent";
            setFgColor(fg);
            setGfColor(gf);
            setBgColor(bg);
        };

        updateColors();

        const observer = new MutationObserver(updateColors);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["data-theme"],
        });

        const handleScroll = () => {
            const scrollThreshold = window.innerHeight * 0.05;
            if (window.scrollY > scrollThreshold) {
                setIsHovered(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleMouseEnter = () => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
            hoverTimeoutRef.current = null;
        }
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        hoverTimeoutRef.current = setTimeout(() => {
            setIsHovered(false);
        }, 100);
    };

    const modal = isHovered
        ? createPortal(
            <div
                className={styles.qr_modal}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <QRCodeCanvas
                    value={repoUrl}
                    size={512}
                    style={{ width: "50vw", height: "50vw" }}
                    bgColor={bgColor}
                    fgColor={fgColor}
                    includeMargin={false}
                />
            </div>,
            document.body
        )
        : null;

    return (
        <>
            <div
                className={styles.qr_wrapper}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <QRCodeCanvas
                    value={repoUrl}
                    style={{ width: "4rem", height: "4rem" }}
                    bgColor="transparent"
                    fgColor={isHovered ? gfColor : fgColor }
                    includeMargin={false}
                />
            </div>
            {modal}
        </>
    );
};

export default QRCode;
