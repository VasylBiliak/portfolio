import React from 'react';
import ProjectCard from '@/components/ui/card/ProjectCard';
import { projects } from '@/data/projects'
import * as styles from './projects.module.css';

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
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
