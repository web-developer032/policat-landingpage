import React from "react";
import { Link } from "react-router-dom";
import twitterIcon from "@/assets/icons/twitter.png";
import mediumIcon from "@/assets/icons/medium.png";
import telegramIcon from "@/assets/icons/telegram.png";
import logo from "@/assets/logos/logo.png";

function Footer(props) {
    return (
        <footer className="main-footer">
            <section className="footer-content">
                <div className="left">
                    <figure className="logo__container">
                        <img src={logo} alt="logo" />
                    </figure>

                    <p className="">Copyright &copy; 2023 PoliceCat BTC. All rights reserved.</p>
                </div>

                <div className="right">
                    <ul className="">
                        <li>
                            {props.visionLink ? (
                                <Link
                                    to={`../${props.visionLink}`}
                                    relative="path"
                                    preventScrollReset={true}
                                >
                                    Vision
                                </Link>
                            ) : (
                                <a href="#vision">Vision</a>
                            )}
                        </li>
                        <li>
                            {props.collectionLink ? (
                                <Link
                                    to={`../${props.collectionLink}`}
                                    relative="path"
                                    preventScrollReset={true}
                                >
                                    Collection
                                </Link>
                            ) : (
                                <a href="#collection">Collection</a>
                            )}
                        </li>
                        <li>
                            {props.roadmapLink ? (
                                <Link
                                    to={`../${props.roadmapLink}`}
                                    relative="path"
                                    preventScrollReset={true}
                                >
                                    Roadmap
                                </Link>
                            ) : (
                                <a href="#roadmap">Roadmap</a>
                            )}
                        </li>
                        <li>
                            <Link to="/charities">Charities</Link>
                        </li>
                        <li>
                            <a href="#">Mint</a>
                        </li>
                        <li>
                            <Link to="/playgame">Play Game</Link>
                        </li>
                    </ul>

                    <ul className="">
                        <li>
                            <a href="https://twitter.com/policecat_btc" target="_blank">
                                <img src={twitterIcon} alt="twitter" className="icon-s" />
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
                </div>
            </section>
        </footer>
    );
}

export default Footer;
