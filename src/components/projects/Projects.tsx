import React from 'react';
import * as styles from './projects.module.css';
import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
import { StaticImage } from 'gatsby-plugin-image';


const Projects: React.FC = () => {
    return (
        <div className={styles.projects_wrapper}>
            <div className={styles.projects_list}>
                <div className={styles.projects_list__box}>
                    <div className={styles.box_info}>
                        <article className={styles.box_info__heading}>
                            React application
                        </article>
                        <p className={`
                            ${styles.box_info__description} 
                            ${styles.box_info__technology}`}>
                            React, TypeScript, React Router, API, Vite, Redux Toolkit.
                        </p>
                        <p className={styles.box_info__description} >
                            This page was developed during the 'Intro to React' course at Master's
                            Academy. It is part of a social initiative by MOCG, where I had the
                            opportunity to collaborate with experienced Frontend mentors and create a
                            personal project for my portfolio.
                        </p>
                        <div className={styles.box_list_buttons}>
                            <a
                                href='https://github.com/a/fe-react-2024'
                                target='_blank'
                                className={styles.box_list__button}
                                aria-label='View on GitHub'
                            >
                                <FaGithub className={styles.box_list__icon} />
                            </a>
                            <a
                                href='https://gra.github.io/fe-react-2024/'
                                target='_blank'
                                className={styles.box_list__button}
                                aria-label='Live View'
                            >
                                <BiLinkExternal className={styles.box_list__icon} />
                            </a>
                        </div>
                    </div>
                    <div className={styles.projects_list__image}>
                        <StaticImage
                            src="../../images/aboutIMG.svg"
                            alt="My description"
                            placeholder="blurred"
                            min-width={300}
                            quality={95}
                            layout="constrained"
                        />
                    </div>
                </div>
                <div className={styles.projects_list__box}>
                    <div className={styles.box_info}>
                        <article className={styles.box_info__heading}>
                            TorAssembly Project
                        </article>
                        <p className={`
                                ${styles.box_info__description} 
                                ${styles.box_info__technology}`}>
                            TypeScript, React, Redux Toolkit, Express, PostgreSQL.
                        </p>
                        <p className={styles.box_info__description}>
                            TorAssembly is a project that aims to provide secure and anonymous communication.
                            It was developed as part of my personal project to explore advanced concepts of
                            cryptography, networking, and distributed systems.
                        </p>
                        <div className={styles.box_list_buttons}>
                            <a
                                href="https://github.com/VasylBiliak/torassembly"
                                target="_blank"
                                className={styles.box_list__button}
                                aria-label="View on GitHub"
                            >
                                <FaGithub className={styles.box_list__icon} />
                            </a>
                            <a
                                href="https://vasylbiliak.github.io/torassembly/"
                                target="_blank"
                                className={styles.box_list__button}
                                aria-label="Live View"
                            >
                                <BiLinkExternal className={styles.box_list__icon} />
                            </a>
                        </div>
                    </div>
                    <div className={styles.projects_list__image}>
                        <StaticImage
                            src="../../images/tor_assembly.png"
                            alt="TorAssembly Project Logo"
                            placeholder="blurred"
                            min-width={300}
                            quality={95}
                            layout="constrained"
                        />
                    </div>
                </div>
                <div className={styles.projects_list__box}>
                    <div className={styles.box_info}>
                        <article className={styles.box_info__heading}>
                            FE Course Basic 2023
                        </article>
                        <p className={`${styles.box_info__description} ${styles.box_info__technology}`}>
                            HTML, CSS, JavaScript, React.
                        </p>
                        <p className={styles.box_info__description}>
                            "FE Course Basic 2023" is a course project where I learned the foundations of front-end web development.
                            This project involves building responsive web pages with modern HTML, CSS, and JavaScript.
                            Additionally, React was used to implement interactive components and create a dynamic user interface.
                        </p>
                        <div className={styles.box_list_buttons}>
                            <a
                                href="https://github.com/VasylBiliak/fe-course-basic-2023"
                                target="_blank"
                                className={styles.box_list__button}
                                aria-label="View on GitHub"
                            >
                                <FaGithub className={styles.box_list__icon} />
                            </a>
                            <a
                                href="https://vasylbiliak.github.io/fe-course-basic-2023/"
                                target="_blank"
                                className={styles.box_list__button}
                                aria-label="Live View"
                            >
                                <BiLinkExternal className={styles.box_list__icon} />
                            </a>
                        </div>
                    </div>
                    <div className={styles.projects_list__image}>
                        <StaticImage
                            src="../../images/about.png"
                            alt="TorAssembly Project Logo"
                            placeholder="blurred"
                            min-width={300}
                            quality={95}
                            layout="constrained"
                        />
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Projects;
