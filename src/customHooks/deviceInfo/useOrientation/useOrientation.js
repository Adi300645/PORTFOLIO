import { useState, useEffect } from "react";

const useOrientation = () => {
    const [isPortrait, setPortrait] = useState(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setPortrait(window.innerWidth > window.innerHeight ? false : true);
        };

        handleResize(); // Set initial orientation

        window.addEventListener('resize', handleResize);

        // Simulate a delay to ensure everything is loaded
        const timer = setTimeout(() => {
            setIsReady(true);
        }, 2000); // Adjust this delay as needed

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timer);
        };
    }, []);

    return { isPortrait, isReady };
};

export default useOrientation;