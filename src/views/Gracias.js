import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import useLocoScroll from '../hooks/useLocoScroll';

export default function Gracias() {
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
                            <div className='animate-appear'>
                                <p className="font-bold  tracking-tighter text-center lg:text-left md:justify-center text-[64px] ">
                                    Gracias
                                </p>
                                <p className="font-bold mb-8 tracking-tighter text-center lg:text-left md:justify-center text-[24px] ">
                                    En breve nos contactamos.
                                </p>
                                <Link
                                    to={'/'}
                                    className="flex justify-between p-4 text-white bg-indigo">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                                        />
                                    </svg>
                                    Regresar a home
                                </Link>
                            </div>
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

                

                <div data-scroll-section>
                    <Footer custom next={'/*'} prev={'/soy121/'} />
                </div>
            </div>
        </>
    );
}
