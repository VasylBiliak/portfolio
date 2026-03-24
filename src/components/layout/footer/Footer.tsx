import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AnimatedTypingText from "@/components/ui/animatedTypingText/AnimatedTypingText";
import * as styles from "./footer.module.css";

const socialLinks = [
    {
        href: "https://twitter.com/vasyl_biliak",
        icon: <FaXTwitter />,
    },
    {
        href: "https://www.linkedin.com/in/vasyl-biliak-developer",
        icon: <FaLinkedinIn />,
    },
    {
        href: "https://github.com/VasylBiliak",
        icon: <FaGithub />,
    },
    {
        href: "https://www.instagram.com/vasyl_biliak",
        icon: <FaInstagram />,
    },
    {
        href: "https://chat.whatsapp.com/Ce8wbDCZ5u49j7oKPjobwl?mode=gi_t",
        icon: <FaWhatsapp />,
    },    {
        href: "https://discord.com/users/1104186007605235723",
        icon: <FaDiscord />,
    },
];

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.footer_top_text}>
                    <article >
                        <AnimatedTypingText text={"Made with ❤  by Vasyl"} duration={5} />
                    </article>
                </div>
                <div className={styles.social_media}>
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.social_icon}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
                <div className={styles.footer_bottom_text}>
                    <article>© 2024 Vasyl Biliak. All rights reserved.</article>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
