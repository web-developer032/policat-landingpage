import React from "react";
import ReactDOM from "react-dom";
// import { AuthStateProvider } from "@/context/AuthContext";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "@/styles/main.scss";

ReactDOM.render(
    <React.StrictMode>
        {/* <AuthStateProvider> */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
        {/* </AuthStateProvider> */}
    </React.StrictMode>,
    document.getElementById("root")
);
