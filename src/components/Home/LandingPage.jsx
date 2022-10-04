import CarouselSlides from "../UI/Carousel";
import Map from "./Map";
import MainFooter from "../Headers/MainFooter";
import Services_Works from "./Services_Works";

const LandingPage = () => {
    return (
        <div>
            <div className="grid v-screen place-items-center p-7 md:mt-10">
                <h1 className="text-4xl md:text-7xl tracking-wider text-black font-semibold dark:text-white">
                    Z.A ENGINEERING
                </h1>
                <div className="mt-3 text-lg dark:text-white text-center">
                    <p>
                        <span className="font-bold underline text-2xl">
                            Riyaz Ghasia
                        </span>
                    </p>
                    <span>📱9227903251</span>
                    <span> ✉️riyazghasia@gmail.com</span>
                </div>
                <hr class="mt-2 w-full h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
            </div>

            <div>
                <CarouselSlides />
            </div>

            <div className="mt-10">
                <Services_Works />
            </div>

            <div>
                <Map />
            </div>

            <MainFooter />
        </div>
    );
};
export default LandingPage;
