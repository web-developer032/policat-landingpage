import React from "react";
import Footer from "../components/Footer";
import StyledBorder from "@/components/StyledBorder";

import supercat from "@/assets/images/supercat.png";
import gameBgImage from "@/assets/images/game-bg.png";
import gameBg1Image from "@/assets/images/game-bg-1.png";
import carBgImage from "@/assets/images/car-bg.png";
import mainBgImage from "@/assets/images/main-bg.png";

import nftItem1 from "@/assets/images/nft-item-1.png";
import nftItem2 from "@/assets/images/nft-item-2.png";
import nftItem3 from "@/assets/images/nft-item-3.png";
import nftItem4 from "@/assets/images/nft-item-4.png";

import join1 from "@/assets/icons/join-1.svg";
import join2 from "@/assets/icons/join-2.svg";
import join3 from "@/assets/icons/join-3.svg";

import key1 from "@/assets/icons/key-1.svg";
import key2 from "@/assets/icons/key-2.svg";
import key3 from "@/assets/icons/key-3.svg";
import key5 from "@/assets/icons/key-5.svg";

function PlayGame() {
    return (
        <section className="playgame-container">
            <section
                className="playgame-content"
                style={{
                    backgroundImage: `url(${gameBgImage}),url(${gameBg1Image})`,
                }}
            >
                <h1>
                    <span className="gradient-text">Play Game</span>
                    <span>Coming Soon!</span>
                </h1>

                <section className="playgame-images">
                    <figure>
                        <img src={nftItem1} alt="nft item" />
                    </figure>
                    <figure>
                        <img src={nftItem2} alt="nft item" />
                    </figure>
                    <figure>
                        <img src={supercat} alt="nft item" />
                    </figure>
                    <figure>
                        <img src={nftItem3} alt="nft item" />
                    </figure>
                    <figure>
                        <img src={nftItem4} alt="nft item" />
                    </figure>
                </section>

                <h4 className="text-center">
                    Join the Policecat BTC Play-to-Earn Game and step into the world of virtual law
                    enforcement. Experience thrilling gameplay, earn real cryptocurrency rewards,
                    and rise through the ranks as a crimefighter.
                </h4>
            </section>

            <section
                className="highlights-container"
                style={{
                    backgroundImage: `url(${carBgImage}),url(${mainBgImage})`,
                }}
            >
                <h4 className="gradient-text mx-auto mb-4 w-max">Key Highlights</h4>
                <StyledBorder classes="mx-auto mb-32" />

                <section className="highlights-content">
                    <article>
                        <img src={key3} alt="" />
                        <h3 className="gradient-text">Earn real rewards</h3>
                        <p>
                            Your in-game achievements directly translate into valuable Policecat BTC
                            tokens.
                        </p>
                    </article>

                    <article>
                        <img src={join2} alt="" />
                        <h3 className="gradient-text">Engaging gameplay</h3>
                        <p>
                            Solve cases, combat criminals, and customize your character in an
                            immersive game world.
                        </p>
                    </article>

                    <article>
                        <img src={join3} alt="" />
                        <h3 className="gradient-text">Collect and upgrade</h3>
                        <p>
                            Discover unique items, weapons, and costumes to enhance your abilities.
                        </p>
                    </article>

                    <article>
                        <img src={key1} alt="" />
                        <h3 className="gradient-text">Competitive multiplayer</h3>
                        <p>Compete against others in PvP battles and strategic missions.</p>
                    </article>

                    <article>
                        <img src={key2} alt="" />
                        <h3 className="gradient-text">Blockchain-powered economy</h3>
                        <p>
                            Enjoy transparency, security, and fairness in a decentralized
                            environment.
                        </p>
                    </article>

                    <article>
                        <img src={key5} alt="" />
                        <h3 className="gradient-text">Community and social features</h3>
                        <p>Interact with fellow players, join guilds, and participate in events.</p>
                    </article>

                    <article>
                        <img src={join1} alt="" />
                        <h3 className="gradient-text">Play anywhere</h3>
                        <p>
                            Access the game on PC, laptop, or mobile devices for seamless gameplay.
                            Join us now to experience the fusion of gaming and blockchain
                            technology. Play, earn real rewards, and shape the future of law
                            enforcement gaming.
                        </p>
                    </article>
                </section>

                <Footer
                    roadmapLink={"#roadmap"}
                    collectionLink={"#collection"}
                    visionLink={"#vision"}
                />
            </section>
        </section>
    );
}

export default PlayGame;
