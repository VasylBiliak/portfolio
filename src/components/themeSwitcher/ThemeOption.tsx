import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import * as styles from "./themeSwitcher.module.css";

const ThemeSwitcher: React.FC = () => {
    const getInitialTheme = () => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) return savedTheme;

        const currentHour = new Date().getHours();
        return currentHour >= 6 && currentHour < 18 ? "light" : "dark";
    };

    const [theme, setTheme] = useState<string>(getInitialTheme());

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <button onClick={toggleTheme} className={styles.switcher_button}>
            {theme === "light" ?
                <FaMoon size={20} className={`${styles.icon} ${styles.darkIcon} `} /> :
                <FaSun size={20}  className={`${styles.icon} ${styles.lightIcon} `} />
                }
        </button>
    );
};

export default ThemeSwitcher;
