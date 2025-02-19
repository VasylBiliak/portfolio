// import React from 'react';
// import * as styles from './projects.module.css';
// import { FaGithub } from 'react-icons/fa';
// import { BiLinkExternal } from 'react-icons/bi';
// import { StaticImage } from 'gatsby-plugin-image';
//
//
// const Projects: React.FC = () => {
//     return (
//         <div className={styles.projects_wrapper}>
//             <div className={styles.projects_list}>
//                 <div className={styles.projects_list__box}>
//                     <div className={styles.box_info}>
//                         <article className={styles.box_info__heading}>
//                             React application
//                         </article>
//                         <p className={`
//                             ${styles.box_info__description}
//                             ${styles.box_info__technology}`}>
//                             React, TypeScript, React Router, API, Vite, Redux Toolkit.
//                         </p>
//                         <p className={styles.box_info__description} >
//                             This page was developed during the 'Intro to React' course at Master's
//                             Academy. It is part of a social initiative by MOCG, where I had the
//                             opportunity to collaborate with experienced Frontend mentors and create a
//                             personal project for my portfolio.
//                         </p>
//                         <div className={styles.box_list_buttons}>
//                             <a
//                                 href='https://github.com/VasylBiliak/fe-react-2024'
//                                 target='_blank'
//                                 className={styles.box_list__button}
//                                 aria-label='View on GitHub'
//                             >
//                                 <FaGithub className={styles.box_list__icon} />
//                             </a>
//                             <a
//                                 href='https://vasylbiliak.github.io/fe-react-2024/'
//                                 target='_blank'
//                                 className={styles.box_list__button}
//                                 aria-label='Live View'
//                             >
//                                 <BiLinkExternal className={styles.box_list__icon} />
//                             </a>
//                         </div>
//                         <div className={styles.projects_list__image}>
//                             <StaticImage
//                                 src="../../images/Screenshot_24.png"
//                                 alt="My description"
//                                 placeholder="blurred"
//                                 min-width={300}
//                                 quality={95}
//                                 layout="constrained"
//                             />
//                         </div>
//                     </div>
//
//                 </div>
//
//
//
//
//             </div>
//         </div>
//
//     );
// };
//
// export default Projects;
// {/*<div className={styles.projects_list__box}>*/}
// {/*    <div className={styles.box_info}>*/}
// {/*        <article className={styles.box_info__heading}>*/}
// {/*            Superheroes*/}
// {/*        </article>*/}
// {/*        <p className={`*/}
// {/*            ${styles.box_info__description} */}
// {/*            ${styles.box_info__technology}`}>*/}
// {/*            React, TypeScript, React Router, API, Vite, Redux Toolkit.*/}
// {/*        </p>*/}
// {/*        <p className={styles.box_info__description} >*/}
// {/*            A web application for searching and exploring superheroes. Users can find information about various superheroes, including their abilities, origins, and appearances. The project was developed as a frontend application with a focus on smooth UI and API integration.*/}
// {/*        </p>*/}
// {/*        <div className={styles.box_list_buttons}>*/}
// {/*            <a*/}
// {/*                href='https://github.com/L-2022/superheroes-frontend'*/}
// {/*                target='_blank'*/}
// {/*                className={styles.box_list__button}*/}
// {/*                aria-label='View on GitHub'*/}
// {/*            >*/}
// {/*                <FaGithub className={styles.box_list__icon} />*/}
// {/*            </a>*/}
// {/*            <a*/}
// {/*                href='https://l-2022.github.io/superheroes-frontend/'*/}
// {/*                target='_blank'*/}
// {/*                className={styles.box_list__button}*/}
// {/*                aria-label='Live View'*/}
// {/*            >*/}
// {/*                <BiLinkExternal className={styles.box_list__icon} />*/}
// {/*            </a>*/}
// {/*        </div>*/}
//
// {/*    </div>*/}
// {/*    <div className={styles.projects_list__image}>*/}
// {/*        <StaticImage*/}
// {/*            src='https://l-2022.github.io/superheroes-frontend/baner-site.webp'*/}
// {/*            alt='Superheroes Project Preview'*/}
// {/*            placeholder='blurred'*/}
// {/*            quality={95}*/}
// {/*            layout='constrained'*/}
// {/*        />*/}
// {/*    </div>*/}
// {/*</div>*/}
//
//
//
//
// {/*<div className={styles.projects_list__box}>*/}
// {/*    <div className={styles.box_info}>*/}
// {/*        <article className={styles.box_info__heading}>*/}
// {/*            TorAssembly Project*/}
// {/*        </article>*/}
// {/*        <p className={`*/}
// {/*                ${styles.box_info__description} */}
// {/*                ${styles.box_info__technology}`}>*/}
// {/*            TypeScript, React, Redux Toolkit, Express, PostgreSQL.*/}
// {/*        </p>*/}
// {/*        <p className={styles.box_info__description}>*/}
// {/*            TorAssembly is a project that aims to provide secure and anonymous communication.*/}
// {/*            It was developed as part of my personal project to explore advanced concepts of*/}
// {/*            cryptography, networking, and distributed systems.*/}
// {/*        </p>*/}
// {/*        <div className={styles.box_list_buttons}>*/}
// {/*            <a*/}
// {/*                href="https://github.com/VasylBiliak/torassembly"*/}
// {/*                target="_blank"*/}
// {/*                className={styles.box_list__button}*/}
// {/*                aria-label="View on GitHub"*/}
// {/*            >*/}
// {/*                <FaGithub className={styles.box_list__icon} />*/}
// {/*            </a>*/}
// {/*            <a*/}
// {/*                href="https://www.torassembly.ca/"*/}
// {/*                target="_blank"*/}
// {/*                className={styles.box_list__button}*/}
// {/*                aria-label="Live View"*/}
// {/*            >*/}
// {/*                <BiLinkExternal className={styles.box_list__icon} />*/}
// {/*            </a>*/}
// {/*        </div>*/}
// {/*    </div>*/}
// {/*    <div className={styles.projects_list__image}>*/}
// {/*        <StaticImage*/}
// {/*            src="../../images/svg/TORASSEMBLE.svg"*/}
// {/*            alt="TorAssembly Project Logo"*/}
// {/*            placeholder="blurred"*/}
// {/*            min-width={300}*/}
// {/*            quality={95}*/}
// {/*            layout="constrained"*/}
// {/*        />*/}
// {/*    </div>*/}
// {/*</div>*/}
// {/*<div className={styles.projects_list__box}>*/}
// {/*    <div className={styles.box_info}>*/}
// {/*        <article className={styles.box_info__heading}>*/}
// {/*            FE Course Basic 2023*/}
// {/*        </article>*/}
// {/*        <p className={`${styles.box_info__description} ${styles.box_info__technology}`}>*/}
// {/*            HTML, CSS, JavaScript, React.*/}
// {/*        </p>*/}
// {/*        <p className={styles.box_info__description}>*/}
// {/*            "FE Course Basic 2023" is a course project where I learned the foundations of front-end web development.*/}
// {/*            This project involves building responsive web pages with modern HTML, CSS, and JavaScript.*/}
// {/*            Additionally, React was used to implement interactive components and create a dynamic user interface.*/}
// {/*        </p>*/}
// {/*        <div className={styles.box_list_buttons}>*/}
// {/*            <a*/}
// {/*                href="https://github.com/VasylBiliak/fe-course-basic-2023"*/}
// {/*                target="_blank"*/}
// {/*                className={styles.box_list__button}*/}
// {/*                aria-label="View on GitHub"*/}
// {/*            >*/}
// {/*                <FaGithub className={styles.box_list__icon} />*/}
// {/*            </a>*/}
// {/*            <a*/}
// {/*                href="https://vasylbiliak.github.io/fe-course-basic-2023/GamesProject/index.html"*/}
// {/*                target="_blank"*/}
// {/*                className={styles.box_list__button}*/}
// {/*                aria-label="Live View"*/}
// {/*            >*/}
// {/*                <BiLinkExternal className={styles.box_list__icon} />*/}
// {/*            </a>*/}
// {/*        </div>*/}
// {/*    </div>*/}
// {/*    <div className={styles.projects_list__image}>*/}
// {/*        <StaticImage*/}
// {/*            src="../../images/about.png"*/}
// {/*            alt="TorAssembly Project Logo"*/}
// {/*            placeholder="blurred"*/}
// {/*            min-width={300}*/}
// {/*            quality={95}*/}
// {/*            layout="constrained"*/}
// {/*        />*/}
// {/*    </div>*/}
// {/*</div>*/}
//
//
// .projects_wrapper  {
//     /*height: 100%;*/
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     /*padding-bottom: 50px;*/
// }
//
// .projects_list {
//     display: grid;
//     row-gap: 25px;
// }
//
// .projects_list__box {
//     width: 100%;
//     display: grid;
//     grid-template-columns: 1fr;
//     transition-duration: 0.3s;
//     position: relative;
//     border-radius: 30px;
//     box-shadow: 0 0 0 1px var(--text-secondary);
//     background-color: var(--color-bg-section-el);
//     overflow: hidden;
//     padding: 3rem 2rem 3rem 3rem;
//     gap: 5rem;
//     box-sizing: border-box;
// }
//
// .projects_list__box:hover {
//     box-shadow: 0 0 0 3px var(--btn-text);
// }
//
//
// .box_info  {
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: center;
//     gap: 15px;
//
// }
//
// .box_info__heading {
//     color: var(--text-secondary);
//     font-family: var(--font-title);
//     font-size: var(--font-size-large);
//     font-weight: bold;
// }
//
// .box_info__description {
//     word-wrap: break-word;
//     text-align: justify;
//     color: var(--text-secondary);
//     font-size:  var(--font-size-base);
//     font-weight: 400;
//     line-height: 1.5;
//
// }
//
// .box_info__technology {
//     font-weight: bold;
// }
//
// .box_list_buttons {
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     gap: 1.5rem;
// }
//
// .box_list__button {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 0.5rem;
//     text-decoration: none;
//     color: var(--text-primary);
//     padding: 0.8rem 1.3rem;
//     border-radius: 2px 12px;
//     font-weight: 500;
//     transition: all 0.3s ease;
// }
//
// .box_list__icon {
//     font-size: 4rem;
// }
//
// .box_list__button:hover {
//     color: var(--btn-text);
//     box-shadow: 0 0 8px 8px var(--btn-text);
//     transform: scale(1.05);
// }
//
// .projects_list__image {
//     width: 100%;
//     height: auto;
//     display: flex;
//     justify-content: center;
//     align-items: flex-start;
//     overflow: hidden;
//     border-radius: 20px;
// }
//
// .projects_list__image, image {
//     width: 100%;
//     height: auto;
//     max-width: 100%;
//     object-fit: cover;
//     border-radius: 20px;
//     max-height: 450px;
// }
//
// .projects_list__image > * {
//     border-radius: 20px;
// }
//
// @media screen and (max-width: 1200px) {
// }
//
// @media screen and (max-width: 998px) {
// }
//
// @media screen and (max-width: 768px) {
// .projects_list {
//         row-gap: 20px;
//     }
//
// .projects_list__box {
//         padding: 1.4rem;
//     }
// }
//
// @media screen and (min-width: 768px) {
// .projects_list {
//         row-gap: 20px;
//     }
//
// .projects_list__box {
//         grid-template-columns: 1fr 1fr;
//         gap: 1rem;
//     }
//
// .box_info {
//         align-items: flex-start;
//         justify-content: flex-start;
//     }
// }
//
// @media screen and (max-width: 430px) {
// .projects_list__box {
//         grid-template-columns: 1fr;
//     }
// .projects_list__image {
//
//     }
//
// .projects_list__image image {
//         border-radius: 10px;
//     }
// }
//
// @media screen and (max-width: 300px) {
// .projects_list__box {
//         gap: 0.9rem;
//     }
// }
//
//
