import { useState, useEffect } from 'react';

/**
 * Custom hook that calculates the spacing (e.g., margin-top and gap)
 * based on the window's width. It returns the appropriate spacing value
 * for different screen sizes, allowing for responsive design adjustments.
 *
 * It listens for window resize events and updates the spacing value accordingly.
 *
 * Usage: Use this hook in a component to dynamically apply spacing based on screen width.
 */
const useSpacing = () => {
    const [spacing, setSpacing] = useState(80); // Initial value for margin-top and gap

    useEffect(() => {
        // Function to update the spacing value based on the window's width
        const updateSpacing = () => {
            if (window.innerWidth <= 400) {
                setSpacing(15); // For small smartphones (max width 400)
            } else if (window.innerWidth <= 500) {
                setSpacing(50); // For regular smartphones (max width 500px)
            } else if (window.innerWidth <= 768) {
                setSpacing(80); // For regular smartphones (max width 768px)
            } else if (window.innerWidth <= 998) {
                setSpacing(120); // For tablets (max width 998px)
            } else {
                setSpacing(150); // For large screens (larger than 998px)
            }
        };

        updateSpacing(); // Call the function initially to set the correct spacing
        window.addEventListener('resize', updateSpacing); // Listen for window resize to update spacing dynamically

        // Cleanup event listener when the component using the hook is unmounted
        return () => window.removeEventListener('resize', updateSpacing);
    }, []); // Empty dependency array ensures this effect runs once when the component mounts

    return spacing; // Return the calculated spacing value
};

export default useSpacing;
