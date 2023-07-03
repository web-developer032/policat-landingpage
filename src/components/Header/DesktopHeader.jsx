import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import twitterIcon from "@/assets/icons/twitter.png";
import mediumIcon from "@/assets/icons/medium.png";
import telegramIcon from "@/assets/icons/telegram.png";
import logo from "@/assets/logos/logo.png";

function DesktopHeader() {
    return (
        <header className="main-header d-glass">
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

            <section className="header-content">
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
                            <a href="#">Mint</a>
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
