import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import useWindowDimensions from '../hooks/useWindowDimensions';

export default function UIProjectBanner({ project, id }) {
    const { height, width } = useWindowDimensions();
    const [hover, setHover] = useState(false);
    const [destroy, setDestroy] = useState(false);

    function Destroyer() {
        setDestroy(true);
        setTimeout(function () {
            setHover(false);
        }, 1000);
    }
    function Creator() {
        setDestroy(false);
        setHover(true);
    }

    return (
        <div className="md:pb-16 md:mx-[40px] overflow-hidden bg-white ">
            {console.log('CHECK', project)}
            <Link to={`/trabajo/${project.route}`} className="">
                <div
                    onMouseEnter={Creator}
                    onMouseLeave={Destroyer}
                    className="relative flex w-full transition-all duration-700 transform bg-center bg-cover hover:scale-100 "
                    style={{
                        height: `${
                            width > 400 ? Number(height) * 0.65 : 240
                        }px`,
                        backgroundImage: `url(${project.cover})`,
                    }}>
                    {hover ? (
                        <div
                            className={`md:h-full hidden top-0 bottom-0 left-0 right-0 md:block absolute bg-black overflow-hidden transition-all ${
                                destroy ? 'opacity-0' : 'kgdm-appear'
                            }`}
                            style={{ width: width }}>
                            <video
                                className="object-cover w-full h-full opacity-70"
                                autoPlay
                                loop
                                muted
                                src={project.videopreview}
                            />
                        </div>
                    ) : null}

                    {hover ? (
                        <Link
                            to={`/trabajo/${id}`}
                            className="absolute z-20 translate-y-1/2 flex text-[17px] items-center gap-2 p-4 px-8 pb-5 text-2xl text-white uppercase transition-all duration-700 cursor-pointer animate-appear right-8 bottom-1/2   ">
                            <svg
                                width="29"
                                height="30"
                                viewBox="0 0 29 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M25.3134 13.109C26.6889 13.8701 26.6889 15.8477 25.3134 16.6088L5.75743 27.4306C4.42443 28.1683 2.78906 27.2042 2.78906 25.6807V4.03709C2.78906 2.5136 4.42443 1.5495 5.75743 2.28716L25.3134 13.109Z"
                                    stroke="url(#paint0_linear_286_316)"
                                    strokeWidth="4"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_286_316"
                                        x1="5.05161"
                                        y1="3.69607"
                                        x2="26.7927"
                                        y2="18.7078"
                                        gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#C68563" />
                                        <stop offset="1" stop-color="#A74A83" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            ver caso
                            <svg
                                className="mt-1 animate-bounce-x"
                                width="18"
                                height="16"
                                viewBox="0 0 18 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.0837 0.911057L17.4477 7.27502C17.8382 7.66554 17.8382 8.29871 17.4477 8.68923L11.0837 15.0532C10.6932 15.4437 10.06 15.4437 9.6695 15.0532C9.27898 14.6627 9.27898 14.0295 9.6695 13.639L14.3264 8.98213H0.129883V6.98213H14.3264L9.6695 2.32527C9.27898 1.93475 9.27898 1.30158 9.6695 0.911057C10.06 0.520533 10.6932 0.520533 11.0837 0.911057Z"
                                    fill="white"
                                />
                            </svg>
                        </Link>
                    ) : (
                        ''
                    )}

                    <div className="absolute left-0 z-20 flex flex-col p-6 pb-0 text-white md:gap-6 bottom-6 md:p-8 z-index">
                        <div className="text-sm md:text-[25px]">
                            {project.name}
                        </div>
                        <div className="text-xl tracking-tight font-bold md:text-[74px]">
                            {project.client}
                        </div>
                    </div>
                </div>
            </Link>
            <div className="flex-col hidden gap-12 md:flex md:flex-row">
                <div className="flex flex-col flex-grow gap-4 py-6 bg-white">
                    <div className="lg:text-[36px] font-bold mb-4 lg:laeding-10 md:leading-9 tracking-tight md:text-indigo md:text-[40px] ">
                        <ReactMarkdown
                            className="tracking-tighter "
                            children={project.descriptionhome}
                        />
                    </div>
                    <Link
                        to={`/trabajo/${id}`}
                        className="flex text-rosado items-center justify-start gap-4 text-sm font-bold tracking-tighter md:text-[25px] hover:text-indigo ">
                        ver más
                        <svg
                            className="animate-bounce-x"
                            width="18"
                            height="16"
                            viewBox="0 0 18 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11.0378 0.928635L17.4018 7.2926C17.7923 7.68312 17.7923 8.31629 17.4018 8.70681L11.0378 15.0708C10.6473 15.4613 10.0141 15.4613 9.6236 15.0708C9.23308 14.6802 9.23308 14.0471 9.6236 13.6566L14.2805 8.9997H0.0839844V6.9997H14.2805L9.6236 2.34285C9.23308 1.95232 9.23308 1.31916 9.6236 0.928635C10.0141 0.538111 10.6473 0.538111 11.0378 0.928635Z"
                                fill="#c886a9"
                            />
                        </svg>
                    </Link>
                </div>
                <div className="md:flex hidden relative text-[25px] flex-col md:py-6 flex-grow max-w-[400px] font-bold tracking-tight text-right text-indigo flex-start shrink-0">
                    {project.badge !== null ? (
                        <img
                            className="w-20 h-20 mb-[10px] ml-auto md:-mt-[64px] md:mr-[14px] -top-10 right-10"
                            alt="cover"
                            src={project.badge}
                        />
                    ) : (
                        ''
                    )}
                    <ReactMarkdown
                        className={`home_highlight leading-tighter tracking-tighter ${
                            project.badge !== null ? 'text-[25px]' : ''
                        }`}
                        children={project.highlights}
                    />
                </div>
            </div>
        </div>
    );
}
