import React from "react";
import * as styles from "./about.module.css";
import {StaticImage} from "gatsby-plugin-image";

const About: React.FC = () => {
    return (
        <div className={styles.info_section}>
            <div className={styles.about_info}>
                <p tabIndex={0}>
                    In the past, I worked as a software developer for industrial controllers, creating Human-Machine Interfaces (HMIs). In simple terms,
                    these are touch panels that allow maintenance personnel and factory operators to control equipment and monitor processes.
                    This experience gave me a deep understanding of the importance of adaptive and user-friendly interfaces.
                    Currently, I work as a freelance full-stack developer, utilizing technologies such as JavaScript, Next.js, Gatsby, React, and TypeScript on
                    the frontend, and Node.js, Express, Python, Flask and PostgreSQL/MySQL/MongoDB on the backend. I build RESTful APIs, integrate third-party
                    services, and implement authentication mechanisms such as JWT and OAuth. Additionally, I focus on database optimization and
                    efficient data management to nsure scalability and performance.
                    My goal is to create solutions that are not only functional but also efficient and intuitive for users. Additionally, I am actively
                    learning SEO and implementing best practices to improve website visibility in search engines. I am constantly refining my skills
                    and staying up-to-date with the latest web development trends.
                    I am results-driven and quality-focused, always striving to find the optimal solution for every project, no matter its complexity.
                </p>
            </div>
            <div className={styles.wrapper_image}>
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
