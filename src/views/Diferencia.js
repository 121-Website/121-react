import React from 'react';
import Footer from '../components/Footer';
import UIServiceGridCell from '../components/UIServiceGridCell';
import { servicios } from '../utils/data';

export default function Diferencia() {
    return (
        <>
            <div
                className="flex flex-col overflow-x-hidden bg-white"
                id="main-container">
                <div
                    data-scroll-section
                    className="relative flex  grow bg-indigo md:min-h-[980px] min-h-[720px]">
                    <div className="flex flex-col-reverse gap-10 mx-5 my-10 grow lg:flex-row md:mx-20">
                        <div className="flex flex-col pb-10 justify-center justify-self-center gap-8 md:gap-5 tracking-tight text-white lg:text-left md:text-center w-full sm:max-w-[540px] mx-auto md:max-w-[540px] lg:max-w-[665px]">
                            <p className="font-bold  tracking-tighter leading-none text-center lg:text-left md:justify-center text-[54px] md:text-[64px] ">
                                Desarrollamos
                            </p>
                            <p className="md:w-full font-thin leading-7 md:leading-9 text-[22px] md:text-[29px] tracking-tighter text-center md:text-center lg:text-left md:justify-center ">
                                herramientas tecnológicas y nos
                                <br />
                                especializamos en la ciencia del <br />
                                comportamiento para mejorar los
                                <br />
                                indicadores de tus campañas.
                            </p>
                        </div>
                        <div
                            data-scroll-speed="-1"
                            data-scroll-direction="horizontal"
                            className="w-full sm:max-w-[540px] mx-auto md:max-w-[540px] lg:max-w-[640px] justify-self-center  bg-center bg-no-repeat bg-contain aspect-video"
                            style={{
                                backgroundImage:
                                    'url(/assets/images/ladiferencia.svg)',
                            }}>
                            {/* <AnimatedHeader2/> */}
                        </div>
                    </div>
                </div>

                {/* INTELLIGENCE */}
                <div className="p-10 pt-20 pb-0 bg-white md:pt-32 ">
                    <div className="flex flex-col justify-center md:gap-3 ">
                        <div className="text-[18px] md:text-[20px] text-indigo">
                            Conoce la herramienta
                        </div>
                        <div className="md:mr-auto font-bold transition-all duration-700 text-[40px] md:text-[60px] text-indigo ">
                            Intelligence
                        </div>
                        <div className=" lg:w-2/5 md:w-full text-[14px] md:text-[24px] pt-2 text-indigo">
                            100% desarrollada por 121 y financiada por el Banco
                            Mundial que te permite análizar el{' '}
                            <p className="inline-block font-bold">sentiment</p> de tus redes sociales para{' '}
                            <p className="inline font-bold">
                                predecir comportamientos y perfilar campañas
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col-reverse mt-10 md:flex-row md:justify-end md:mt-20">
                    <div className="relative md:absolute flex left-0 w-auto px-10 md:ml-20 leading-4 text-indigo py-6 md:text-[16px] font-bold text-brown transition-all duration-1000  bg-[#F2BF57]">
                        Consulta con nuestro especialista
                        <svg
                            className="ml-4 animate-bounce-x"
                            width="42"
                            height="24"
                            viewBox="0 0 42 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M41.5607 13.0607C42.1464 12.4749 42.1464 11.5251 41.5607 10.9393L32.0147 1.3934C31.4289 0.807611 30.4792 0.807611 29.8934 1.3934C29.3076 1.97919 29.3076 2.92893 29.8934 3.51472L38.3787 12L29.8934 20.4853C29.3076 21.0711 29.3076 22.0208 29.8934 22.6066C30.4792 23.1924 31.4289 23.1924 32.0147 22.6066L41.5607 13.0607ZM0 13.5H40.5V10.5H0V13.5Z"
                                fill="#1c3d6d"
                            />
                        </svg>
                    </div>
                    <video
                        loop
                        autoPlay
                        controls
                        muted
                        src="https://res.cloudinary.com/ddeewxutr/video/upload/v1665030531/Soy%20121/SI_Inteligence_-_Anim_1_us6ko7.mp4"
                        type="video/mp4"
                        className="md:w-4/5 aspect-video"
                    />
                </div>

                {/* behavior */}
                <div className="pt-10 my-10 md:pt-24 pb-28 bg-skyblue ">
                    <div className="flex flex-col justify-center gap-3 p-10 pt-0 ">
                        <div className="mr-auto font-bold transition-all duration-700 leading-none text-[40px] md:text-[60px] text-indigo ">
                            Behavior Design
                        </div>
                        <div className="lg:w-3/6 md:w-full pt-2 text-[14px] md:text-[24px] text-indigo">
                            Nos especializamos con líderes mundiales en la
                            ciencia del comportamiento para darle a la
                            creatividad soporte científico que active
                            comportamientos en el consumidor.
                        </div>
                    </div>

                    <div className="flex flex-col-reverse justify-end md:flex-row md:mt-20">
                        <div className="relative md:absolute leading-4 flex left-0 w-auto px-10 md:ml-20 py-6 text-[16px] font-bold text-white transition-all duration-1000  bg-indigo">
                            Consulta con nuestro especialista
                            <svg
                                className="ml-4 animate-bounce-x"
                                width="42"
                                height="24"
                                viewBox="0 0 42 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M41.5607 13.0607C42.1464 12.4749 42.1464 11.5251 41.5607 10.9393L32.0147 1.3934C31.4289 0.807611 30.4792 0.807611 29.8934 1.3934C29.3076 1.97919 29.3076 2.92893 29.8934 3.51472L38.3787 12L29.8934 20.4853C29.3076 21.0711 29.3076 22.0208 29.8934 22.6066C30.4792 23.1924 31.4289 23.1924 32.0147 22.6066L41.5607 13.0607ZM0 13.5H40.5V10.5H0V13.5Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <img
                            className="md:w-4/5 "
                            alt='behavior'
                            src="/assets/images/LaDiferencia_video.jpg">
                        </img>
                    </div>
                </div>

                {/* grid */}

                <div className="bg-white md:px-10 md:my-20 md:py-20">
                    <div className="mx-4 font-bold tracking-tight leading-4 lg:leading-none text-[16px] md:leading-7 md:w-2/3 pl-2 -mt-24 mb-10 md:mb-20 lg:text-[48px] md:text-[30px] text-indigo">
                        Tenemos una solución para acompañarte en cada momento de
                        tu proceso de marketing y comunicación.
                    </div>
                    <div className="flex flex-col sm:grid sm:grid-cols-2 lg:gap-6 md:gap-4 ">
                        {servicios.map((item, index) => {
                            return ( 
                                <UIServiceGridCell
                                    key={index}
                                    service={item.attributes}
                                />
                            );
                        })}
                    </div>
                </div>

                <div data-scroll-section>
                    <Footer />
                </div>
            </div>
        </>
    );
}
