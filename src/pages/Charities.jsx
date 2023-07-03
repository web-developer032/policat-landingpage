import React from "react";
import Footer from "../components/Footer";
import mainBgImage from "@/assets/images/main-bg.png";
import carBgImage from "@/assets/images/car-bg.png";

function Charities() {
    return (
        <section
            className="charities-container"
            style={{
                backgroundImage: `url(${carBgImage}),url(${mainBgImage})`,
            }}
        >
            <h2 className="text-center">
                PoliceCat BTC Charities Program
                <span className="gradient-text">Empowering Cats, Enriching Lives</span>
            </h2>

            <section className="charities-content">
                <p>
                    Our Charities Program at PoliceCat BTC is dedicated to creating a better future
                    for cats and promoting their well-being. We believe that every cat deserves
                    love, care, and a safe place to call home. Through strategic partnerships with
                    reputable organizations, we are actively involved in rescuing homeless cats and
                    providing them with shelter and care.
                </p>

                <p>
                    We are committed to making a significant impact through our program. For every
                    sale of a PoliceCat NFT, 10% of the proceeds will be donated directly to our
                    charity initiatives. But it doesn't stop there. We go above and beyond by
                    allocating an additional 20% from the sales across the entire PoliceCat BTC
                    ecosystem to support this important cause.
                </p>

                <p>
                    What makes our Charities Program unique is the power of community involvement.
                    As a holder of a PoliceCat BTC NFT, you have a voice in deciding which charity
                    organizations will benefit from the donations. Through decentralized governance
                    and voting rights, you actively participate in shaping the future of our
                    charitable endeavors.
                </p>

                <p>
                    Together, we can transform the lives of countless cats, providing them with the
                    love, care, and support they deserve. Join us in our mission to make a lasting
                    difference in the feline world. Let's create a brighter future for cats, one NFT
                    at a time.
                </p>
            </section>

            <h6>Invest in NFTs. Invest in Cats. Invest in Change. Invest in PoliceCat BTC.</h6>
            <Footer />
        </section>
    );
}

export default Charities;
