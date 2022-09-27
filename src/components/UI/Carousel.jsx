import { Fragment } from "react";
import { Carousel } from "flowbite-react";
const CarouselSlides = (props) => {
    return (
        <Fragment>
            <div className="h-56 sm:h-60 xl:h-80 2xl:h-96">
                <Carousel slide={true}>
                    <img src="/Mechanical Eng.jpg" alt="..." />
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929.9953419827407!2d72.83464124982163!3d21.192899108136004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f001c8dbb7f%3A0x42522e08ee353d13!2sZ%20A%20ENGINEERING%20WORKS!5e0!3m2!1sen!2sin!4v1664290589254!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="lazy"
                    />
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
