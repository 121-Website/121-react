import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import UIProjectBanner from '../components/UIProjectBanner';
import useLocoScroll from '../hooks/useLocoScroll';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { GetProjectsByCategoryAPI } from '../utils/getProyectsbyCategory';
import { useRef } from 'react';

export default function Home() {
    const { height, width } = useWindowDimensions();
    useLocoScroll(true);
    const [isMuted, setIsMuted] = React.useState(true);
    const [livedata, setlivedata] = React.useState([]);
    const videoWidth = useRef(0);

    useEffect(() => {
        GetProjectsByCategoryAPI(1)
            .then((data) => {
                setlivedata(data.data.attributes.projects.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const dist = Math.abs(width / 2 - (height * 16) / 18) * -1;

    return (
        <>
            <div className="absolute bg-white check" id="main-container">
                <div
                    data-scroll-section
                    className="relative flex flex-col items-center justify-center flex-grow overflow-hidden overflow-x-hidden uppercase -z-1 text-regular"
                    style={{ width: width, height: height }}>
                    <div
                        className={`h-full w-full absolute overflow-hidden transition-all `}
                        onClick={() => setIsMuted(!isMuted)}
                        src={'https://assets.kgdm.live/121/121_Salta_V6.mp4'}>
                        {isMuted ? (
                            /*sound off*/
                            <div className=" bg-slate-500/20 hover:bg-rosado   absolute z-50  transition-colors hover:fill-amarillo fill-white w-[58px] px-5 py-3 animate-disappear  top-0  mt-20 right-0">
                                {' '}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512">
                                    <path d="M320 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L131.8 160H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h67.8L266.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S320 460.6 320 448V64z" />
                                </svg>
                            </div>
                        ) : (
                            /*sound on*/
                            <div className="bg-slate-500/20 hover:bg-celeste absolute z-50 transition-colors hover:fill-indigo fill-white w-[76px] px-5 py-3 animate-disappear top-0  mt-20 right-0 ">
                                {' '}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 512">
                                    <path d="M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z" />
                                </svg>
                            </div>
                        )}
                        <video
                            ref={videoWidth}
                            className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
                            autoPlay
                            loop
                            muted={isMuted}
                            onClick={() => setIsMuted(!isMuted)}
                            src={
                                'https://assets.kgdm.live/121/121_Salta_V6.mp4'
                            }
                            style={{ marginLeft: width < 1920 ? dist : '0' }}
                        />
                    </div>
                </div>

                <div data-scroll-section className="py-24 bg-white ">
                    <div className="items-center tracking-tight ">
                        <div className="flex justify-center  grow  py-[64px] lg:w-2/3 md:w-full 2xl:px-10 lg:px-20 lg:flex-row ">
                            <div
                                className="lg:text-left md:text-center  lg:text-[78px] md:text-[60px] text-[40px] md:leading-[80px] mb-[60px] font-bold  tracking-tight"
                                style={{
                                    background:
                                        '-webkit-linear-gradient(63.58deg, #F2BF57 8.03%, #D481AA 50%, #CB7EA7 55.03%, #B3759F 63.23%, #8B6692 73.56%, #555280 85.5%, #1C3D6D 96.64%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>
                                Nada combina mejor
                                <br />
                                con la creatividad <br />
                                que el coraje.
                            </div>
                        </div>

                        <div className=" my-36">
                            <div className="flex flex-col-reverse justify-end w-full px-20 lg:gap-40 md:gap-20 grow lg:flex-row bg-celeste bg-opacity-40 h-4/5">
                                <img
                                    className=" lg:-mt-40 mb-2 md:-mt-1  h-[420px] "
                                    src="/assets/images/patinadorhome.svg"
                                    alt="home"
                                />
                                <div className="lg:text-left md:text-center sm:text-center py-16  tracking-tight leading-[50px]  text-indigo lg:text-[46px] sm:text-[40px]">
                                    No hay otro camino al exito que <br />
                                    <span className="font-semibold ">
                                        tomando el emocionante riesgo
                                    </span>{' '}
                                    <br />
                                    de saltar juntos
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-scroll-section>
                    {livedata.map((project, index) => (
                        <UIProjectBanner
                            key={index}
                            id={project.id}
                            project={project.attributes}
                        />
                    ))}
                </div>
                <div data-scroll-section>
                    <Footer />
                </div>
            </div>
        </>
    );
}
