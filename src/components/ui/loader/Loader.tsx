import React from "react";
import * as styles from "./loader.module.css";

interface LoaderProps {
    fullScreen?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ fullScreen = false }) => {
    const wrapperClass = fullScreen
        ? `${styles.loader} ${styles.loader_fullscreen}`
        : styles.loader;

    return (
        <div className={wrapperClass} role="status" aria-label="Loading...">
            <div className={styles.loader__spinner}></div>
        </div>
    );
};

export default Loader;
