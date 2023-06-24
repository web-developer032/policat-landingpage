import React, { useState, useEffect } from "react";
import { useResponsiveView } from "@/utils/customHooks";

import heroImage from "@/assets/images/hero-bg.png";
import mainBgImage from "@/assets/images/main-bg.png";
import heroCat1 from "@/assets/images/hero-1.png";
import heroCat2 from "@/assets/images/hero-2.png";
import heroCat3 from "@/assets/images/hero-3.png";
import heroCat4 from "@/assets/images/hero-4.png";
import heroCat5 from "@/assets/images/hero-5.png";

function Home() {
    const isMobileView_500 = useResponsiveView(500);

    return (
        <section className="home-container">
            <section
                className="hero-container"
                style={{
                    backgroundImage: `url(${heroImage})`,
                }}
            >
                <h1>
                    <span>Unleash the Power of </span>
                    <span className="gradient-text"> Feline Revolution in</span>
                    <span>the Crypto Space!</span>
                </h1>

                <section className="hero-images">
                    <figure className="left left-2">
                        <img src={heroCat5} alt="hero cat 5" />
                    </figure>
                    <figure className="left left-1">
                        <img src={heroCat4} alt="hero cat 4" />
                    </figure>
                    <figure className="middle">
                        <img src={heroCat1} alt="hero cat 1" />
                    </figure>
                    <figure className="right right-1">
                        <img src={heroCat2} alt="hero cat 2" />
                    </figure>
                    <figure className="right right-2">
                        <img src={heroCat3} alt="hero cat 3" />
                    </figure>
                </section>
            </section>

            <section
                className="vision-container"
                style={{
                    backgroundImage: `url(${mainBgImage})`,
                }}
            >
                <h5
                    className="vision-heading text-center"
                    style={{
                        backgroundImage: `url(${mainBgImage})`,
                    }}
                >
                    Welcome to PoliceCat BTC, where art, innovation, <br /> and blockchain unite to
                    redefine the <br /> future of digital ownership.
                </h5>

                <p className="vision-para">
                    Explore our captivating collection and join the movement that safeguards <br />{" "}
                    the integrity of Bitcoin.
                </p>

                <button className="d-btn filled vision-action">Join Now</button>

                <section className="vision-content gradient-border gradient-border-1 ">
                    <h4 className="gradient-text mx-auto">Vision</h4>
                </section>
            </section>
        </section>
    );
}

export default Home;
