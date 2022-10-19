import Footer from '../components/Footer';
import UITalentGridCell from '../components/UITalentGridCell';
import useLocoScroll from '../hooks/useLocoScroll';
import { talent } from '../utils/data';

export default function Soy121() {
    useLocoScroll(true);

    return (
        <>
            <div
                className="flex flex-col overflow-x-hidden bg-white"
                id="main-container">
                <div
                    data-scroll-section
                    className="relative flex  grow min-h-[980px] bg-[#EDE9E3] ">
                    <div className="flex flex-col-reverse gap-10 mx-10 my-10 grow lg:flex-row md:mx-20">
                        <div
                            data-scroll
                            data-scroll-speed="2"
                            data-scroll-direction="horizontal"
                            className="flex gap-5 flex-col pb-10 justify-center items-center md:items-start justify-self-center tracking-tight lg:text-left md:text-center w-full sm:max-w-[540px] mx-auto md:max-w-[540px] lg:max-w-[665px] text-indigo">
                            <p className="font-bold tracking-tighter text-center leading-none lg:text-left md:justify-center text-[64px]">
                                121 es un equipo <br />
                                de creación continua
                            </p>
                            <p className="text-center md:w-full font-thin leading-9 text-[29px] w-4/5 tracking-tighter md:text-center lg:text-left md:justify-center">
                                Una idea sorprendente es el camino <br />
                                más corto entre un marca y un <br />
                                consumidor que tiene cada vez <br />
                                menos tiempo para pensar en ella.
                            </p>
                        </div>
                        <div
                            data-scroll
                            data-scroll-speed="-1"
                            data-scroll-direction="horizontal"
                            className="w-full sm:max-w-[540px] mx-auto md:max-w-[540px] lg:max-w-[640px] justify-self-center  bg-center bg-no-repeat bg-contain aspect-video"
                            style={{
                                backgroundImage:
                                    'url(/assets/images/soy121.svg)',
                            }}>
                            {/* <AnimatedHeader2/> */}
                        </div>
                    </div>
                </div>

                <div className="px-6 pb-16" data-scroll-section>
                    <div className="grid gap-4 md:grid-cols-3">
                        {talent.map((talent, index) => (
                            <UITalentGridCell
                                key={index}
                                talent={talent.attributes}
                            />
                        ))}
                    </div>
                </div>

                <div
                    data-scroll-section
                    className="flex flex-col items-center justify-center gap-5 py-52 bg-celeste ">
                    <div className="text-[73px] text-center font-bold text-indigo uppercase transition-all duration-100">
                        Da el Salto
                    </div>
                    <div className="pb-6 text-[35px] text-center text-indigo">
                        Valoramos tu inconformidad, <br /> tu obsesión por
                        buscar caminos diferentes,
                        <br />y el deseo{' '}
                        <span className="font-bold">
                            por descubrir algo nuevo cada día.
                            <br />
                            ¡DA EL SALTO!
                        </span>
                    </div>
                    <a
                        href="https://wa.link/wecfs7"
                        target="_blank"
                        rel="noreferrer"
                        className="px-14 py-6 my-20 text-[30px] font-bold uppercase transition-all duration-700 bg-indigo text-celeste hover:bg-rosado hover:text-indigo">
                        POSTULA AQUÍ
                    </a>
                </div>

                <div data-scroll-section>
                    <Footer />
                </div>
            </div>
        </>
    );
}