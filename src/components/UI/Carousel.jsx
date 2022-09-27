import { Fragment } from "react";
import { Carousel } from "flowbite-react";
const CarouselSlides = (props) => {
    return (
        <Fragment>
            <div className="h-56 sm:h-60 xl:h-80 2xl:h-96">
                <Carousel slide={false}>
                    <img src="/Mechanical Eng.jpg" alt="..." />
                    <img src="/pic2.jpg" alt="..." />
                    <img src="/pic3.jpg" alt="..." />
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                        alt="..."
                    />
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                        alt="..."
                    />
                </Carousel>
            </div>
        </Fragment>
    );
};
export default CarouselSlides;
