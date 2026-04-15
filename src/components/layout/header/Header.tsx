import React from "react";
import "./header.css";
import Hamburger from "@/components/ui/Hamburger";
import TextAnimation from "@/components/ui/textJello/TextJello";
import useSpacing from "@/hooks/useYOffset";
import Navbar from "./Navbar/Navbar";

const menuItems = [
  { id: "about", label: "About Me", href: "about", delay: 400 },
  { id: "skills", label: "Skills", href: "skills", delay: 100 },
  { id: "projects", label: "Projects", href: "projects", delay: 200 },
  { id: "contact", label: "Contact", href: "contact", delay: 600 },
];

const Header: React.FC = () => {
  const yOffset1 = useSpacing();

  const toggleMenuVisibility = () => {
    const menu = document.getElementById("mobiletogglemenu");
    const bar1 = document.getElementById("burger-bar1");
    const bar2 = document.getElementById("burger-bar2");
    const bar3 = document.getElementById("burger-bar3");

    const isOpen = menu?.classList.contains("show-toggle-menu");

    if (isOpen) {
      document.body.classList.remove("stopscrolling");
      menu?.classList.remove("show-toggle-menu");
      bar1?.classList.remove("hamburger-animation1");
      bar2?.classList.remove("hamburger-animation2");
      bar3?.classList.remove("hamburger-animation3");
    } else {
      document.body.classList.add("stopscrolling");
      menu?.classList.add("show-toggle-menu");
      bar1?.classList.add("hamburger-animation1");
      bar2?.classList.add("hamburger-animation2");
      bar3?.classList.add("hamburger-animation3");
    }
  };

  const handleScroll = (href: string) => {
    const targetElement = document.getElementById(href);
    const header = document.querySelector("header");

    if (targetElement) {
      const headerHeight = header
        ? header.getBoundingClientRect().height
        : 0;

      const y =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        yOffset1;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      toggleMenuVisibility();
    }
  };

  return (
    <header>
      <nav className="navbar">
        {/* LOGO */}
        <div className="logo" tabIndex={0} aria-label="my logo">
          <div className="my_name logo_container">
            <TextAnimation text="BV" />
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className="mobiletogglemenu" id="mobiletogglemenu">
          <Navbar
            menuItems={menuItems}
            isMobile
            onItemClick={handleScroll}
            toggleMenu={toggleMenuVisibility}
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="navbar-tabs" id="navbar-tabs">
          <Navbar
            menuItems={menuItems}
            onItemClick={handleScroll}
            toggleMenu={toggleMenuVisibility}
          />
        </div>
      </nav>

      <Hamburger />
    </header>
  );
};

export default Header;