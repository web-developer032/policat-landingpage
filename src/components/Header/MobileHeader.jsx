import React, { useState } from "react";

import MobileMenuOpenIcon from "@/assets/icons/MobileMenuOpenIcon";
import MobileMenuCloseIcon from "@/assets/icons/MobileMenuCloseIcon";

function MobileHeader() {
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

    const handleMenuOpen = () => {
        setToggleMobileMenu(true);
    };
    const handleMenuClose = () => {
        setToggleMobileMenu(false);
    };

    useEffect(() => {
        if (toggleMobileMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [toggleMobileMenu]);

    return (
        <header className="main-header">
            <section className="header-content">
                <figure className="logo__container mb-0">{/* <img src="" alt="logo" /> */}</figure>

                {!toggleMobileMenu && isMobileView_800 && (
                    <button onClick={handleMenuOpen} className="hide-desktop">
                        <MobileMenuOpenIcon classes="icon-l mobile-menu-icon" viewBox="0 0 42 37" />
                    </button>
                )}

                {toggleMobileMenu && isMobileView_800 && (
                    <button onClick={handleMenuClose} className="hide-desktop">
                        <MobileMenuCloseIcon
                            classes="icon-l mobile-menu-icon"
                            viewBox="0 0 36 37"
                        />
                    </button>
                )}
            </section>
        </header>
    );
}

export default MobileHeader;
