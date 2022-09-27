import { Fragment } from "react";

const WhatWeDo = (props) => {
    return (
        <Fragment>
            <h1 className="text-3xl md:text-6xl text-center md:mt-20">
                <span className="bg-yellow-400 px-5 rounded-2xl">
                    Services & Works
                </span>
            </h1>
            <div className="grid md:grid-cols-2 md:mt-10 mb-5">
                <div className="px-10 py-5 md:py-20">
                    <p className="text-2xl md:text-4xl text-center dark:text-white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Corrupti dolor architecto quia atque maxime
                        consequuntur et, laboriosam quam explicabo voluptate
                        fugit nisi fugiat neque, laborum dolores! Earum
                        temporibus alias magnam.
                    </p>
                </div>
                <div className="">
                    <img
                        src="/Mechanical Eng.jpg"
                        className="max-w-full h-auto rounded-lg"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 md:mt-10">
                <div className="">
                    <img
                        src="/Mechanical Eng.jpg"
                        className="max-w-full h-auto rounded-lg"
                    />
                </div>
                <div className="px-10 py-5 md:py-20">
                    <p className="text-2xl md:text-4xl text-center dark:text-white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Corrupti dolor architecto quia atque maxime
                        consequuntur et, laboriosam quam explicabo voluptate
                        fugit nisi fugiat neque, laborum dolores! Earum
                        temporibus alias magnam.
                    </p>
                </div>
            </div>
        </Fragment>
    );
};
export default WhatWeDo;
