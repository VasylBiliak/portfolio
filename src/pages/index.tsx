import React from "react";
import { useState, useEffect } from "react";
import { PageProps } from "gatsby";
import Layout from "@/components/Layout";
import Contact from "@/components/sections/contact";
import ProjectsList from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import About from "@/components/sections/about";
import Home from "../components/Home";
import Seo from "@/components/Seo";
import SectionWrapper from '@/components/sections/sectionWrapper';
import Loader from "@/components/ui/loader/Loader";



const IndexPage: React.FC<PageProps> = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loader fullScreen />;
    }

    
    return (
        <Layout>
            <Home />
            <SectionWrapper section_id="about" title="About Me">
                <About />
            </SectionWrapper>
            <SectionWrapper section_id="skills" title="Skills">
                <Skills />
            </SectionWrapper>
            <SectionWrapper section_id="projects" title="Projects">
                <ProjectsList />
            </SectionWrapper>
            <SectionWrapper section_id="contact" title="Contact">
                <Contact />
            </SectionWrapper>
        </Layout>
    );
};

export const Head = () => <Seo />;
export default IndexPage;
