import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    // Extracts pathname property(key) from an object
    const location = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                document.querySelector(`[href="${location.hash}"]`)?.click();
            }, 0);
        } else {
            window.scrollTo(0, 0);
        }
    }, [location.pathname]);

    return <></>;
};

export default ScrollToTop;
