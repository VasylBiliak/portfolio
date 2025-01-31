import React, { ReactNode } from 'react';
import ScrollReveal from '../fadeInOnScroll';
import * as styles from './sectionWrapper.module.css';

interface SectionWrapperProps {
    title: string;
    section_id: string;
    children: ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, section_id, children }) => {
    return (
        <ScrollReveal className={styles.wrapper_section}>
            <section className={styles.section_content} id={section_id}>
                <h2 className={styles.section_title}>{title}</h2>
                {children}
            </section>
        </ScrollReveal>
    );
};

export default SectionWrapper;

/*
* */
// import React, { ReactNode } from 'react';
// import ScrollReveal from '../fadeInOnScroll';
// import * as styles from './sectionWrapper.module.css';
// import AnimatedTypingText from "../animatedTypingText/AnimatedTypingText";
//
// interface SectionWrapperProps {
//     title: string;
//     section_id: string;
//     children: ReactNode;
// }
//
// const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, section_id, children }) => {
//     return (
//         <ScrollReveal className={styles.wrapper_section}>
//             <section className={styles.section_content} id={section_id}>
//                 <h2 className={styles.section_title}>
//                     <AnimatedTypingText
//                         duration={1}
//                         text={title}
//                     />
//                 </h2>
//
//                 {children}
//             </section>
//         </ScrollReveal>
//     );
// };
//
// export default SectionWrapper;
