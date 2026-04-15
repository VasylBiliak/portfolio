import React, { Suspense, lazy, useState, useEffect } from "react";
import type { PageProps } from "gatsby";
import Layout from "@/components/Layout";
import Home from "../components/Home";
import Seo from "@/components/Seo";
import SectionWrapper from '@/components/sections/sectionWrapper';
import Loader from "@/components/ui/loader";

// Lazy load below-fold sections for better performance
const About = lazy(() => import("@/components/sections/about"));
const Skills = lazy(() => import("@/components/sections/skills"));
const ProjectsList = lazy(() => import("@/components/sections/projects"));
const Contact = lazy(() => import("@/components/sections/contact"));



// Lightweight fallback for lazy-loaded sections
const SectionFallback = () => <div style={{ minHeight: '50vh' }} />;

const IndexPage: React.FC<PageProps> = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
        <Layout>
            <Home />
            <Suspense fallback={<SectionFallback />}>
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
            </Suspense>
        </Layout>
    );
};

export const Head = () => <Seo />;
export default IndexPage;
