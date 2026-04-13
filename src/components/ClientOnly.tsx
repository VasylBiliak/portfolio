import React, { useState, useEffect, ReactNode } from 'react';

interface ClientOnlyProps {
    children: ReactNode;
    fallback?: ReactNode;
}

/**
 * ClientOnly - SSR-safe wrapper
 * Prevents children from rendering during Gatsby SSR build phase.
 * Only renders on the client after hydration.
 */
const ClientOnly: React.FC<ClientOnlyProps> = ({ children, fallback = null }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <>{fallback}</>;
    }

    return <>{children}</>;
};

export default ClientOnly;
