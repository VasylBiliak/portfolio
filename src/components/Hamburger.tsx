import React from "react";
import "../styles/global.css";

const Hamburger: React.FC = () => {
    const toggleClass = (id: string, className: string) => {
        const element = document.getElementById(id);
        if (element) element.classList.toggle(className);
    };

    const hamburgerMenu = () => {
        document.body.classList.toggle("stopscrolling");

        toggleClass("mobiletogglemenu", "show-toggle-menu");
        toggleClass("burger-bar1", "hamburger-animation1");
        toggleClass("burger-bar2", "hamburger-animation2");
        toggleClass("burger-bar3", "hamburger-animation3");
    };

    return (
        <div className="hamburger" id="hamburger" data-aos="fade">
            <div className="hamburgerbase">
                <button
                    id="hamburger-button"
                    onClick={hamburgerMenu}
                    tabIndex={0}
                    aria-label="Menu Button"
                >
                    <span className="burger-bar" id="burger-bar1"></span>
                    <span className="burger-bar" id="burger-bar2"></span>
                    <span className="burger-bar" id="burger-bar3"></span>
                </button>
            </div>
        </div>
    );
};

export default Hamburger;
