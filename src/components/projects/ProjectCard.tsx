import React, { useEffect, useState, ReactNode } from 'react';
import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
import * as styles from './projects.module.css';

interface ProjectCardProps {
    repoUrl: string;
    projectName: string;
    image: ReactNode;
    description?: string;
    technologies?: string;
    externalUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
                                                     repoUrl,
                                                     projectName,
                                                     image,
                                                     description: propDescription,
                                                     technologies: propTechnologies,
                                                     externalUrl
                                                 }) => {
    const [description, setDescription] = useState(propDescription || 'Fetching description...');
    const [technologies, setTechnologies] = useState(propTechnologies || 'Fetching technologies...');

    useEffect(() => {
        if (propDescription && propTechnologies) return;

        async function fetchRepoData() {
            try {
                const response = await fetch(`https://api.github.com/repos/${repoUrl}`);
                if (!response.ok) throw new Error("Failed to fetch repository data");

                const data = await response.json();
                setDescription(propDescription || data.description || "No description available");
                setTechnologies(propTechnologies || data.topics?.join(', ') || "No technologies listed");
            } catch (error) {
                console.error(error);
                setDescription("Failed to load description");
                setTechnologies("Failed to load technologies");
            }
        }

        fetchRepoData();
    }, [repoUrl]);

    const getGitHubPagesUrl = () => {
        const [username, repo] = repoUrl.split("/");
        return `https://${username}.github.io/${repo}/`;
    };



    return (
        <div className={styles.projects_list__box}>
            <div className={styles.box_info}>
                <article className={styles.box_info__heading}>{projectName}</article>
                <p className={`${styles.box_info__description} ${styles.box_info__technology}`}>
                    {technologies}
                </p>
                <p className={styles.box_info__description}>{description}</p>
            </div>
            <div className={styles.box_list_buttons}>
                <div className={styles.box_list_buttons}>
                    <a
                        href={`https://github.com/${repoUrl}`}
                        target="_blank"
                        className={styles.box_list__button}
                        aria-label="View Project">
                        <FaGithub className={styles.box_list__icon} />
                    </a>
                    <a
                        href={externalUrl ? externalUrl : getGitHubPagesUrl()}
                        target="_blank"
                        className={styles.box_list__button}
                        aria-label={externalUrl ? 'Live Demo' : 'GitHub Pages'}>
                        <BiLinkExternal className={styles.box_list__icon} />
                    </a>
                </div>


            </div>
            <div className={styles.projects_list__image}>{image}</div>
        </div>
    );
};

export default ProjectCard;
