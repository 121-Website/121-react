import Footer from '../components/Footer';
import useLocoScroll from '../hooks/useLocoScroll';

export default function Hablemos() {
    useLocoScroll(true);
    return (
        <>
            <div
                className="flex flex-col overflow-x-hidden bg-white"
                id="main-container">
                <div
                    data-scroll-section
                    className="relative flex bg-amarillo grow min-h-[640px] md:min-h-[980px]">
                    <div className="flex flex-col-reverse gap-10 mx-10 my-10 grow lg:flex-row md:mx-20">
                        <div
                            data-scroll
                            data-scroll-speed="2"
                            className="flex flex-col pb-10 justify-center justify-self-center tracking-tight lg:text-left md:text-center w-full sm:max-w-[540px] mx-auto md:max-w-[540px] lg:max-w-[665px] text-indigo">
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
                            {/* <AnimatedHeader2/> */}
                        </div>
                    </div>
                </div>

                <div data-scroll-section className="container z-10 flex flex-col justify-center gap-20 pb-10 mb-20 md:pb-24 md:flex-row ">
                    <div className="flex flex-row gap-4 mx-5 md:container md:gap-2 ">
                        <div
                            className="w-2/3 mt-14 md:-mt-10 moverline md:w-1/4">
                            <a href="https://wa.me/51991803256" target="_blank" rel="noreferrer">
                                <img
                                    alt="whatsapp"
                                    src="/assets/images/whatsap.svg">
                                </img>
                            </a>
                            <a href="mailto:vanessa.ortiz@121rm.com?subject=Hola%20121"
                                target="_blank"
                                rel="noreferrer">
                                <img
                                    src="/assets/images/correo.svg"
                                    alt="correo">
                                </img>
                            </a>
                        </div>
                        <div className="flex flex-col lg:gap-24 ml-2 mt-20 gap-14 lg:mt-20 text-[18px] md:mt-10 md:pl-9 lg:pl-1 md:text-[30px] md:gap-20">
                            <a
                                href="https://wa.me/51991803256"
                                target="_blank"
                                rel="noreferrer"
                                className="text-verde">
                                Escr??benos al{' '}
                                <span className="font-bold">
                                    Whatsapp de 121
                                </span>
                            </a>
                            <a
                                href="mailto:vanessa.ortiz@121rm.com?subject=Hola%20121"
                                target="_blank"
                                rel="noreferrer">
                                <span className="text-indigo">
                                    Escr??benos{' '}
                                    <span className="font-bold">un correo</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                <div data-scroll-section>
                    <Footer custom next={'/*'} prev={'/soy121/'} />
                </div>
            </div>
        </>
    );
}
