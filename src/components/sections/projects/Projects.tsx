import React, { useState, useEffect } from 'react';
import ProjectCard from '@/components/ui/card/ProjectCard';
import { fetchProjectsData } from '@/services/projectsService';
import { Project } from '@/data/projects';
import * as styles from './projects.module.css';

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProjects = async () => {
            const response = await fetchProjectsData();
            
            if (response.data) {
                setProjects(response.data);
            }
            
            setLoading(false);
        };

        loadProjects();
    }, []);

    if (loading) {
        return null;
    }

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
