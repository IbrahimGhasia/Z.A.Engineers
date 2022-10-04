import { Fragment } from "react";

const Services_Works = (props) => {
    return (
        <Fragment>
            <h1 className="text-3xl md:text-6xl text-center md:mt-20">
                <span className="bg-sky-500 dark:bg-yellow-400 px-5 rounded-2xl font-bold italic">
                    Services & Works
                </span>
            </h1>
            <div className="grid md:grid-cols-2 md:mt-10 mb-5">
                <div className="px-10 py-5 md:py-20">
                    <h3 className="text-3xl text-gray-600 dark:text-lime-400 md:text-5xl text-center font-semibold mb-2">
                        Lathe Machine
                    </h3>
                    <p className="text-2xl md:text-4xl text-justify dark:text-white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Corrupti dolor architecto quia atque maxime
                        consequuntur et, laboriosam quam explicabo voluptate
                        fugit nisi fugiat neque, laborum dolores! Earum
                        temporibus alias magnam.
                    </p>
                </div>
                <div className="md:mr-20 ">
                    <img
                        src="/machine1.jpg"
                        className="rounded-lg float-right mt-7 md:h-96 md:w-96 rounded-lg"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 md:mt-10">
                <div className="px-10 py-5 md:py-20">
                    <p className="text-2xl md:text-4xl text-center dark:text-white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Corrupti dolor architecto quia atque maxime
                        consequuntur et, laboriosam quam explicabo voluptate
                        fugit nisi fugiat neque, laborum dolores! Earum
                        temporibus alias magnam.
                    </p>
                </div>
                <div className="md:mr-20">
                    <img
                        src="/machine2.jpg"
                        // className="max-w-full h-auto rounded-lg"
                        className="rounded-lg float-right mt-7 md:h-96 md:w-96 rounded-lg"
                    />
                </div>
            </div>
        </Fragment>
    );
};
export default Services_Works;
