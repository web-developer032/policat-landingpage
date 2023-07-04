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

import nftItem1 from "@/assets/images/nft-item-1.png";
import nftItem2 from "@/assets/images/nft-item-2.png";
import nftItem3 from "@/assets/images/nft-item-3.png";
import nftItem4 from "@/assets/images/nft-item-4.png";

import roadmapLine from "@/assets/images/roadmap-line.png";

import join1 from "@/assets/icons/join-1.svg";
import join2 from "@/assets/icons/join-2.svg";
import join3 from "@/assets/icons/join-3.svg";

import key1 from "@/assets/icons/key-1.svg";
import key2 from "@/assets/icons/key-2.svg";
import key3 from "@/assets/icons/key-3.svg";
import key4 from "@/assets/icons/key-4.svg";
import key5 from "@/assets/icons/key-5.svg";

import Slider from "react-slick";

function Home() {
    const isMobileView_500 = useResponsiveView(500);

    const settings = {
        className: "center",
        dots: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        speed: 500,
        arrows: false,
        variableWidth: true,
        adaptiveHeight: true,
        gap: 30,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    useEffect(() => {
        if (isMobileView_500) {
            settings.centerMode = true;
        }
    }, [isMobileView_500]);

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

                <section
                    className="join-container"
                    style={{
                        backgroundImage: `url(${mainBgImage})`,
                    }}
                >
                    <h5 className="join-heading text-center mb-6">
                        Welcome to PoliceCat BTC, where art, innovation, <br /> and blockchain unite
                        to redefine the future of digital ownership.
                    </h5>

                    <p className="join-para">
                        Explore our captivating collection and join the movement that safeguards{" "}
                        <br /> the integrity of Bitcoin.
                    </p>

                    <button className="d-btn filled join-action">Join Now</button>

                    <p className="join-para">
                        Inspired by a single question posed by Lil X, the son of visionary Elon Musk
                    </p>
                </section>
            </section>

            <section
                className="vision-container"
                style={{
                    backgroundImage: `url(${carBgImage}),url(${mainBgImage})`,
                }}
                id="vision"
            >
                <section className="vision-content gradient-border gradient-border-1 ">
                    <h4 className="gradient-text mx-auto mb-4">Vision</h4>
                    <StyledBorder classes="mb-16 mx-auto" />

                    <section className="vision-articles-container  text-white">
                        <article className="vision-article">
                            <h3 className="gradient-text">Revolution</h3>
                            <p>
                                PoliceCat BTC redefines crypto, empowers our community, and creates
                                a transparent, rewarding future. Inspired by Lil X's question, we
                                safeguard Bitcoin's integrity and revolutionize the crypto space.
                            </p>
                        </article>
                        <article className="vision-article">
                            <h3 className="gradient-text">Play-to-Earn Game</h3>
                            <p>
                                Our 100 PoliceCat BTC NFTs offer more than stunning visuals.
                                Experience our immersive play-to-earn game, unlocking exciting
                                rewards and rare items. Your ownership becomes meaningful and
                                rewarding.
                            </p>
                        </article>
                        <article className="vision-article">
                            <h3 className="gradient-text">Decentralized Governance & Voting</h3>

                            <p>
                                Your voice matters. As a PoliceCat BTC NFT holder, shape the
                                community's future through voting on game updates, features, and
                                charity initiatives. We value your input.
                            </p>
                        </article>
                        <article className="vision-article">
                            <h3 className="gradient-text">Join the Movement</h3>

                            <p>
                                Embrace the power. Join PoliceCat BTC for a transparent, rewarding,
                                and community-driven future. Together, we unleash the revolutionary
                                potential of PoliceCat BTC.
                            </p>
                        </article>
                    </section>
                </section>
            </section>

            <section
                className="collection"
                style={{
                    backgroundImage: `url(${carBgImage}),url(${mainBgImage})`,
                }}
                id="collection"
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

                <section className="nft-collection">
                    <Slider {...settings}>
                        <article className="nft-item">
                            <figure>
                                <img src={nftItem1} alt="nft item" />
                            </figure>

                            <div className="number">99</div>
                        </article>
                        <article className="nft-item">
                            <figure>
                                <img src={nftItem2} alt="nft item" />
                            </figure>

                            <div className="number">02</div>
                        </article>{" "}
                        <article className="nft-item">
                            <figure>
                                <img src={nftItem3} alt="nft item" />
                            </figure>

                            <div className="number">83</div>
                        </article>
                        <article className="nft-item">
                            <figure>
                                <img src={nftItem4} alt="nft item" />
                            </figure>

                            <div className="number">04</div>
                        </article>
                        <article className="nft-item">
                            <figure>
                                <img src={nftItem1} alt="nft item" />
                            </figure>

                            <div className="number">99</div>
                        </article>
                        <article className="nft-item">
                            <figure>
                                <img src={nftItem2} alt="nft item" />
                            </figure>

                            <div className="number">02</div>
                        </article>{" "}
                        <article className="nft-item">
                            <figure>
                                <img src={nftItem3} alt="nft item" />
                            </figure>

                            <div className="number">83</div>
                        </article>
                        <article className="nft-item">
                            <figure>
                                <img src={nftItem4} alt="nft item" />
                            </figure>

                            <div className="number">04</div>
                        </article>
                    </Slider>
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
                        Welcome to PoliceCat BTC, a unique fusion of art, technology, and feline
                        revolution in the crypto space. We are a passionate community of crypto
                        enthusiasts, artists, and cat lovers driven by a vision to uphold the
                        integrity of Bitcoin and redefine digital ownership.
                    </p>
                    <p>
                        Drawing inspiration from a question posed by Lil X, the visionary son of
                        Elon Musk, we embarked on a mission to harness the power of cats and the
                        innovation of blockchain technology. Our journey led us to create the
                        PoliceCat BTC Play-to-Earn Game, a groundbreaking platform that combines
                        immersive gameplay, decentralized governance, and voting mechanisms.
                    </p>
                    <p>
                        In addition to our captivating Play-to-Earn Game, our collection of
                        PoliceCat BTC NFTs embodies the strength and intelligence of felines. These
                        meticulously crafted artworks showcase the talents of our diverse community
                        of creators and serve as symbols of our commitment to protecting the crypto
                        space from fraudulent projects and bad actors.
                    </p>
                    <p>
                        Through decentralized governance and voting mechanisms, our community plays
                        an active role in shaping the future of PoliceCat BTC. We believe in
                        fostering a secure and transparent environment where every participant has a
                        voice and can contribute to the decision-making process.
                    </p>
                    <p>
                        Join us on this extraordinary journey as we create a secure and transparent
                        future for all crypto enthusiasts. Explore our captivating collection, own a
                        piece of this digital revolution, and become an integral part of the vibrant
                        PoliceCat BTC community. Let the power of cats lead the way toward a new era
                        of decentralized innovation.
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
                                Fusion of cat agility, cleverness, and resilience with blockchain
                                technology
                            </p>
                        </article>

                        <article className="d-card active">
                            <figure>
                                <img src={key3} alt="" />
                            </figure>

                            <p>
                                Upholding the integrity of Bitcoin and redefining digital ownership
                            </p>
                        </article>

                        <article className="d-card active">
                            <figure>
                                <img src={key4} alt="" />
                            </figure>

                            <p>Captivating PoliceCat BTC NFTs embodying feline power</p>
                        </article>

                        <article className="d-card active">
                            <figure>
                                <img src={key2} alt="" />
                            </figure>

                            <p>
                                Decentralized governance and voting mechanisms for community
                                participation
                            </p>
                        </article>

                        <article className="d-card active">
                            <figure>
                                <img src={key5} alt="" />
                            </figure>

                            <p>
                                Join us in shaping a secure and transparent future for all crypto
                                enthusiasts
                            </p>
                        </article>
                    </section>
                </section>

                <section className="roadmap-container" id="roadmap">
                    <header>
                        <h4 className="gradient-text mx-auto mb-4 w-max">Roadmap</h4>
                        <StyledBorder classes="mx-auto" />
                    </header>

                    <section className="roadmap-content">
                        <img src={roadmapLine} alt="roadmap Line" />

                        <article className="d-card active">
                            <h2
                                style={{
                                    backgroundImage: `url(${mainBgImage})`,
                                }}
                            >
                                <span className="gradient-text">Phase 1:</span>
                            </h2>
                            <h5>Foundation and Community Building (Q3 2023 - Q4 2023)</h5>
                            <ul>
                                <li>Launch PoliceCat BTC project</li>
                                <li>Establish social media channels and forums</li>
                                <li>Conduct giveaways and events for early supporters</li>
                                <li>Collaborate with influencers and crypto enthusiasts</li>
                                <li>Launch website and release 100 unique NFT images</li>
                                <li>Enable NFT minting</li>
                                <li>
                                    Partner with reputable cat shelters and rescue organizations
                                </li>
                                <li>Donate to rescue and rehabilitate homeless cats</li>
                            </ul>
                        </article>

                        <article className="d-card active">
                            <h2
                                style={{
                                    backgroundImage: `url(${mainBgImage})`,
                                }}
                            >
                                <span className="gradient-text">Phase 2:</span>
                            </h2>
                            <h5>Play-to-Earn Game Development (Q4 2023 - Q2 2024)</h5>
                            <ul>
                                <li>Develop immersive play-to-earn game</li>
                                <li>Create captivating game world for PoliceCat NFT holders</li>
                                <li>
                                    Design gameplay mechanics for earning rewards and rare items
                                </li>
                                <li>Conduct closed beta testing for feedback and refinement</li>
                            </ul>
                        </article>

                        <article className="d-card active">
                            <h2
                                style={{
                                    backgroundImage: `url(${mainBgImage})`,
                                }}
                            >
                                <span className="gradient-text">Phase 3:</span>
                            </h2>
                            <h5>Game Launch and Expansion (Q3 2024 - Q4 2024) </h5>
                            <ul>
                                <li>Launch PoliceCat BTC play-to-earn game</li>

                                <li>Continuously update and improve based on player feedback</li>
                                <li>Introduce new features, challenges, and events</li>
                                <li>Collaborate with other NFT projects and platforms</li>
                            </ul>
                        </article>

                        <article className="d-card active">
                            <h2
                                style={{
                                    backgroundImage: `url(${mainBgImage})`,
                                }}
                            >
                                <span className="gradient-text">Phase 5:</span>
                            </h2>
                            <h5>Expansion and Partnerships (Q3 2025 onwards)</h5>
                            <ul>
                                <li>
                                    Expand project through partnerships with prominent NFT projects
                                    and platforms
                                </li>
                                <li>
                                    Collaborate with charitable organizations for impactful
                                    initiatives
                                </li>
                                <li>
                                    Continuously innovate and deliver value to the PoliceCat BTC
                                    community
                                </li>
                            </ul>
                        </article>

                        <article className="d-card active">
                            <h2
                                style={{
                                    backgroundImage: `url(${mainBgImage})`,
                                }}
                            >
                                <span className="gradient-text">Phase 4:</span>
                            </h2>
                            <h5>Governance and Voting Integration (Q1 2025 - Q2 2025)</h5>
                            <ul>
                                <li>Implement decentralized governance and voting mechanisms</li>
                                <li>
                                    Enable PoliceCat BTC holders to participate in decision-making
                                </li>
                                <li>
                                    Conduct community votes for further development of roadmap and
                                    initiatives
                                </li>
                            </ul>
                        </article>
                    </section>
                </section>
            </section>

            <Footer />
        </section>
    );
}

export default Home;
