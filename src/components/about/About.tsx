import React from "react";
import * as styles from "./about.module.css";
import {StaticImage} from "gatsby-plugin-image";

const About: React.FC = () => {
    return (
        <div className={styles.info_dp_section}>
            <div className={styles.about_info}>
                <p tabIndex={0}>Hi! My name is Vasyl.</p>
                <p tabIndex={0}>
                    I'm a motivated and goal-oriented Front-End Developer with skills in React and TypeScript.
                </p>
                <p tabIndex={0}>
                    I’m passionate about creating interactive, accessible, and responsive websites and web applications.
                    I enjoy exploring new technologies, concepts, and best practices in web development.
                    I’m always looking for ways to enhance my skills and create innovative solutions.
                </p>
            </div>
            <div className={styles.dp}>
                <StaticImage className={styles.image}
                    src="../../images/Me.png"
                    alt="My description"
                    placeholder="blurred"
                    // min-width={300}
                    max-width={500}
                    quality={100}
                    layout="constrained"
                />
            </div>
        </div>
    );
};

export default About;
