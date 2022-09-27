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

            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929.9953419827407!2d72.83464124982163!3d21.192899108136004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f001c8dbb7f%3A0x42522e08ee353d13!2sZ%20A%20ENGINEERING%20WORKS!5e0!3m2!1sen!2sin!4v1664290589254!5m2!1sen!2sin"
                    width="1000"
                    height="250"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                />
            </div>
        </div>
    );
};
export default LandingPage;
