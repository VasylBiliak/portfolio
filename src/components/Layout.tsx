import React, { ReactNode } from "react";
import Navbar from "../components/navbar";
import Footer from "./Footer";
import BackToBtn from "./backToBtn";
import "../styles/global.css";
import Helmet from "./helmet";
import BackgroundImage from "./backgroundImage";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout">
            <Helmet />
            <BackgroundImage />
            <Navbar />
            <main className="content">{children}</main>
            <Footer />
            <BackToBtn />
        </div>
    );
};

export default Layout;
