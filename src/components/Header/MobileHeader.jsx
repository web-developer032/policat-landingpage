import React, { useState, useEffect } from "react";
import { useResponsiveView } from "@/utils/customHooks";

import MobileMenuOpenIcon from "@/assets/icons/MobileMenuOpenIcon";
import MobileMenuCloseIcon from "@/assets/icons/MobileMenuCloseIcon";

import twitterIcon from "@/assets/icons/twitter.png";
import mediumIcon from "@/assets/icons/medium.png";
import telegramIcon from "@/assets/icons/telegram.png";
import logo from "@/assets/logos/logo.png";

function MobileHeader() {
    const isMobileView_800 = useResponsiveView();
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
        <header className=" mobile-header">
            <figure className="logo__container">
                <img src={logo} alt="logo" />
            </figure>

            <button className="d-btn-gradient gradient-text gradient-border gradient-border-2">
                Mint Now
            </button>

            {!toggleMobileMenu && isMobileView_800 && (
                <button onClick={handleMenuOpen}>
                    <MobileMenuOpenIcon classes="icon-l mobile-menu-icon" viewBox="0 0 42 37" />
                </button>
            )}

            {toggleMobileMenu && isMobileView_800 && (
                <button onClick={handleMenuClose}>
                    <MobileMenuCloseIcon classes="icon-l mobile-menu-icon" viewBox="0 0 36 37" />
                </button>
            )}

            <section className={`mobile-menu ${toggleMobileMenu ? "active" : ""}`}>
                <nav className={`main-links`}>
                    <ul>
                        <li>
                            <a href="#">Vision</a>
                        </li>
                        <li>
                            <a href="#">Collection</a>
                        </li>
                        <li>
                            <a href="#">Roadmap</a>
                        </li>

                        <li>
                            <a href="#">Team</a>
                        </li>
                        <li>
                            <a href="#">Mint</a>
                        </li>
                        <li>
                            <a href="#">Wallet Checker</a>
                        </li>
                    </ul>
                </nav>

                <nav className="social-links">
                    <ul>
                        <li>
                            <a href="#">
                                <img src={twitterIcon} alt="twitter icon" className="icon-s" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={telegramIcon} alt="telegram" className="icon-s" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={mediumIcon} alt="medium" className="icon-s" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
        </header>
    );
}

export default MobileHeader;