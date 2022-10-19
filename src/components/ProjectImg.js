import React from "react";

export default function Team({ cover, label }) {

    return (
        <div className="container flex flex-col gap-8 overflow-x-hidden mt-28 md:gap-2">
            <div data-aos="fade-right" data-aos-offset="200" className="relative flex flex-row self-start w-full md:w-7/12 ">
                <div className="w-full bg-center bg-cover h-96 md:w-5/6" style={{ backgroundImage: `url(${cover})` }} ></div>
                <div className="absolute bottom-0 w-2/3 px-10 py-5 pb-12 -ml-40 bg-black md:mx-4 -right-0 ">
                    <div className="text-2xl font-semibold text-white">{label}</div>
                </div>
            </div>


        </div>
    );
}