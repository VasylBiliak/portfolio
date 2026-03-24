import React, { useEffect, useRef, useState, CSSProperties } from "react";
import * as styles from "./eye.module.css";

interface EyeProps {
    eyeStyle?: CSSProperties;
    pupilStyle?: CSSProperties;
    className?: string;
}

const Eye: React.FC<EyeProps> = ({ eyeStyle, pupilStyle, className }) => {
    const eyeRef = useRef<HTMLDivElement>(null);
    const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (!eyeRef.current) return;

            const eyeRect = eyeRef.current.getBoundingClientRect();
            const eyeCenterX = eyeRect.left + eyeRect.width / 2;
            const eyeCenterY = eyeRect.top + eyeRect.height / 2;

            const deltaX = event.clientX - eyeCenterX;
            const deltaY = event.clientY - eyeCenterY;
            const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

            const maxMove = eyeRect.width / 4; // межа руху зіниці
            const moveX = (deltaX / distance) * Math.min(maxMove, distance);
            const moveY = (deltaY / distance) * Math.min(maxMove, distance);

            setPupilPos({ x: moveX, y: moveY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div ref={eyeRef} className={`${styles.eye} ${className}`} style={eyeStyle}>
            <div
                className={styles.pupil}
                style={{
                    transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)`,
                    ...pupilStyle,
                }}
            />
        </div>
    );
};

export default Eye;
