import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaNpm, FaGithub, FaGitlab, FaAppStore } from 'react-icons/fa';
import { AiOutlinePython } from "react-icons/ai";
import { LiaYarn } from "react-icons/lia";
import { SiTypescript, SiRedux, SiGatsby, SiMysql, SiMongodb, SiFirebase, SiPostgresql, SiNextdotjs, SiFlask } from 'react-icons/si';
import { MdDevices } from 'react-icons/md';
import * as styles from "./skills.module.css";


const skills = [
    { color: '#f05a1a', text: 'HTML', icon: FaHtml5 },
    { color: '#2965f1', text: 'CSS', icon: FaCss3Alt },
    { color: '#4ddbb3', text: 'Responsive Design', icon: MdDevices },
    { color: '#fff900', text: 'JavaScript', icon: FaJs },
    { color: '#2a74d4', text: 'TypeScript', icon: SiTypescript },
    { color: '#61dafb', text: 'React', icon: FaReact },
    { color: '#c4c4c4', text: 'Next.js', icon: SiNextdotjs },
    { color: '#663399', text: 'Gatsby', icon: SiGatsby },
    { color: '#764abc', text: 'Redux Toolkit', icon: SiRedux },
    { color: '#3e863d', text: 'Node.js', icon: FaNodeJs },
    { color: '#fff900', text: 'Python', icon: AiOutlinePython },
    { color: '#c4c4c4', text: 'Flask', icon: SiFlask },
    { color: '#336791', text: 'Postgresql', icon: SiPostgresql },
    { color: '#4479A1', text: 'MySQL', icon: SiMysql },
    { color: '#13aa52', text: 'MongoDB', icon: SiMongodb },
    { color: '#ffa50f', text: 'Firebase', icon: SiFirebase },
    { color: '#f14e32', text: 'Git', icon: FaGitAlt },
    { color: '#c4c4c4', text: 'GitHub', icon: FaGithub },
    { color: '#FCA121', text: 'GitLab', icon: FaGitlab },
    { color: '#FF5C5C', text: 'Postman', icon: FaAppStore },
    { color: '#cb3837', text: 'npm', icon: FaNpm },
    { color: '#2C8EBB', text: 'Yarn', icon: LiaYarn },
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
