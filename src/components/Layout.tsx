import React, { ReactNode } from "react";
import Header from "../components/navbar";
import Footer from "./Footer";
import BackToTop from "./backToBtn";
import "../styles/global.css";
import BackgroundImage from "./backgroundImage";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout">
            <BackgroundImage />
            <Header />
            <main className="content">{children}</main>
            <Footer />
            <BackToTop />
        </div>
    );
};

export default Layout;
