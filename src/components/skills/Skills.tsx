import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaNpm,
    FaGithub, FaGitlab, FaLinux, FaUbuntu, FaAppStore, FaPython,
    FaNetworkWired, FaIndustry, FaCogs } from 'react-icons/fa';

import { SiJavascript, SiTypescript, SiRedux, SiGatsby, SiMysql,
        SiMongodb, SiFirebase, SiPostgresql, SiSequelize } from 'react-icons/si';
import { MdDevices } from 'react-icons/md';
import * as styles from "./skills.module.css";

const skills = [
    { color: '#f05a1a', text: 'HTML', icon: FaHtml5 },
    { color: '#2965f1', text: 'CSS', icon: FaCss3Alt },
    { color: '#4ddbb3', text: 'Responsive Design', icon: MdDevices },
    { color: '#e3e017', text: 'JavaScript', icon: SiJavascript },
    { color: '#2a74d4', text: 'TypeScript', icon: SiTypescript },
    { color: '#61dafb', text: 'React', icon: FaReact },
    { color: '#764abc', text: 'Redux Toolkit', icon: SiRedux },
    { color: '#663399', text: 'Gatsby', icon: SiGatsby },
    { color: '#3e863d', text: 'Node.js', icon: FaNodeJs },
    { color: '#4479A1', text: 'MySQL', icon: SiMysql },
    { color: '#13aa52', text: 'MongoDB', icon: SiMongodb },
    { color: '#ffa50f', text: 'Firebase', icon: SiFirebase },
    { color: '#f14e32', text: 'Git', icon: FaGitAlt },
    { color: '#cb3837', text: 'npm', icon: FaNpm },
    { color: '#333', text: 'GitHub', icon: FaGithub },
    { color: '#FCA121', text: 'GitLab', icon: FaGitlab },
    { color: '#000000', text: 'Linux', icon: FaLinux },
    { color: '#E95420', text: 'Ubuntu', icon: FaUbuntu },
    { color: '#FF5C5C', text: 'Postman', icon: FaAppStore },
    { color: '#3C3C3C', text: 'Pgadmin4', icon: SiPostgresql },
    { color: '#306998', text: 'Python', icon: FaPython },
    { color: '#2F2F2F', text: 'TCP/IP', icon: FaNetworkWired },
    { color: '#F05032', text: 'Sequelize', icon: SiSequelize },
    { color: '#F39C12', text: 'TiaPortal', icon: FaIndustry },
    { color: '#27AE60', text: 'EasyBuilder', icon: FaCogs }

];

const Skills: React.FC = () => {
    return (
                <ul className={styles.skills_list}>
                    {skills.map((skill) => (
                            <li className={styles.skill} key={skill.text} data-aos="fade-up">
                                <skill.icon  style={{ fontSize: '90px', color: skill.color, marginBottom: '1.5rem' }} aria-hidden="true" />
                                <p>{skill.text}</p>
                            </li>

                    ))}
                </ul>
    );
};

export default Skills;
