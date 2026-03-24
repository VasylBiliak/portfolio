import React from "react";
import "./header.css";
import ThemeSwitcher from "@/components/ui/themeSwitcher";
import Hamburger from "@/components/ui/Hamburger";
import TextAnimation from "@/components/ui/textJello/TextJello";
import useSpacing from '@/hooks/useYOffset'
import ThemeOption from "@/components/ui/themeSwitcher/ThemeSwitcher";

const menuItems = [
    { id: "about", label: "About Me", href: "about", delay: 400 },
    { id: "skills", label: "Skills", href: "skills", delay: 100 },
    { id: "projects", label: "Projects", href: "projects", delay: 200 },
    { id: "contact", label: "Contact", href: "contact", delay: 600 },
];


const Header: React.FC = () => {
    // const toggleMenuVisibility = () => {
    //     document.body.classList.toggle("stopscrolling");
    //     [
    //         "mobiletogglemenu",
    //         "burger-bar1",
    //         "burger-bar2",
    //         "burger-bar3",
    //     ].forEach((id) => {
    //         const element = document.getElementById(id);
    //         if (element) element.classList.remove("show-toggle-menu", "hamburger-animation1", "hamburger-animation2", "hamburger-animation3");
    //     });
    // };
    const toggleMenuVisibility = () => {
        const menu = document.getElementById("mobiletogglemenu");
        const bar1 = document.getElementById("burger-bar1");
        const bar2 = document.getElementById("burger-bar2");
        const bar3 = document.getElementById("burger-bar3");

        const isOpen = menu?.classList.contains("show-toggle-menu");

        if (isOpen) {
            // Close menu
            document.body.classList.remove("stopscrolling");
            menu?.classList.remove("show-toggle-menu");
            bar1?.classList.remove("hamburger-animation1");
            bar2?.classList.remove("hamburger-animation2");
            bar3?.classList.remove("hamburger-animation3");
        } else {
            // Open menu
            document.body.classList.add("stopscrolling");
            menu?.classList.add("show-toggle-menu");
            bar1?.classList.add("hamburger-animation1");
            bar2?.classList.add("hamburger-animation2");
            bar3?.classList.add("hamburger-animation3");
        }
    };

    const yOffset1 = useSpacing();

    const handleScroll = (href: string) => {
        const targetElement = document.getElementById(href);
        const header = document.querySelector("header");

        if (targetElement) {
            const headerHeight = header ? header.getBoundingClientRect().height : 0;
            const y = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight  - yOffset1;

            window.scrollTo({
                top: y,
                behavior: "smooth"
            });

            toggleMenuVisibility();
        }
    };


    const renderMenuItems = (isMobile: boolean) => (
        <>
            {menuItems.map((item) => (
                <li
                    key={item.id}
                    id={`${item.id}-${isMobile ? "mobile-tab" : "tab"}`}
                    className={`navbar-tabs-li ${item.id}`}
                    data-aos={!isMobile ? "fade-down" : undefined}
                    data-aos-delay={!isMobile ? item.delay : undefined}
                >
                    <button
                        className="menu-button"
                        onClick={() => handleScroll(item.href)}
                        tabIndex={0}
                        aria-label={`${item.label} menu button`}
                    >
                        {item.label}
                    </button>
                </li>
            ))}
        </>
    );
    return (
        <header>
            <nav className="navbar">
                <div className="logo" tabIndex={0} aria-label="my logo">
                    <div className=" my_name logo_container ">
                        <TextAnimation text="BV"/>
                    </div>
                </div>
                <div className="mobiletogglemenu" id="mobiletogglemenu">
                    <ul className="mobile-navbar-tabs-ul" id="mobile-ul">
                        <li className="navbar-tabs-li" onClick={toggleMenuVisibility}>
                            <ThemeOption />
                        </li>
                        {renderMenuItems(true)}
                    </ul>
                </div>
                <div className="navbar-tabs" id="navbar-tabs">
                    <ul className="navbar-tabs-ul">
                        <li className="navbar-tabs-li theme" onClick={toggleMenuVisibility}>
                            <ThemeOption />
                        </li>
                        {renderMenuItems(false)}
                    </ul>
                </div>
            </nav>
            <Hamburger />
        </header>
    );
};

export default Header;
