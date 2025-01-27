import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaNpm } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiRedux, SiGatsby, SiMysql, SiMongodb, SiFirebase } from 'react-icons/si';
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
];

const Skills: React.FC = () => {
    return (
                <ul className={styles.skills_list}>
                    {skills.map((skill, index) => (
                            <li className={styles.skill} key={index} data-aos="fade-up">
                                <skill.icon  style={{ fontSize: '90px', color: skill.color, marginBottom: '1.5rem' }} aria-hidden="true" />
                                <p>{skill.text}</p>
                            </li>

                    ))}
                </ul>
    );
};

export default Skills;
