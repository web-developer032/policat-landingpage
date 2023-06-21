// import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
// import { useAuthState } from "@/context/AuthContext";
// import { setDarkModeVariables, setLightModeVariables } from "@/utils/utils";

function App() {
    // const { authState, updateTheme } = useAuthState();
    // useEffect(() => {
    //     if (authState.preferDark) {
    //         setDarkModeVariables();
    //     } else {
    //         setLightModeVariables();
    //     }
    // }, [authState.preferDark]);

    return (
        <>
            <Header />
            <Home />
            <Footer />
        </>
    );
}

export default App;
