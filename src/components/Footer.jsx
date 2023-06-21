import React from "react";
import twitterIcon from "@/assets/icons/twitter.svg";
import mediumIcon from "@/assets/icons/medium.svg";
import telegramIcon from "@/assets/icons/telegram.svg";

function Footer() {
    return (
        <footer className="main-footer">
            <section className="footer-content">
                <div className="left flex gap-16 items-center">
                    <p>Connect</p>

                    <ul className="flex items-center gap-8">
                        <li>
                            <a href="https://twitter.com/dexordi" target="_blank">
                                <img src={twitterIcon} alt="twitter" className="icon" />
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/dexordi" target="_blank">
                                <img src={telegramIcon} alt="telegram" className="icon" />
                            </a>
                        </li>
                        <li>
                            <a href="https://medium.com/@dexordi" target="_blank">
                                <img src={mediumIcon} alt="medium" className="icon" />
                            </a>
                        </li>
                    </ul>
                </div>

                <p className="text-grey-d1 right">
                    Copyright &copy; 2023 DexOrdi. All rights reserved.
                </p>
            </section>
        </footer>
    );
}

export default Footer;
