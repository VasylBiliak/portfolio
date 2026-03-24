import React, { ReactNode } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/backToBtn";
import BackgroundImage from "@/components/ui/backgroundImage";
import "../styles/global.css";

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
