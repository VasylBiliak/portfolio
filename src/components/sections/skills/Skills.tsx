import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGitAlt, FaNpm,
    FaGithub, FaGitlab } from 'react-icons/fa';
import { AiOutlinePython } from "react-icons/ai";
import { RiTailwindCssLine } from "react-icons/ri";
import { LiaYarn } from "react-icons/lia";
import { SiTypescript, SiRedux, SiGatsby, SiMysql, SiMongodb, SiFirebase,
    SiPostgresql, SiNextdotjs, SiFlask, SiFigma  } from 'react-icons/si';
import { MdDevices } from 'react-icons/md';
import { SiPostman, SiExpress } from "react-icons/si";
import { RiVercelLine } from "react-icons/ri";
import { SiLucide } from "react-icons/si";
import * as styles from "./skills.module.css";


const skills = [
    { color: '#f05a1a', text: 'HTML5', icon: FaHtml5 },
    { color: '#2965f1', text: 'CSS', icon: FaCss3Alt },
    { color: '#38bdf8', text: 'Tailwind', icon: RiTailwindCssLine },
    { color: '#4ddbb3', text: 'Responsive Design', icon: MdDevices },
    { color: '#fff900', text: 'JavaScript', icon: FaJs },
    { color: '#2a74d4', text: 'TypeScript', icon: SiTypescript },
    { color: '#61dafb', text: 'React', icon: FaReact },
    { color: '#ffffff', text: 'Next.js', icon: SiNextdotjs },
    { color: '#663399', text: 'Gatsby', icon: SiGatsby },
    { color: '#764abc', text: 'Redux Toolkit', icon: SiRedux },
    { color: '#3e863d', text: 'Node.js', icon: FaNode },
    { color: '#fff900', text: 'Python', icon: AiOutlinePython },
    { color: '#FFFFFFFF', text: 'Flask', icon: SiFlask },
    { color: '#336791', text: 'Postgresql', icon: SiPostgresql },
    { color: '#4479A1', text: 'MySQL', icon: SiMysql },
    { color: '#13aa52', text: 'MongoDB', icon: SiMongodb },
    { color: '#F24E1E', text: 'Figma', icon: SiFigma },
    { color: '#ffa50f', text: 'Firebase', icon: SiFirebase },
    { color: '#f14e32', text: 'Git', icon: FaGitAlt },
    { color: '#FFFFFFFF', text: 'GitHub', icon: FaGithub },
    { color: '#FCA121', text: 'GitLab', icon: FaGitlab },
    { color: '#FF6C37', text: 'Postman', icon: SiPostman },
    { color: '#cb3837', text: 'npm', icon: FaNpm },
    { color: '#2C8EBB', text: 'Yarn', icon: LiaYarn },
    { color: '#3e863d', text: 'Express', icon: SiExpress },
    { color: '#ffffff', text: 'Vercel', icon: RiVercelLine },
    { color: '#5E6AD2', text: 'SiLucide', icon: SiLucide },

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
