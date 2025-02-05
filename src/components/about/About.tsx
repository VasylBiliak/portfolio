import React from "react";
import * as styles from "./about.module.css";
import {StaticImage} from "gatsby-plugin-image";

const About: React.FC = () => {
    return (
        <div className={styles.info_dp_section}>
            <div className={styles.about_info}>
                <p tabIndex={0}>
                    In the past, I worked as a software developer for industrial controllers and created Human-Machine Interfaces (HMI panels).
                    This experience gave me a solid understanding of the importance of adaptive and user-friendly interfaces. Now, I’m a freelance
                    frontend developer, working with technologies such as JavaScript, Next.js, Gatsby, as well as React and TypeScript. In addition
                    to development, I’m actively learning SEO and implementing best practices to improve website visibility in search engines. My goal
                    is to create efficient and user-friendly solutions that meet the needs of users and align with modern web standards.
                </p>
            </div>
            <div className={styles.dp}>
                <StaticImage className={styles.image}
                             src="../../images/Me.png"
                             alt="My description"
                             placeholder="blurred"
                             max-width={500}
                             quality={100}
                             layout="constrained"
                />
            </div>
        </div>
    );
};

export default About;
