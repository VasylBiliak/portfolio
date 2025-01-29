import React from "react";
import * as styles from "./textAnimation.module.css";

interface TextAnimationProps {
    text: string;
    textGap?: string;
}

const TextAnimation: React.FC<TextAnimationProps> = ({ text,  textGap = "0rem" }) => {
    return (
        <div
            style={{
                display: "flex", // Makes characters align in a row
                justifyContent: "center", // Centers characters horizontally
                alignItems: "center", // Centers characters vertically
                gap: textGap, // Adds spacing between characters
            }}
        >
            {text.split("").map((char, index) => (
                <p
                    key={index}
                    className={styles.jello} // Adds animation class for each character
                    style={{ whiteSpace: char === " " ? "pre" : undefined }} // Preserves spaces
                >
                    {char === " " ? "\u00A0" : char} {/* Renders a non-breaking space for empty spaces */}
                </p>
            ))}
        </div>
    );
};

export default TextAnimation;

