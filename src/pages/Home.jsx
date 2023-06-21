import React, { useState, useEffect } from "react";

import { useResponsiveView } from "@/utils/customHooks";

function Home() {
    const isMobileView_500 = useResponsiveView(500);

    return (
        <section className="home-container">
            <section className="landing">
                <article className="left"></article>
            </section>
        </section>
    );
}

export default Home;
