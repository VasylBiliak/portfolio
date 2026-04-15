import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import * as styles from "./themeSwitcher.module.css";

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const savedTheme =
      typeof window !== "undefined"
        ? localStorage.getItem("theme")
        : null;

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const currentHour = new Date().getHours();
      const initialTheme =
        currentHour >= 6 && currentHour < 18 ? "light" : "dark";
      setTheme(initialTheme);
    }
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  if (!theme) return null;

  return (
    <motion.button
      onClick={toggleTheme}
      className={styles.switcher_button}
      whileHover={{ scale: 1.1, rotate: 180 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        {theme === "light" ? (
          <motion.div
            key="moon"
            initial={{ rotate: 180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -180, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaMoon className={`${styles.icon} ${styles.darkIcon}`} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 180, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaSun className={`${styles.icon} ${styles.lightIcon}`} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeSwitcher;