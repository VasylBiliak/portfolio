import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './projects.module.css';
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {

    return (
        <div className={styles.projects_wrapper}>
            <div className={styles.projects_list}>
                {/*DEMO SITE*/}
                <ProjectCard
                    repoUrl="https://github.com/VasylBiliak/client-demo-site"
                    externalUrl="https://vasylbiliak.github.io/client-demo-site/"
                    projectName="Client Demo Site"
                    description="Client Demo Site is a demonstration website designed to showcase the capabilities
                            of responsive layout and modern technology integration. The project is built using
                            React, Vite, CSS Modules, and MUI Material, ensuring fast page loading, a flexible
                            design, and a user-friendly UI."
                    technologies=""
                    image={
                        <StaticImage
                            src="https://raw.githubusercontent.com/VasylBiliak/client-demo-site/refs/heads/main/public/baner.png"
                            alt="Client Demo Site Preview"
                            placeholder="blurred"
                            min-width={300}
                            quality={95}
                            layout="constrained"
                        />
                    }
                />
                {/*fe-react-2024*/}
                <ProjectCard
                    repoUrl="https://github.com/VasylBiliak/fe-react-2024"
                    externalUrl="https://vasylbiliak.github.io/fe-react-2024"
                    projectName="React application"
                    description="This page was developed during the 'Intro to React' course at Master's
                            Academy. It is part of a social initiative by MOCG, where I had the
                            opportunity to collaborate with experienced Frontend mentors and create a
                            personal project for my portfolio"
                    technologies="HTML, CSS Modules, JS, React,  Vite, mui-material"
                    image={
                        <StaticImage
                            src="../../images/Screenshot_24.png"
                            alt="banner fe-react-2024"
                            placeholder="blurred"
                            min-width={300}
                            quality={95}
                            layout="constrained"
                        />
                    }
                />

                {/*TORASSEMBLE*/}
                <ProjectCard
                    // repoUrl="https://github.com/VasylBiliak/torassembly"
                    externalUrl="https://www.torassembly.ca/"
                    projectName="TorAssembly Project"
                    description="Single-page website showcasing the company’s
                            services and allowing service orders.
                            Designed for performance, adaptability, and ease of use, it ensures
                            high-quality content display across devices, optimized loading,
                            and supports theme switching for user convenience."
                    technologies="HTML, CSS, JS, React, Redux Toolkit, theme-switcher, seo, css-modules"
                    image={
                        <StaticImage
                            src="../../images/svg/TORASSEMBLE.svg"
                            alt="TorAssembly banner"
                            placeholder="blurred"
                            min-width={300}
                            quality={95}
                            layout="constrained"
                        />
                    }
                />
                {/*Restaurant QR Menu*/}
                <ProjectCard
                    externalUrl="https://l-2022.github.io/menu/#example-1"
                    // repoUrl="https://l-2022.github.io/menu"
                    projectName="Restaurant QR Menu"
                    description="Restaurant QR Menu is a dynamic web application designed for restaurants to present their menu digitally. It features QR code integration, responsive UI, animated transitions, and an interactive dish selection system. Built with React, Vite, and CSS Modules."
                    technologies="React, Vite, CSS Modules"
                    image={
                        <StaticImage
                            src="https://l-2022.github.io/menu/banner.png"
                            alt="Restaurant QR Menu Preview"
                            placeholder="blurred"
                            quality={95}
                            layout="constrained"
                        />
                    }
                />

                {/*FE COURSE*/}
                <ProjectCard
                    repoUrl="https://github.com/VasylBiliak/fe-course-basic-2023"
                    externalUrl="https://vasylbiliak.github.io/fe-course-basic-2023/GamesProject/index.html"
                    projectName="FE Course Basic 2023"
                    description="This project was developed during the `Frontend Basics` course as part of my
                    learning journey in web development. It showcases a collection of simple
                    browser-based games built using fundamental web technologies"
                    technologies=""
                    image={
                        <StaticImage
                            src="https://raw.githubusercontent.com/VasylBiliak/fe-course-basic-2023/refs/heads/main/docs/GamesProject/img/about.png"
                            alt="TorAssembly Project Logo"
                            placeholder="blurred"
                            min-width={300}
                            quality={95}
                            layout="constrained"
                        />
                    }
                />
                {/*SUPERHEROES FULL STEAK*/}
                <ProjectCard
                    // repoUrl="https://github.com/L-2022/superheroes-frontend"
                    externalUrl="https://l-2022.github.io/superheroes-frontend"
                    projectName="Superheroes"
                    description="A web application for searching and exploring superheroes. Users can
                            find information about various superheroes, including their abilities,
                            origins, and appearances. The project was developed as a frontend
                            application with a focus on smooth UI and API integration"
                    technologies="HTML, CSS, JS, React, Axios, React Router, Vite"
                    image={
                        <StaticImage
                            src="https://l-2022.github.io/superheroes-frontend/baner-site.webp"
                            alt="Superheroes Project Preview"
                            placeholder="blurred"
                            min-width={300}
                            quality={95}
                            layout="constrained"
                        />
                    }
                />
            </div>
        </div>

    );
};

export default Projects;
