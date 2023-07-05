import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import MobileMenuOpenIcon from "@/assets/icons/MobileMenuOpenIcon";
import MobileMenuCloseIcon from "@/assets/icons/MobileMenuCloseIcon";

import twitterIcon from "@/assets/icons/twitter.png";
import mediumIcon from "@/assets/icons/medium.png";
import telegramIcon from "@/assets/icons/telegram.png";
import logo from "@/assets/logos/logo.png";

function MobileHeader() {
    const location = useLocation();
    const [isHomePage, setIsHomePage] = useState(true);

    useEffect(() => {
        if (location.pathname === "/" || location.pathname === "") {
            setIsHomePage(true);
        } else {
            setIsHomePage(false);
        }
    }, [location.pathname]);

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
        <header className="d-glass mobile-header">
            <figure className="logo__container">
                <Link to={"/"}>
                    <img src={logo} alt="logo" />
                </Link>
            </figure>

            <button className="d-btn-gradient gradient-text gradient-border gradient-border-2">
                Mint Now
            </button>

            {!toggleMobileMenu && (
                <button onClick={handleMenuOpen}>
                    <MobileMenuOpenIcon classes="icon-l mobile-menu-icon" viewBox="0 0 42 37" />
                </button>
            )}

            {toggleMobileMenu && (
                <button onClick={handleMenuClose}>
                    <MobileMenuCloseIcon classes="icon-l mobile-menu-icon" viewBox="0 0 36 37" />
                </button>
            )}

            <section className={`d-glass mobile-menu ${toggleMobileMenu ? "active" : ""}`}>
                <nav className={`main-links`}>
                    <ul>
                        <li>
                            {" "}
                            {isHomePage ? (
                                <a href="#vision">Vision</a>
                            ) : (
                                <Link to={`../#vision`} relative="path" preventScrollReset={true}>
                                    Vision
                                </Link>
                            )}
                        </li>
                        <li>
                            {isHomePage ? (
                                <a href="#collection">Collection</a>
                            ) : (
                                <Link
                                    to={`../#collection`}
                                    relative="path"
                                    preventScrollReset={true}
                                >
                                    Collection
                                </Link>
                            )}
                        </li>
                        <li>
                            {" "}
                            {isHomePage ? (
                                <a href="#roadmap">Roadmap</a>
                            ) : (
                                <Link to={`../#roadmap`} relative="path" preventScrollReset={true}>
                                    Roadmap
                                </Link>
                            )}
                        </li>

                        <li>
                            <Link to="/charities">Charities</Link>
                        </li>
                        <li>
                            <a href="#mint">Mint</a>
                        </li>
                        <li>
                            <Link to="/playgame">Play Game</Link>
                        </li>
                    </ul>
                </nav>

                <nav className="social-links">
                    <ul>
                        <li>
                            <a href="https://twitter.com/policecat_btc">
                                <img src={twitterIcon} alt="twitter icon" className="icon-s" />
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/policecat_btc">
                                <img src={telegramIcon} alt="telegram" className="icon-s" />
                            </a>
                        </li>
                        <li>
                            <a href="https://medium.com/@policecatbtc">
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
