import Footer from '../components/Footer';

export default function Hablemos() {
    return (
        <>
            <div
                className="flex flex-col overflow-x-hidden bg-white"
                id="main-container">
                <div
                    data-scroll-section
                    className="relative flex bg-amarillo grow min-h-[980px]">
                    <div className="flex flex-col-reverse gap-10 mx-10 my-10 grow lg:flex-row md:mx-20">
                        <div
                            data-scroll
                            data-scroll-speed="2"
                            data-scroll-direction="horizontal"
                            className="flex flex-col pb-10 justify-center justify-self-center tracking-tight lg:text-left md:text-center w-full sm:max-w-[540px] mx-auto md:max-w-[540px] lg:max-w-[665px] text-indigo">
                            <p className="font-bold tracking-tighter text-center lg:text-left md:justify-center text-[64px] ">
                                Hablemos
                            </p>
                        </div>
                        <div
                            data-scroll
                            data-scroll-speed="-1"
                            data-scroll-direction="horizontal"
                            className="w-full sm:max-w-[540px] mx-auto md:max-w-[540px] lg:max-w-[640px] justify-self-center  bg-center bg-no-repeat bg-contain aspect-video"
                            style={{
                                backgroundImage:
                                    'url(/assets/images/hablemos.svg)',
                            }}>
                            {/* <AnimatedHeader2/> */}
                        </div>
                    </div>
                </div>

                <div className="container z-10 flex flex-col justify-center gap-20 pb-24 mb-20 md:flex-row ">
                    <div className="container flex flex-row gap-2 ">
                        <div
                            data-scroll
                            data-scroll-speed="2"
                            data-scroll-direction="horizontal"
                            className="w-auto -mt-10 overline md:w-1/4">
                            <img
                                href="https://wa.link/wecfs7"
                                target="_blank"
                                rel="noreferrer"
                                alt="whatsapp"
                                src="/assets/images/whatsap.svg"></img>
                            <img
                                src="/assets/images/correo.svg"
                                alt="correo"></img>
                        </div>
                        <div className="flex flex-col lg:gap-24 lg:mt-20 text-[36px] md:mt-10 md:pl-9 lg:pl-1 md:text-[30px] md:gap-20">
                            <a
                                href="https://wa.link/wecfs7"
                                target="_blank"
                                rel="noreferrer"
                                className="text-verde">
                                Escríbenos al{' '}
                                <span className="font-bold">
                                    Whatsapp de 121
                                </span>
                            </a>
                            <span className="text-indigo">
                                Escríbenos{' '}
                                <span className="font-bold">un correo</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div data-scroll-section>
                    <Footer />
                </div>
            </div>
        </>
    );
}
