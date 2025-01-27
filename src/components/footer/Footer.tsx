import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import * as styles from "./footer.module.css";
import AnimatedTypingText from "../animatedTypingText/AnimatedTypingText";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.footer_heder}>
                    <article>
                        <AnimatedTypingText text={'Made with ❤  by Vasyl'}  duration={5}/>
                    </article>
                </div>
                <div className={styles.social_media}>
                    <a href="https://twitter.com/vasyl_biliak" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter className={styles.social_icon} />
                    </a>
                    <a href="https://www.linkedin.com/in/vasyl-biliak-developer" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className={styles.social_icon} />
                    </a>
                    <a href="https://github.com/VasylBiliak" target="_blank" rel="noopener noreferrer">
                        <FaGithub className={styles.social_icon} />
                    </a>
                    <a href="https://www.instagram.com/vasyl_biliak" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className={styles.social_icon} />
                    </a>
                    <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className={styles.social_icon} />
                    </a>
                </div>
                <div className={styles.footer_small_text}>
                    <article>
                        © 2024 Vasyl Biliak. All rights reserved.
                    </article>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
