import React from 'react';

import * as styles from './projects.module.css';
import ProjectCard from '@/components/ui/card/ProjectCard';
import { projects } from '@/data/projects'

const Projects: React.FC = () => {
    return (
        <div className={styles.projects_wrapper}>
            <div className={styles.projects_list}>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        repoUrl={project.repoUrl || ""}
                        externalUrl={project.externalUrl || ""}
                        projectName={project.projectName}
                        description={project.description}
                        technologies={project.technologies}
                        image={
                            <img
                                src={project.image || "/default-project.png"}
                                alt={project.projectName || "/default-project.png"}
                                className="w-full h-auto"
                                loading="lazy"
                            />
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
