import * as React from "react";
import { navigate } from "gatsby";

const NotFound = () => {
    React.useEffect(() => {
        if (typeof window !== "undefined") {
            const currentPath = window.location.pathname;
            if (currentPath !== "/portfolio/") {
                navigate("/portfolio/", { replace: true });
            }
        }
    }, []);

    return (
        <div>
            <h1>Page not found</h1>
        </div>
    );
};

export default NotFound;
