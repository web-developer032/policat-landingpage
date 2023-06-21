import React, { useState, useEffect } from "react";
import { useAuthState } from "@/context/AuthContext";
import { useResponsiveView } from "@/utils/customHooks";

import MobileMenuOpenIcon from "@/assets/icons/MobileMenuOpenIcon";
import MobileMenuCloseIcon from "@/assets/icons/MobileMenuCloseIcon";

function Header() {
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
    const isMobileView_800 = useResponsiveView();

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
            <section className="header-content ">
                <figure className="logo__container mb-0">{/* <img src="" alt="logo" /> */}</figure>

                <nav className={`nav-list ${toggleMobileMenu ? "active" : ""}`}>
                    <ul>
                        <li>
                            <a href="https://faucet.dexordi.com/" target="_blank">
                                Testnet Faucet
                            </a>
                        </li>
                        <li>
                            <a href={"#"} download>
                                Whitepaper
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://dexordi.com/static/media/User_Guide.9de4d7604cd13fdcc5ad.pdf"
                                download
                            >
                                User Guide
                            </a>
                        </li>
                        <li>
                            <a href="#tokenomics">Tokenomics</a>
                        </li>
                        <li>
                            <a href="#roadmap">Roadmap</a>
                        </li>
                    </ul>
                </nav>

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

export default Header;
