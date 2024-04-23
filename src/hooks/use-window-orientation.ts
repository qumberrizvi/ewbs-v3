import {useEffect, useState} from "react";

const useWindowOrientation = () => {
    const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('landscape');


    useEffect(() => {
        // only execute all the code below in client side
        // Handler to call on window resize
        function handleResize() {
            // Set window orientation to state
            setOrientation((window.matchMedia("(orientation: portrait)").matches) ? 'portrait' : 'landscape');
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return orientation;
}

export default useWindowOrientation;
