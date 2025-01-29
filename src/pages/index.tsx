import React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";
import ProjectsList from "../components/projects";
import Skills from "../components/skills";
import About from "../components/about";
import Home from "../components/Home";
import SectionWrapper from "../components/sectionWrapper";

const IndexPage: React.FC<PageProps> = () => {
    return (
            <Layout>
                <Home />
                <SectionWrapper section_id="about" title="About Me"><About /></SectionWrapper>
                <SectionWrapper section_id="skills" title="Skills"><Skills /></SectionWrapper>
                <SectionWrapper section_id="projects" title="Projects"><ProjectsList /></SectionWrapper>
            </Layout>
    );
};

export default IndexPage;
