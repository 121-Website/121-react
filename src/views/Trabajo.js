import React, { useEffect } from "react";
import Footer from "../components/Footer";
import UIProjectGridCell from "../components/UIProjectGridCell";
import useLocoScroll from "../hooks/useLocoScroll";
import { GetProjectsByCategoryAPI } from "../utils/getProyectsbyCategory";

export default function Trabajo() {

    useLocoScroll(true);
    const [groupA, setgroupA] = React.useState([]);
    const [groupB, setgroupB] = React.useState([]);
    const [groupC, setgroupC] = React.useState([]);

    useEffect(() => {
        GetProjectsByCategoryAPI(1).then(data => { setgroupA(data.data.attributes.projects.data); }).catch(error => { console.log(error); })
        GetProjectsByCategoryAPI(2).then(data => { setgroupB(data.data.attributes.projects.data); }).catch(error => { console.log(error); })
        GetProjectsByCategoryAPI(3).then(data => { setgroupC(data.data.attributes.projects.data); }).catch(error => { console.log(error); })
    }, []);

    return (
        <>
            <div className="flex flex-col overflow-x-hidden bg-white" id="main-container">

                <div data-scroll-section className="relative flex grow bg-celeste  md:min-h-[980px] min-h-[720px]">
                    <div className="flex flex-col-reverse gap-10 mx-5 my-10 grow lg:flex-row md:mx-20">
                        <div className="flex flex-col pb-10 justify-center justify-self-center gap-8 md:gap-5 tracking-tight lg:text-left md:text-center w-full sm:max-w-[540px] mx-auto md:max-w-[540px] lg:max-w-[665px] text-indigo">
                            <p className="font-bold  tracking-tighter text-center leading-none lg:text-left md:justify-center text-[64px] ">Trabajo</p>
                            <p className=" md:w-full font-thin leading-7 md:leading-9 text-[22px] md:text-[29px]  tracking-tighter text-center md:text-center lg:text-left md:justify-center">
                                Una idea sorprendente es el camino <br />
                                más corto entre una marca y un <br />
                                consumidor que tiene cada vez menos <br />
                                tiempo para pensar en ella.</p>
                        </div>
                        <div data-scroll data-scroll-speed="-4" className="w-full sm:max-w-[540px] mx-auto md:max-w-[540px] lg:max-w-[640px] justify-self-center  bg-center bg-no-repeat bg-contain aspect-video"
                            style={{ backgroundImage: 'url(/assets/images/trabajo121.svg)' }}>
                            {/* <AnimatedHeader2/> */}
                        </div>
                    </div>
                </div>

                <div data-scroll-section className="px-10 pt-12 pb-10 bg-white ">
                    <div className="grid gap-[20px] grid-cols-1 md:grid-cols-2">
                        {groupA.map((project, index) => (
                            <UIProjectGridCell key={index} id={project.id} project={project.attributes} />
                        ))}
                    </div>
                </div>


                <div data-scroll-section className="py-10 md:pb-52 bg-amarillo md:pt-16" >
                    <div className="flex flex-row justify-start mx-10 md:mx-32">
                        <div className="justify-end w-2/3 md:w-screen  pt-5 text-[14px] md:text-[30px] leading-tight font-semibold tracking-tight text-indigo ">
                            En cada campaña nos proponemos detener el scroll<br />
                            de los pulgares sobre las pantallas, en otras palabras,<br />
                            convertir cada POST en un STOP<br />
                        </div>
                        <div data-scroll data-scroll-speed="2" data-scroll-direction="horizontal" className="w-1/3 scroll-pt-72 md:w-1/2 md:-mt-32 lg:max-w-[265px]">
                            <img src="/assets/images/mira121.svg" alt="mira121"></img>
                        </div>
                    </div>
                </div>

                <div data-scroll-section className="px-10 pt-12 pb-10 -mt-5 md:-mt-40 ">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {groupB.map((project, index) => (
                            <UIProjectGridCell key={index} id={project.id} project={project.attributes} />
                        ))}
                    </div>
                </div>

                <div data-scroll-section className="py-10 md:mt-16 md:pb-52 bg-celeste" >
                    <div className="flex flex-row justify-start mx-10 md:mx-32">
                        <div className="justify-end align-middle w-screen md:mt-16 lg:text-[30px] md:text-[30px] leading-none font-semibold tracking-tighter text-indigo ">
                            Nuestra creatividad encuentra  <br />
                            en la información y la tecnología <br />
                            los socios ideales para soprender <br />
                            y generar reaccciones.<br /> 
                        </div>
                        <div data-scroll data-scroll-speed="2" data-scroll-direction="horizontal" className="w-1/3 md:w-1/2 -pt-72 md:px-auto lg:max-w-[265px]">
                            <img src="/assets/images/michi121.svg" alt="michi121"></img>
                        </div>
                    </div>
                </div>

                <div data-scroll-section className="px-10 mt-10 md:-mt-40">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {groupC.map((project, index) => (
                            <UIProjectGridCell key={index} id={project.id} project={project.attributes} />
                        ))}
                    </div>
                </div>

                <div data-scroll-section>
                    <Footer />
                </div>
            </div>
        </>
    );
}