import { Fragment } from "react";

const Map = (props) => {
    return (
        <Fragment>
            <h1 className="text-3xl md:text-6xl text-center md:mt-20">
                <span className="bg-sky-500 dark:bg-yellow-400 px-5 rounded-2xl">
                    Location
                </span>
            </h1>
            <div className="m-5 md:m-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929.9953419827407!2d72.83464124982163!3d21.192899108136004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f001c8dbb7f%3A0x42522e08ee353d13!2sZ%20A%20ENGINEERING%20WORKS!5e0!3m2!1sen!2sin!4v1664290589254!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: "0", borderRadius: "1em" }}
                    allowfullscreen=""
                    loading="lazy"
                />
            </div>
        </Fragment>
    );
};
export default Map;
