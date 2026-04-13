import React from "react";
import TextAnimation from "@/components/ui/textJello/TextJello";

const SimpleHero: React.FC = () => {
    return (
        <>
            <h2 className="about_my">
                <TextAnimation text="I'm" />
            </h2>
            <div className="about_my">
                <h2 className="my_name">
                    <TextAnimation text="Vasyl " />
                    <TextAnimation text="Biliak" />
                </h2>
            </div>
            <h2 className="about_my">
                <div>
                    <TextAnimation text="Frontend " />
                </div>
                <div>
                    <TextAnimation text="Developer" />
                </div>
            </h2>
            <p className="text_description">
                I'm passionate about building interactive, accessible, and responsive websites and web applications. I enjoy exploring new technologies, concepts, and best practices in web development. I'm always looking for ways to enhance my skills and create innovative solutions.
            </p>
        </>
    );
};

export default SimpleHero;
