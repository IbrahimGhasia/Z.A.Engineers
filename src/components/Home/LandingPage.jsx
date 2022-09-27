import { Fragment } from "react";
import CarouselSlides from "../UI/Carousel";
import WhatWeDo from "./WhatWeDo";

const LandingPage = () => {
    return (
        <div>
            <div className="grid v-screen place-items-center p-7 mt-10">
                <h1 className="text-2xl md:text-6xl tracking-wider text-black font-semibold dark:text-white">
                    Z.A. Engineering Works
                </h1>
            </div>

            <div>
                <CarouselSlides />
            </div>

            <div className="mt-10">
                <WhatWeDo />
            </div>
        </div>
    );
};
export default LandingPage;
