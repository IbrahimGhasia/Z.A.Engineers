import React, { Fragment } from "react";
import MainNavbar from "./components/Headers/MainNavbar";
import LandingPage from "./components/Home/LandingPage";

function App() {
    return (
        <div className="dark:bg-gray-800">
            <MainNavbar />
            <LandingPage />
        </div>
    );
}

export default App;
