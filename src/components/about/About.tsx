import React from "react";
import * as styles from "./about.module.css";
import { StaticImage } from "gatsby-plugin-image";


const About: React.FC = () => {
    return (
        <div className={styles.info_dp_section} >
            <div className={styles.about_info}>
                <p tabIndex="0">
                    Hi! My name is Vasyl.
                </p>
                <p tabIndex="0">
                    I'm Motivated and goal-oriented Front-End Developer with skills in React and TypeScript.
                </p>
                <p tabIndex="0">
                    I’m passionate about creating interactive, accessible, and responsive websites and web applications.
                    I enjoy exploring new technologies, concepts, and best practices in web development.
                    I’m always looking for ways to enhance my skills and create innovative solutions.
                </p>
            </div>
            <div className={styles.dp} data-aos="fade-up">
                <StaticImage
                    src="../../images/Me.png"
                    alt="My description"
                    placeholder="blurred"
                    width={300}
                    layout="constrained"
                />
                {/*<img src="../../images/my_main_img.jpg" alt="Biliak Vasyl" tabIndex="0" aria-label="image of Biliak Vasyl"  />*/}
            </div>

        </div>
    );
};

export default About;
