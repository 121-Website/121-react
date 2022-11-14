import React, { useEffect, useState } from 'react';
import { GetProjectAPI } from '../utils/getProject';
import { useParams } from 'react-router-dom';
import useLocoScroll from '../hooks/useLocoScroll';
import Footer from '../components/Footer';
// import ReactMarkdown from 'react-markdown';
import './Project.css';
export default function Project() {
    useLocoScroll(true);

    const { id } = useParams();
    const [project, setProject] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isMuted, setIsMuted] = React.useState(true);

    useEffect(() => {
        GetProjectAPI(id).then((data) => {
            setProject(data.data.attributes);
            setLoading(false);
            console.log(data);
        });
    }, [id]);

    return (
        <>
            <div className="bg-white md:absolute min-h-fit" id="main-container">
                {!loading && (
                    <div
                        id="top"
                        className="relative flex w-screen aspect-video md:h-screen"
                        data-scroll-section>
                        {project.video ? (
                            <video
                                loop
                                autoPlay
                                controls
                                muted={isMuted}
                                src={project.video}
                                type="video/mp4"
                                onClick={() => setIsMuted(!isMuted)}
                                className="absolute top-0 object-cover w-screen md:h-screen aspect-video"
                            />
                        ) : (
                            <div
                                className="absolute top-0 object-cover w-screen h-screen bg-no-repeat bg-cover"
                                style={{
                                    backgroundImage: `url(${project.cover})`,
                                }}></div>
                        )}
                    </div>
                )}
                <div
                    data-scroll-section
                    className="flex flex-col bg-white md:flex-row">
                    <div className="w-full bg-white pt-14 md:w-3/5 text-indigo">
                        <div className="px-[4rem] flex flex-col gap-2 ">
                            <div
                                className="text-[18px]  md:text-[20px]  "
                                data-scroll
                                data-scroll-repeat
                                data-scroll-call="toggleBackToTop">
                                {project.name}
                            </div>
                            <div className="text-[40px] tracking-tight font-bold md:text-[60px] mb-12 ">
                                {project.client}
                            </div>
                            <div className="text-[32px] max-w-[570px] font-bold leading-10 tracking-tight md:text-[42px]">
                                {project.description}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-start gap-12 pt-12 text-lg font-bold text-indigo md:bg-white md:pt-0 md:w-2/5">
                        <div className="hidden md:flex">
                            <svg
                                width="272"
                                height="136"
                                viewBox="0 0 272 136"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M271.574 0.000152588L135.787 135.787L0 0.000152588H271.574Z"
                                    fill="#CBC5BC"
                                />
                                <path
                                    d="M176.146 95.4456L135.786 135.805L95.4282 95.4456H176.146Z"
                                    fill="#281B19"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div
                    data-scroll-section
                    className="flex flex-col py-24 md:flex-row">
                    <div className="md:w-3/5">
                        <div className="px-[4rem] mb-12 md:px-[4rem] flex flex-col gap-2">
                            <div className="mb-2 text-[34px] tracking-tight text-indigo font-bold ">
                                El Problema
                            </div>
                            <div className="text-[24px] max-w-[570px] text-indigo font-normal leading-9">
                                {project.problema}
                            </div>
                        </div>
                    </div>

                    <div className="md:w-2/5">
                        <div className="px-[4rem] md:px-0">
                            <div className="mb-2 text-[34px] text-indigo font-bold tracking-tight">
                                El Salto
                            </div>
                            <div className="text-[24px] max-w-[570px]  md:pr-[4rem] text-indigo font-normal leading-9">
                                {project.salto}
                            </div>
                        </div>
                    </div>
                </div>

                <div data-scroll-section className="flex">
                    <div className="flex bg-white pt-14 md:w-3/5 text-indigo" />
                    <div className="flex flex-col items-center justify-center w-full gap-12 pt-12 text-lg font-bold text-indigo md:bg-white md:pt-0 md:w-2/5">
                        <a
                            href={`/project/${
                                Number(id) < 12 ? Number(id) + 1 : 1
                            }`}
                            className="p-6 tracking-tight flex flex-wrap sm:text-[24px] md:text-[24px] lg:text-[37px] justify-center w-full hover:bg-rosado transition-all duration-700 md:bg-amarillo bg-celeste">
                            <div className="flex items-center w-auto h-10 bg-center bg-no-repeat bg-contain text-indigo ">
                                Siguiente Caso
                                <svg
                                    className="ml-4 animate-bounce-x"
                                    width="42"
                                    height="24"
                                    viewBox="0 0 42 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M41.5607 13.0607C42.1464 12.4749 42.1464 11.5251 41.5607 10.9393L32.0147 1.3934C31.4289 0.807611 30.4792 0.807611 29.8934 1.3934C29.3076 1.97919 29.3076 2.92893 29.8934 3.51472L38.3787 12L29.8934 20.4853C29.3076 21.0711 29.3076 22.0208 29.8934 22.6066C30.4792 23.1924 31.4289 23.1924 32.0147 22.6066L41.5607 13.0607ZM0 13.5H40.5V10.5H0V13.5Z"
                                        fill="#1C3D6D"
                                    />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>

                <div data-scroll-section>
                    <Footer custom next={'/diferencia/'} prev={'/trabajo/'}/>
                </div>
            </div>
        </>
    );
}
