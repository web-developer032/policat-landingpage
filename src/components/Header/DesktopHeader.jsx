import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import twitterIcon from "@/assets/icons/twitter.png";
import mediumIcon from "@/assets/icons/medium.png";
import telegramIcon from "@/assets/icons/telegram.png";
import logo from "@/assets/logos/logo.png";

function DesktopHeader() {
    const location = useLocation();
    const [isHomePage, setIsHomePage] = useState(true);

    useEffect(() => {
        if (location.pathname === "/" || location.pathname === "") {
            setIsHomePage(true);
        } else {
            setIsHomePage(false);
        }
    }, [location.pathname]);

    return (
        <header className="main-header d-glass">
            <nav className="social-links">
                <ul>
                    <li>
                        <a href="https://twitter.com/policecat_btc" target="_blank">
                            <img src={twitterIcon} alt="twitter icon" className="icon-s" />
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/policecat_btc" target="_blank">
                            <img src={telegramIcon} alt="telegram" className="icon-s" />
                        </a>
                    </li>
                    <li>
                        <a href="https://medium.com/@policecatbtc" target="_blank">
                            <img src={mediumIcon} alt="medium" className="icon-s" />
                        </a>
                    </li>
                </ul>
            </nav>

            <section className="header-content">
                <nav className={`main-links`}>
                    <ul>
                        <li>
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
                            {isHomePage ? (
                                <a href="#roadmap">Roadmap</a>
                            ) : (
                                <Link to={`../#roadmap`} relative="path" preventScrollReset={true}>
                                    Roadmap
                                </Link>
                            )}
                        </li>
                    </ul>
                </nav>

                <figure className="logo__container">
                    <NavLink to={"/"}>
                        <img src={logo} alt="logo" />
                    </NavLink>
                </figure>

                <nav className={`main-links`}>
                    <ul>
                        <li>
                            <NavLink to="/charities">Charities</NavLink>
                        </li>
                        <li>
                            <a href="#mint">Mint</a>
                        </li>
                        <li>
                            <NavLink to="/playgame">Play Game</NavLink>
                        </li>
                    </ul>
                </nav>
            </section>

            <button className="d-btn-gradient gradient-text gradient-border gradient-border-2">
                Mint Now
            </button>
        </header>
    );
}

export default DesktopHeader;
