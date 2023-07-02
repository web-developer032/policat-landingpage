import Header from "@/components/Header/Header";
import Home from "@/pages/Home";
import { Route, Routes } from "react-router-dom";
import Charities from "./pages/Charities";
import PlayGame from "./pages/PlayGame";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

            <Routes>
                <Route path="/charities" element={<Charities />} />
            </Routes>

            <Routes>
                <Route path="/playgame" element={<PlayGame />} />
            </Routes>
        </>
    );
}

export default App;
