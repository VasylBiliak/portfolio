import React, { useEffect, useState, ReactNode } from 'react';
import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
import * as styles from './card.module.css';

import QRCode from "@components/projects/QRCode";
import { Project } from "../../data/projects";

const ProjectCard: React.FC<Project> = ({
                                                     repoUrl,
                                                     externalUrl,
                                                     projectName,
                                                     image,
                                                     description: propDescription,
                                                     technologies: propTechnologies,
                                                 }) => {
    const [description, setDescription] = useState(propDescription || 'Fetching description...');
    const [technologies, setTechnologies] = useState(propTechnologies || 'HTML, CSS, JS...');

    useEffect(() => {
        if ((!repoUrl || (!repoUrl.includes("github.com"))) || (propDescription && propTechnologies)) return;

        // Витягуємо "user/repo" з URL
        const match = repoUrl.match(/github\.com\/([^/]+\/[^/]+)/);
        const githubPath = match?.[1];

        if (!githubPath) return;

        async function fetchRepoData() {
            try {
                const response = await fetch(`https://api.github.com/repos/${githubPath}`);
                if (!response.ok) throw new Error("Failed to fetch repository data");

                const data = await response.json();
                setDescription(propDescription || data.description || "No description available");
                setTechnologies(propTechnologies || data.topics?.join(', ') || "No technologies listed");
            } catch (error) {
                console.error(error);
                setTechnologies("Failed to load technologies");
                setDescription("Failed to load description");

            }
        }

        fetchRepoData();
    }, [repoUrl, propDescription, propTechnologies]);

    return (
        <div className={styles.projects_list__box}>
            <div className={styles.box_info}>
                <article className={styles.box_info__heading}>{projectName}</article>

                <p className={styles.box_info__description}>{description}</p>
                <p className={`${styles.box_info__description} ${styles.box_info__technology}`}>
                {technologies}
            </p>
            </div>
            {/*<div className={styles.projects_list__image}>{image}</div>*/}
            <div className={styles.box_list_buttons}>
                <div className={styles.box_list_buttons}>
                    {repoUrl && (
                        <a
                            href={repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.box_list__button}
                            aria-label="View Project"
                        >
                            <FaGithub className={styles.box_list__icon} />
                        </a>
                    )}
                    {externalUrl && (
                        <>
                            <a
                                href={externalUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.box_list__button}
                                aria-label="Live Demo"
                            >
                                <BiLinkExternal className={styles.box_list__icon} />
                            </a>
                            <div className={styles.box_list__button}>
                                <QRCode repoUrl={externalUrl} />
                            </div>
                        </>
                    )}
                </div>
            </div>

        </div>
    );
};

export default ProjectCard;
