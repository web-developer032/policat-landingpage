import React, { useState, useEffect } from "react";

import { useResponsiveView } from "@/utils/customHooks";

function Home() {
    const isMobileView_500 = useResponsiveView(500);

    return (
        <section className="home-container">
            <h1>
                Welcome to PoliceCat BTC, where art, innovation, and blockchain unite to redefine
                the future of digital ownership.
            </h1>
            <section className="landing">
                <article className="left"></article>
            </section>
        </section>
    );
}

export default Home;
