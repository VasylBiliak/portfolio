import React, { useEffect, useState, ReactNode, useMemo } from 'react';
import QRCodeButton from "@components/ui/QRCodeButton/QRCodeButton";
import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
import * as styles from './card.module.css';
import { Project } from "@/data/projects";
import ElectricBorder from "@components/ui/ElectricBorder/ElectricBorder";
import useCssVariable from "@/hooks/useCssVariable";

const ProjectCard: React.FC<Project> = ({
    repoUrl,
    externalUrl,
    projectName,
    description: propDescription,
    technologies: propTechnologies,
}) => {
    const [description, setDescription] = useState(propDescription || 'Fetching description...');
    const [technologies, setTechnologies] = useState(propTechnologies || 'HTML, CSS, JS...');
    const borderColor = useCssVariable('--btn-text');
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if ((!repoUrl || (!repoUrl.includes("github.com"))) || (propDescription && propTechnologies)) return;

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

      const [expanded, setExpanded] = useState(false);

  const words = useMemo(() => description.trim().split(/\s+/), [description]);

  const isLong = words.length > 15;

  const displayedText = useMemo(() => {
    if (!isLong) return description;
    return expanded ? description : words.slice(0, 15).join(" ") + "...";
  }, [expanded, isLong, description, words]);



    return (
        <ElectricBorder
            color={borderColor}
            speed={isHovered ? 0.8 : 0.05}
            chaos={isHovered ? 0.1 : 0.08}
            style={{ borderRadius: 12 }}
        >
            <div className={styles.card}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className={styles.card__content}>
                    <article className={styles.card__title}>
                        {projectName}
                    </article>

                    <p className={styles.card__description}>
                        {displayedText}

                        {isLong && (
                            <button 
                                onClick={() => setExpanded(prev => !prev)}
                                className={styles.card__description_btn}
                            >
                                {expanded ? "Read less" : "Read more"}
                            </button>
                        )}
                    </p>
                    <p className={`${styles.card__description} ${styles.card__technologies}`}>
                        {technologies}
                    </p>

                    <div className={styles.card__actionsWrapper}>
                        <div className={styles.card__actions}>
                            {externalUrl && (
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
        </ElectricBorder>
    );
};

export default ProjectCard;