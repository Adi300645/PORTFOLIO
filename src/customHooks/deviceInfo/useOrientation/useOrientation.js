import { useState, useEffect } from "react";
const useOrientation = () => {
    const [isPortrait, setPortrait] = useState(null);
    useEffect(() => {
        setPortrait(window.innerWidth > window.innerHeight ? false : true);
    }, []);
    return isPortrait;
}
export default useOrientation;