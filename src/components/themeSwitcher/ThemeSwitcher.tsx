import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import * as styles from './themeSwitcher.module.css';

import "../../styles/global.css";

interface ThemeSwitcherProps {
    toggleMenuVisibility: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ toggleMenuVisibility }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const setLightTheme = () => {
        setTheme('light');
        document.documentElement.classList.remove('dark-theme');
        document.documentElement.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
        toggleMenuVisibility();
    };

    const setDarkTheme = () => {
        setTheme('dark');
        document.documentElement.classList.remove('light-mode');
        document.documentElement.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
        toggleMenuVisibility();
    };

    const setAutomaticTheme = () => {
        const currentHour = new Date().getHours();
        if (currentHour >= 6 && currentHour < 18) {
            setLightTheme();
        } else {
            setDarkTheme();
        }
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        if (savedTheme) {
            setTheme(savedTheme);
            if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark-theme');
            } else {
                document.documentElement.classList.add('light-mode');
            }
        } else {
            setAutomaticTheme();
        }
    }, []);

    return (
        <div className={styles.switcher}>
            <button
                onClick={setLightTheme}
                className={`${styles.switcher_button} `}
                aria-label="Enable light mode"
            >
                <FaSun className={`${styles.icon} ${styles.lightIcon} ${theme === 'light' ? styles.active_light : ''}`} />
            </button>
            <div className={styles.theme_switcher__separator}></div>
            <button
                onClick={setDarkTheme}
                className={`${styles.switcher_button} `}
                aria-label="Enable dark mode"
            >
                <FaMoon className={`${styles.icon} ${styles.darkIcon} ${theme === 'dark' ? styles.active_dark : ''}`} />
            </button>
        </div>
    );
};

export default ThemeSwitcher;
