import React, { ReactNode } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BackToTop from "@/components/ui/backToBtn";
import BackgroundMain from "@/components/ui/Background";
import "../styles/global.css";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout">
            <BackgroundMain />
            <Header />
            <main className="content">{children}</main>
            <Footer />
            <BackToTop />
        </div>
    );
};

export default Layout;
