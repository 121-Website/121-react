import Footer from '../components/Footer';
import useLocoScroll from '../hooks/useLocoScroll';

import UIForm from '../components/UIForm';

export default function Hablemos() {
    useLocoScroll(true);
    return (
        <>
            <div
                className="flex flex-col overflow-x-hidden bg-white"
                id="main-container">
                <div
                    data-scroll-section
                    className="relative flex bg-amarillo grow min-h-[640px] md:min-h-[640px]">
                    <div className="flex flex-col-reverse gap-10 mx-10 my-10 grow lg:flex-row md:mx-20">
                        <div
                            data-scroll
                            data-scroll-speed="2"
                            className="flex flex-col pb-0 md:pt-20 justify-center justify-self-center tracking-tight lg:text-left md:text-center w-full sm:max-w-[540px] mx-auto md:max-w-[540px] lg:max-w-[665px] text-indigo">
                            <p className="font-bold tracking-tighter text-center lg:text-left md:justify-center text-[64px] ">
                                Hablemos
                            </p>
                        </div>
                        <div
                            data-scroll
                            data-scroll-speed="-1"
                            className="w-full sm:max-w-[540px] mx-auto md:max-w-[540px] lg:max-w-[640px] justify-self-center  bg-center bg-no-repeat bg-contain aspect-video"
                            style={{
                                backgroundImage:
                                    'url(/assets/images/hablemos.svg)',
                            }}>
                        </div>
                    </div>
                </div>

                <div
                    data-scroll-section
                    className="container z-10 flex flex-col justify-center gap-20 pb-10 mb-20 md:pb-24 md:flex-row ">
                    <div className="flex flex-col gap-4 mx-5 md:flex-row md:container mt-14 md:-mt-8 ">
                        <UIForm />
                        <div className="flex flex-col w-full">
                            <div className="flex items-center gap-2 ">
                                <a
                                    className="flex w-2/3 shrink-0 md:w-1/4"
                                    href="https://wa.me/51991803256"
                                    target="_blank"
                                    rel="noreferrer">
                                    <img
                                        alt="whatsapp"
                                        src="/assets/images/whatsap.svg"></img>
                                </a>
                                <a
                                    className=" md:text-[30px] md:pt-8 text-[18px] text-verde"
                                    href="https://wa.me/51991803256"
                                    target="_blank"
                                    rel="noreferrer">
                                    Escríbenos al{' '}
                                    <span className="font-bold">
                                        Whatsapp de 121
                                    </span>
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <a
                                    className="flex w-2/3 shrink-0 md:w-1/4"
                                    href="mailto:vanessa.ortiz@121rm.com?subject=Hola%20121"
                                    target="_blank"
                                    rel="noreferrer">
                                    <img
                                        src="/assets/images/correo.svg"
                                        alt="correo"></img>
                                </a>
                                <a
                                    className=" md:text-[30px] text-[18px]"
                                    href="mailto:vanessa.ortiz@121rm.com?subject=Hola%20121"
                                    target="_blank"
                                    rel="noreferrer">
                                    <span className="text-indigo">
                                        Escríbenos{' '}
                                        <span className="font-bold">
                                            un correo
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col mt-20 ml-2 lg:gap-24 gap-14 lg:mt-20 md:mt-10 md:pl-9 lg:pl-1 md:gap-20"></div>
                    </div>
                </div>

                <div data-scroll-section>
                    <Footer custom next={'/*'} prev={'/soy121/'} />
                </div>
            </div>
        </>
    );
}
