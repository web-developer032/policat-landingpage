import React, { useState, useEffect } from "react";
import { useResponsiveView } from "@/utils/customHooks";
import StyledBorder from "@/components/StyledBorder";
import Footer from "@/components/Footer";

import heroImage from "@/assets/images/hero-bg.png";
import mainBgImage from "@/assets/images/main-bg.png";
import carBgImage from "@/assets/images/car-bg.png";
import heroCat1 from "@/assets/images/hero-1.png";
import heroCat2 from "@/assets/images/hero-2.png";
import heroCat3 from "@/assets/images/hero-3.png";
import heroCat4 from "@/assets/images/hero-4.png";
import heroCat5 from "@/assets/images/hero-5.png";

import join1 from "@/assets/icons/join-1.svg";
import join2 from "@/assets/icons/join-2.svg";
import join3 from "@/assets/icons/join-3.svg";

import key1 from "@/assets/icons/key-1.svg";
import key2 from "@/assets/icons/key-2.svg";
import key3 from "@/assets/icons/key-3.svg";
import key4 from "@/assets/icons/key-4.svg";
import key5 from "@/assets/icons/key-5.svg";

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
                    backgroundImage: `url(${carBgImage}),url(${mainBgImage})`,
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
                    <h4 className="gradient-text mx-auto mb-4">Vision</h4>
                    <StyledBorder classes="mb-16 mx-auto" />

                    <article className="vision-articles-container  text-white">
                        <p className="vision-article">
                            Our Vision: To create a secure and transparent crypto ecosystem through
                            the power of feline revolution.
                        </p>
                        <p className="vision-article">
                            We believe in leveraging the agility, cleverness, and resilience of cats
                            to protect the integrity of Bitcoin and reshape the crypto landscape.
                        </p>
                        <p className="vision-article">
                            Join us as we pioneer a new era of digital ownership and ensure a secure
                            future for all crypto enthusiasts.
                        </p>
                    </article>
                </section>
            </section>

            <section
                className="collection"
                style={{
                    backgroundImage: `url(${mainBgImage})`,
                }}
            >
                <header>
                    <h4 className="gradient-text mx-auto mb-4 w-max">PoliceCat BTC Collection</h4>
                    <StyledBorder classes="mx-auto" />
                </header>

                <section className="collection-content">
                    <article>
                        <h5>Discover the Collection</h5>
                        <p>
                            Immerse yourself in a world of captivating NFT art that embodies the
                            spirit of feline power.
                        </p>
                        <p>
                            Each artwork in our collection represents the strength, agility, and
                            intellect of our feline guardians, symbolizing their role in
                            safeguarding the crypto realm.
                        </p>
                    </article>

                    <article>
                        <h5>Own a piece of history</h5>
                        <p>
                            PoliceCat BTC NFTs are not just collectibles; they are a statement of
                            your commitment to protect and innovate within the crypto space.
                        </p>
                        <p>
                            Explore our diverse range of NFTs and experience the unique charm that
                            only PoliceCat BTC can offer.
                        </p>
                    </article>
                </section>

                <section className="revolution-container mb-32">
                    <h4 className="gradient-text mx-auto mb-4 w-max">Join the Revolution</h4>
                    <StyledBorder classes="mx-auto mb-32" />

                    <section className="revolution-content">
                        <article className="d-card ">
                            <figure>
                                <img src={join1} alt="" />
                            </figure>
                            <h5>
                                Be part of something <br /> extraordinary
                            </h5>
                            <p>
                                Join the revolution that unites crypto enthusiasts, art lovers, and
                                feline enthusiasts in the fight for a secure and transparent crypto
                                future.
                            </p>
                        </article>

                        <article className="d-card active">
                            <figure>
                                <img src={join2} alt="" />
                            </figure>
                            <h5>
                                Connect with <br /> our community
                            </h5>
                            <p>
                                 Engage with like-minded individuals, share insights, and stay
                                updated on the latest developments through our vibrant Discord
                                community.
                            </p>
                        </article>

                        <article className="d-card">
                            <figure>
                                <img src={join3} alt="" />
                            </figure>
                            <h5>
                                Embrace the <br /> power of cats
                            </h5>
                            <p>
                                As a member of the PoliceCat BTC community, you become a guardian of
                                the crypto realm, supporting innovation and protecting the integrity
                                of Bitcoin.
                            </p>
                        </article>
                    </section>
                </section>

                <section className="aboutus-container">
                    <h4 className="gradient-text mx-auto mb-4 w-max">About Us</h4>
                    <StyledBorder classes="mx-auto mb-32" />

                    <p>
                        Welcome to PoliceCat BTC, where art, technology, and feline revolution
                        converge to create a unique and powerful presence in the crypto space. As a
                        passionate community of crypto enthusiasts, artists, and cat lovers, we are
                        committed to safeguarding the integrity of Bitcoin and revolutionizing the
                        way we perceive digital ownership.
                    </p>
                    <p>
                        At PoliceCat BTC, we believe that cats possess an innate combination of
                        agility, cleverness, and resilience that aligns perfectly with the
                        challenges faced in the crypto realm. Inspired by a single question posed by
                        Lil X, the son of visionary Elon Musk, we embarked on a mission to bring
                        together the power of cats and the innovation of blockchain technology.
                    </p>
                    <p>
                        Our collection of PoliceCat BTC NFTs captures the essence of feline strength
                        and intellect, symbolizing our commitment to protecting the crypto space
                        from bad actors and fraudulent projects. Each artwork is meticulously
                        crafted, showcasing the artistic talent of our diverse community of
                        creators.
                    </p>
                    <p>
                        We invite you to explore our captivating collection, own a piece of this
                        digital revolution, and become part of the vibrant PoliceCat BTC community.
                        Together, we can create a secure and transparent future for all crypto
                        enthusiasts. Join us in this extraordinary journey and let the power of cats
                        lead the way.
                    </p>
                </section>

                <section className="highlights-container">
                    <h4 className="gradient-text mx-auto mb-4 w-max">Key Highlights</h4>
                    <StyledBorder classes="mx-auto mb-32" />

                    <section className="highlights-content">
                        <article className="d-card active">
                            <figure>
                                <img src={key1} alt="" />
                            </figure>

                            <p>
                                Passionate community of crypto enthusiasts, artists, and cat lovers
                            </p>
                        </article>

                        <article className="d-card active">
                            <figure>
                                <img src={key2} alt="" />
                            </figure>

                            <p>
                                Combining the agility, cleverness, and resilience of cats with
                                blockchain technology
                            </p>
                        </article>

                        <article className="d-card active">
                            <figure>
                                <img src={key3} alt="" />
                            </figure>

                            <p>
                                Dedicated to safeguarding the integrity of Bitcoin and
                                revolutionizing digital ownership
                            </p>
                        </article>

                        <article className="d-card active">
                            <figure>
                                <img src={key4} alt="" />
                            </figure>

                            <p>
                                Meticulously crafted PoliceCat BTC NFTs capturing the essence of
                                feline power
                            </p>
                        </article>

                        <article className="d-card active">
                            <figure>
                                <img src={key5} alt="" />
                            </figure>

                            <p>
                                Join us in creating a secure and transparent future for all crypto
                                enthusiasts
                            </p>
                        </article>
                    </section>
                </section>
            </section>

            <Footer />
        </section>
    );
}

export default Home;
