import React from "react";
import ThemeSwitcher from "@/components/ui/themeSwitcher/ThemeSwitcher";
import * as styles from "./navbar.module.css";

type MenuItem = {
  id: string;
  label: string;
  href: string;
  delay: number;
};

type Props = {
  menuItems: MenuItem[];
  isMobile?: boolean;
  onItemClick: (href: string) => void;
  toggleMenu: () => void;
};

const Navbar: React.FC<Props> = ({
  menuItems,
  isMobile = false,
  onItemClick,
  toggleMenu,
}) => {
  return (
    <ul className={isMobile ? styles.mobileList : styles.navbarTabsUl}>
      <li className={`${styles.navbarTabsLi}`} onClick={toggleMenu}>
        <ThemeSwitcher />
      </li>

      {menuItems.map((item) => (
        <li
          key={item.id}
          className={isMobile ? styles.mobileItem : styles.navbarTabsLi}
          data-aos={!isMobile ? "fade-down" : undefined}
          data-aos-delay={!isMobile ? item.delay : undefined}
        >
          <button
            className={styles.menuButton}
            onClick={() => onItemClick(item.href)}
            aria-label={`${item.label} menu button`}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;