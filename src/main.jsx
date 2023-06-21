import React from "react";
import ReactDOM from "react-dom";
// import { AuthStateProvider } from "@/context/AuthContext";
import App from "@/App";
import "@/styles/main.scss";

ReactDOM.render(
    <React.StrictMode>
        {/* <AuthStateProvider> */}
        <App />
        {/* </AuthStateProvider> */}
    </React.StrictMode>,
    document.getElementById("root")
);
