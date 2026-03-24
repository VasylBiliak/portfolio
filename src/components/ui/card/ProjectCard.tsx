import React, { useEffect, useState, ReactNode } from 'react';
import QRCodeButton from "@components/ui/QRCodeButton/QRCodeButton";
import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
import * as styles from './card.module.css';
import { Project } from "@/data/projects";

const ProjectCard: React.FC<Project> = ({
                                                     repoUrl,
                                                     externalUrl,
                                                     projectName,
                                                     // image, {/*<div className={styles.projects_list__image}>{image}
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
        <div className={styles.card}>
            <div className={styles.card__content}>
                <article className={styles.card__title}>
                    {projectName}
                </article>

                <p className={styles.card__description}>
                    {description}
                </p>
                <p className={`${styles.card__description} ${styles.card__technologies}`}>
                    {technologies}
                </p>

                <div className={styles.card__actionsWrapper}>
                    <div className={styles.card__actions}>
                    {externalUrl && (
                        <>
                            <QRCodeButton url={externalUrl}>
                                <a
                                    href={externalUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.card__button}
                                    aria-label="Live Demo"
                                >
                                    <BiLinkExternal className={styles.card__icon} />
                                </a>
                            </QRCodeButton>
                        </>
                    )}

                    {repoUrl && (
                        <a
                            href={repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.card__button}
                            aria-label="View Project"
                        >
                            <FaGithub className={styles.card__icon} />
                        </a>
                    )}
                </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
