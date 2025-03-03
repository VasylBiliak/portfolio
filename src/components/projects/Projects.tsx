import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './projects.module.css';
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {

    return (
        <div className={styles.projects_wrapper}>
            <div className={styles.projects_list}>
            {/*DEMO SITE*/}
                <div className={styles.projects_list__box}>
                    <div className={styles.box_info}>
                        <article className={styles.box_info__heading}>
                            Client Demo Site
                        </article>
                        <p className={`
            ${styles.box_info__description} 
            ${styles.box_info__technology}`}>
                            HTML, CSS Modules, JS, React,  Vite, mui-material
                        </p>
                        <p className={styles.box_info__description} >
                            Client Demo Site is a demonstration website designed to showcase the capabilities
                            of responsive layout and modern technology integration. The project is built using
                            React, Vite, CSS Modules, and MUI Material, ensuring fast page loading, a flexible
                            design, and a user-friendly UI.
                        </p>
                    </div>
                    <div className={styles.box_list_buttons}>
                        <a
                            href='https://github.com/VasylBiliak/client-demo-site'
                            target='_blank'
                            className={styles.box_list__button}
                            aria-label='View on GitHub'
                        >
                            <FaGithub className={styles.box_list__icon} />
                        </a>
                        <a
                            href='https://vasylbiliak.github.io/client-demo-site/'
                            target='_blank'
                            className={styles.box_list__button}
                            aria-label='Live View'
                        >
                            <BiLinkExternal className={styles.box_list__icon} />
                        </a>
                    </div>
                    <div className={styles.projects_list__image}>
                        <StaticImage
                            src="https://raw.githubusercontent.com/VasylBiliak/client-demo-site/refs/heads/main/public/baner.png"
                            alt="Client Demo Site Preview"
                            placeholder="blurred"
                            min-width={300}
                            quality={95}
                            layout="constrained"
                        />
                    </div>
                </div>
                {/*MASTER`S AC*/}
                <div className={styles.projects_list__box}>
                    <div className={styles.box_info}>
                        <article className={styles.box_info__heading}>
                            React application
                        </article>
                        <p className={`
                            ${styles.box_info__description} 
                            ${styles.box_info__technology}`}>
                            React, TypeScript, React Router, Vite, Redux Toolkit
                        </p>
                        <p className={styles.box_info__description} >
                            This page was developed during the 'Intro to React' course at Master's
                            Academy. It is part of a social initiative by MOCG, where I had the
                            opportunity to collaborate with experienced Frontend mentors and create a
                            personal project for my portfolio.
                        </p>
                    </div>
                    <div className={styles.box_list_buttons}>
                        <a
                            href='https://github.com/VasylBiliak/fe-react-2024'
                            target='_blank'
                            className={styles.box_list__button}
                            aria-label='View on GitHub'
                        >
                            <FaGithub className={styles.box_list__icon} />
                        </a>
                        <a
                            href='https://vasylbiliak.github.io/fe-react-2024/'
                            target='_blank'
                            className={styles.box_list__button}
                            aria-label='Live View'
                        >
                            <BiLinkExternal className={styles.box_list__icon} />
                        </a>
                    </div>
                    <div className={styles.projects_list__image}>
                        <StaticImage
                            src="../../images/Screenshot_24.png"
                            alt="banner fe-react-2024"
                            placeholder="blurred"
                            min-width={300}
                            quality={95}
                            layout="constrained"
                        />
                    </div>
                </div>
                {/*SUPERHEROES FULL STEAK*/}
                <div className={styles.projects_list__box}>
                    <div className={styles.box_info}>
                        <article className={styles.box_info__heading}>
                            Superheroes
                        </article>
                        <p className={`
                            ${styles.box_info__description} 
                            ${styles.box_info__technology}`}>
                            HTML, CSS, JS, React, Axios, React Router, Vite
                        </p>
                        <p className={styles.box_info__description} >
                            A web application for searching and exploring superheroes. Users can
                            find information about various superheroes, including their abilities,
                            origins, and appearances. The project was developed as a frontend
                            application with a focus on smooth UI and API integration.
                        </p>
                    </div>
                    <div className={styles.box_list_buttons}>
                        <a
                            href='https://github.com/L-2022/superheroes-frontend'
                            target='_blank'
                            className={styles.box_list__button}
                            aria-label='View on GitHub'
                        >
                            <FaGithub className={styles.box_list__icon} />
                        </a>
                        <a
                            href='https://l-2022.github.io/superheroes-frontend/'
                            target='_blank'
                            className={styles.box_list__button}
                            aria-label='Live View'
                        >
                            <BiLinkExternal className={styles.box_list__icon} />
                        </a>
                    </div>
                    <div className={styles.projects_list__image}>
                        <StaticImage
                            src='https://l-2022.github.io/superheroes-frontend/baner-site.webp'
                            alt='Superheroes Project Preview'
                            placeholder="blurred"
                            min-width={300}
                            quality={95}
                            layout="constrained"
                        />
                    </div>
                </div>
                {/*TOR ASSEMBLY*/}
                <div className={styles.projects_list__box}>
                    <div className={styles.box_info}>
                        <article className={styles.box_info__heading}>
                            TorAssembly Project
                        </article>
                        <p className={`
                                ${styles.box_info__description} 
                                ${styles.box_info__technology}`}>
                            HTML, CSS, JS, React, Redux Toolkit, theme-switcher, seo, css-modules
                        </p>
                        <p className={styles.box_info__description}>
                            Single-page website showcasing the company’s
                            services and allowing service orders.
                            Designed for performance, adaptability, and ease of use, it ensures
                            high-quality content display across devices, optimized loading,
                            and supports theme switching for user convenience.
                        </p></div>
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
                            href="https://www.torassembly.ca/"
                            target="_blank"
                            className={styles.box_list__button}
                            aria-label="Live View"
                        >
                            <BiLinkExternal className={styles.box_list__icon} />
                        </a>
                    </div>
                    <div className={styles.projects_list__image}>
                        <StaticImage
                            src="../../images/svg/TORASSEMBLE.svg"
                            alt="TorAssembly Project Logo"
                            placeholder="blurred"
                            min-width={300}
                            quality={95}
                            layout="constrained"
                        />

                    </div>
                </div>
                {/*FE COURSE*/}
                <div className={styles.projects_list__box}>
                    <div className={styles.box_info}>
                        <article className={styles.box_info__heading}>
                            FE Course Basic 2023
                        </article>
                        <p className={`${styles.box_info__description} ${styles.box_info__technology}`}>
                            HTML, CSS, JS, bem-methodology
                        </p>
                        <p className={styles.box_info__description}>
                            This project was developed during the "Frontend Basics" course as part of my
                            learning journey in web development. It showcases a collection of simple
                            browser-based games built using fundamental web technologies.
                        </p></div>
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
                            href="https://vasylbiliak.github.io/fe-course-basic-2023/GamesProject/index.html"
                            target="_blank"
                            className={styles.box_list__button}
                            aria-label="Live View"
                        >
                            <BiLinkExternal className={styles.box_list__icon} />
                        </a>
                    </div>
                    <div className={styles.projects_list__image}>
                        <StaticImage
                            src="https://raw.githubusercontent.com/VasylBiliak/fe-course-basic-2023/refs/heads/main/docs/GamesProject/img/about.png"
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
