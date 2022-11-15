import React from "react";

export default function WhatsApp() {

    return (
        <div className="fixed right-0 z-50 flex items-center justify-center w-16 h-16 text-white transition-all duration-700 delay-75 transform hover:scale-125 hover:-translate-x-2 hover:animate-pulse bg-verde bottom-10" >
            <a href="https://wa.me/51991803256" target="_blank" rel="noreferrer" className="flex w-10 h-10 bg-center bg-no-repeat bg-contain " style={{ backgroundImage: 'url(/assets/wa.svg)' }}>
            </a>
        </div >
    )
}