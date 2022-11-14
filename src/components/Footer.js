import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer({ custom = false, next='/', prev='/' }) {
    const [customFooter, setCustomFooter] = useState(false)
    useEffect(() => {
        setCustomFooter(custom)
    }, [custom])

    return (
        <React.Fragment>
            {customFooter &&
                <div className={`flex flex-row items-center justify-center h-auto gap-10 p-5 bg-neutral-200 ${!customFooter ? 'flex' : 'md:hidden'}`}>
                    <Link to={ prev } className="flex flex-row items-center gap-2">
                        <svg width="24" height="18" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5 38.01L20.02 34.89L6.38998 19.55L21.85 3.23001L18.43 0L0 19.45L16.5 38.01Z" fill="#163E6E" />
                            <path d="M44.1131 16.6585L3.15723 17.1295L3.21139 21.8391L44.1673 21.368L44.1131 16.6585Z" fill="#163E6E" />
                        </svg>
                        <div className="text-[18px] font-bold text-indigo">
                            Anterior
                        </div>
                    </Link>
                    <Link to={'/'}>
                        <div className="text-[18px] font-bold text-rosado">
                            Home
                        </div>
                    </Link>
                    <Link to={ next } className="flex flex-row items-center gap-2">
                        <div className="text-indigo text-[18px] font-bold">
                            Siguiente
                        </div>
                        <svg className="rotate-180" width="24" height="18" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5 38.01L20.02 34.89L6.38998 19.55L21.85 3.23001L18.43 0L0 19.45L16.5 38.01Z" fill="#163E6E" />
                            <path d="M44.1131 16.6585L3.15723 17.1295L3.21139 21.8391L44.1673 21.368L44.1131 16.6585Z" fill="#163E6E" />
                        </svg>
                    </Link>
                </div>
            }


                <footer className={`relative z-30 flex flex-col md:flex-row bg-neutral-200 footer h-144 ${!customFooter ? 'flex' : 'hidden md:flex'}`}>

                    <div className="flex flex-row w-3/5">
                        <div className="w-[150px] md:w-auto text-xs p-5 md:p-10 lg:p-[60px] md:gap-12 flex-col flex lg:w-1/3 bg-amarillo">
                            <Link to={'/'} className="flex w-full md:flex-grow ">
                                <svg width="148" height="77" viewBox="0 0 148 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M68.3183 38.9811C72.4508 34.8486 75.0068 29.1404 75.0068 22.835C75.0068 10.2307 64.923 0.0801315 52.3195 0.000457764C39.6403 -0.079216 29.3376 10.1744 29.3376 22.835H38.471C38.471 15.2034 44.7112 9.02837 52.3678 9.13541C59.8562 9.24003 65.9201 15.4352 65.8726 22.9244C65.8485 26.6722 64.3194 30.0627 61.86 32.5229L29.1847 65.1982C28.0428 66.3401 27.4014 67.8885 27.4014 69.5037V76.1149H76.1149V66.9815H40.3179L68.3183 38.9811ZM91.3381 6.08935V0.000450134H100.471V76.1149H91.3381V18.2679H77.6377V9.1346H88.2937C89.9748 9.1346 91.3381 7.77132 91.3381 6.08935ZM10.656 9.13477H0V18.2681H13.7004V76.1158H22.8346V0.000617981H13.7004V6.09032C13.7004 7.77148 12.3371 9.13477 10.656 9.13477ZM108.068 75.8336V65.465H109.323V74.7198H114.143V75.8336H108.068ZM118.213 76.0159C117.721 76.0159 117.273 75.9231 116.872 75.7374C116.47 75.5484 116.151 75.2767 115.915 74.9223C115.679 74.5645 115.561 74.1325 115.561 73.6262C115.561 73.1807 115.648 72.8196 115.824 72.5428C115.999 72.2627 116.234 72.0433 116.528 71.8846C116.821 71.726 117.145 71.6079 117.5 71.5302C117.857 71.4492 118.217 71.3851 118.578 71.3379C119.05 71.2771 119.434 71.2315 119.727 71.2012C120.024 71.1674 120.24 71.1117 120.375 71.0341C120.514 70.9565 120.583 70.8214 120.583 70.6291V70.5886C120.583 70.089 120.446 69.7009 120.173 69.4241C119.903 69.1474 119.493 69.009 118.942 69.009C118.372 69.009 117.925 69.1339 117.601 69.3836C117.277 69.6334 117.049 69.9 116.917 70.1835L115.783 69.7785C115.986 69.306 116.256 68.9381 116.593 68.6748C116.934 68.4082 117.306 68.2225 117.707 68.1179C118.112 68.0099 118.51 67.9559 118.902 67.9559C119.152 67.9559 119.439 67.9863 119.763 68.047C120.09 68.1044 120.406 68.2242 120.709 68.4065C121.017 68.5888 121.271 68.8638 121.474 69.2317C121.676 69.5996 121.778 70.0924 121.778 70.7101V75.8336H120.583V74.7806H120.522C120.441 74.9493 120.306 75.1299 120.117 75.3223C119.928 75.5147 119.677 75.6784 119.363 75.8134C119.049 75.9484 118.666 76.0159 118.213 76.0159ZM118.396 74.9426C118.868 74.9426 119.266 74.8498 119.591 74.6641C119.918 74.4785 120.164 74.2388 120.33 73.9452C120.498 73.6516 120.583 73.3427 120.583 73.0187V71.9251C120.532 71.9859 120.421 72.0416 120.249 72.0922C120.08 72.1395 119.884 72.1817 119.661 72.2188C119.442 72.2525 119.228 72.2829 119.018 72.3099C118.813 72.3335 118.645 72.3538 118.517 72.3707C118.207 72.4112 117.916 72.477 117.646 72.5681C117.38 72.6559 117.164 72.7892 116.998 72.9681C116.836 73.1436 116.755 73.3832 116.755 73.687C116.755 74.1021 116.909 74.416 117.216 74.6287C117.527 74.8379 117.92 74.9426 118.396 74.9426ZM127.34 68.0572V69.0697H125.68V73.606C125.68 73.9435 125.729 74.1966 125.827 74.3654C125.928 74.5308 126.056 74.6422 126.211 74.6996C126.37 74.7536 126.537 74.7806 126.713 74.7806C126.844 74.7806 126.952 74.7738 127.037 74.7603L127.239 74.7198L127.482 75.7931C127.401 75.8235 127.288 75.8539 127.143 75.8842C126.998 75.918 126.814 75.9349 126.591 75.9349C126.254 75.9349 125.923 75.8623 125.599 75.7172C125.278 75.572 125.012 75.351 124.799 75.0539C124.59 74.7569 124.485 74.3823 124.485 73.93V69.0697H123.31V68.0572H124.485V66.1941H125.68V68.0572H127.34ZM131.426 76.0159C130.933 76.0159 130.486 75.9231 130.084 75.7374C129.683 75.5484 129.364 75.2767 129.128 74.9223C128.891 74.5645 128.773 74.1325 128.773 73.6262C128.773 73.1807 128.861 72.8196 129.036 72.5428C129.212 72.2627 129.447 72.0433 129.74 71.8846C130.034 71.726 130.358 71.6079 130.712 71.5302C131.07 71.4492 131.429 71.3851 131.791 71.3379C132.263 71.2771 132.646 71.2315 132.94 71.2012C133.237 71.1674 133.453 71.1117 133.588 71.0341C133.726 70.9565 133.795 70.8214 133.795 70.6291V70.5886C133.795 70.089 133.659 69.7009 133.385 69.4241C133.115 69.1474 132.705 69.009 132.155 69.009C131.585 69.009 131.137 69.1339 130.813 69.3836C130.489 69.6334 130.262 69.9 130.13 70.1835L128.996 69.7785C129.198 69.306 129.468 68.9381 129.806 68.6748C130.147 68.4082 130.518 68.2225 130.92 68.1179C131.325 68.0099 131.723 67.9559 132.115 67.9559C132.364 67.9559 132.651 67.9863 132.975 68.047C133.303 68.1044 133.618 68.2242 133.922 68.4065C134.229 68.5888 134.484 68.8638 134.687 69.2317C134.889 69.5996 134.99 70.0924 134.99 70.7101V75.8336H133.795V74.7806H133.735C133.654 74.9493 133.519 75.1299 133.33 75.3223C133.141 75.5147 132.889 75.6784 132.575 75.8134C132.261 75.9484 131.878 76.0159 131.426 76.0159ZM131.608 74.9426C132.081 74.9426 132.479 74.8498 132.803 74.6641C133.131 74.4785 133.377 74.2388 133.542 73.9452C133.711 73.6516 133.795 73.3427 133.795 73.0187V71.9251C133.745 71.9859 133.633 72.0416 133.461 72.0922C133.293 72.1395 133.097 72.1817 132.874 72.2188C132.655 72.2525 132.44 72.2829 132.231 72.3099C132.025 72.3335 131.858 72.3538 131.73 72.3707C131.419 72.4112 131.129 72.477 130.859 72.5681C130.592 72.6559 130.376 72.7892 130.211 72.9681C130.049 73.1436 129.968 73.3832 129.968 73.687C129.968 74.1021 130.122 74.416 130.429 74.6287C130.739 74.8379 131.132 74.9426 131.608 74.9426ZM137.171 75.8336V68.0572H138.325V69.2722H138.427C138.589 68.8571 138.85 68.5348 139.211 68.3052C139.573 68.0724 140.006 67.9559 140.513 67.9559C141.026 67.9559 141.453 68.0724 141.793 68.3052C142.138 68.5348 142.406 68.8571 142.598 69.2722H142.679C142.879 68.8706 143.177 68.5516 143.576 68.3154C143.974 68.0757 144.451 67.9559 145.008 67.9559C145.704 67.9559 146.272 68.1736 146.714 68.609C147.157 69.041 147.378 69.7144 147.378 70.6291V75.8336H146.183V70.6291C146.183 70.0553 146.026 69.6452 145.712 69.3988C145.398 69.1524 145.029 69.0292 144.603 69.0292C144.056 69.0292 143.633 69.1946 143.333 69.5254C143.032 69.8528 142.882 70.2679 142.882 70.7708V75.8336H141.667V70.5076C141.667 70.0654 141.523 69.7093 141.236 69.4393C140.95 69.1659 140.58 69.0292 140.128 69.0292C139.817 69.0292 139.527 69.1119 139.257 69.2773C138.99 69.4427 138.774 69.6722 138.609 69.9658C138.447 70.2561 138.366 70.5919 138.366 70.9733V75.8336H137.171ZM102.375 1.52291C102.375 2.15385 102.886 2.66488 103.517 2.66488C104.148 2.66488 104.659 2.15385 104.659 1.52291C104.659 0.892774 104.148 0.381744 103.517 0.381744C102.886 0.381744 102.375 0.892774 102.375 1.52291ZM101.994 1.52291C101.994 0.682729 102.676 0.00108767 103.517 0.00108767C104.358 0.00108767 105.039 0.682729 105.039 1.52291C105.039 2.36389 104.358 3.04554 103.517 3.04554C102.676 3.04554 101.994 2.36389 101.994 1.52291ZM103.295 1.42473H103.618C103.751 1.42473 103.817 1.36517 103.817 1.24687C103.817 1.12857 103.745 1.06902 103.603 1.06902H103.295V1.42473ZM103.895 1.52371C103.992 1.56556 104.045 1.65248 104.052 1.78526L104.067 1.97278C104.071 2.05003 104.091 2.11442 104.13 2.16592H103.859C103.827 2.12488 103.81 2.0605 103.806 1.97278L103.796 1.83757C103.789 1.76434 103.773 1.71444 103.749 1.68869C103.724 1.66213 103.681 1.64926 103.618 1.64926H103.295V2.16592H103.033V0.834025H103.613C103.759 0.834025 103.875 0.867021 103.96 0.933817C104.046 0.999808 104.088 1.09397 104.088 1.21549C104.088 1.36517 104.024 1.46818 103.895 1.52371ZM143.133 20.111V18.4596H134.327V32.2203H143.133V30.569H135.978V26.1652H142.583V24.5139H135.978V20.111H143.133ZM109.421 25.3396C109.421 28.2279 111.761 30.569 114.65 30.569C117.538 30.569 119.879 28.2279 119.879 25.3396C119.879 22.452 117.538 20.111 114.65 20.111C111.761 20.111 109.421 22.452 109.421 25.3396ZM107.77 25.3396C107.77 21.5402 110.849 18.4596 114.65 18.4596C118.45 18.4596 121.53 21.5402 121.53 25.3396C121.53 29.1397 118.45 32.2203 114.65 32.2203C110.849 32.2203 107.77 29.1397 107.77 25.3396ZM131.528 30.6217L125.061 18.4584H122.446V32.2184H124.098V20.1637L130.507 32.2184H133.18V18.4584H131.528V30.6217ZM107.768 36.1647V34.5133H118.226V36.1647H113.822V48.2741H112.172V36.1647H107.768ZM124.189 46.6227C121.301 46.6227 118.96 44.2816 118.96 41.3933C118.96 38.5057 121.301 36.1647 124.189 36.1647C127.077 36.1647 129.418 38.5057 129.418 41.3933C129.418 44.2816 127.077 46.6227 124.189 46.6227ZM124.189 34.5133C120.388 34.5133 117.309 37.5939 117.309 41.3933C117.309 45.1934 120.388 48.2741 124.189 48.2741C127.989 48.2741 131.069 45.1934 131.069 41.3933C131.069 37.5939 127.989 34.5133 124.189 34.5133ZM143.133 50.567V52.2184H135.978V56.6213H142.583V58.2727H135.978V62.6764H143.133V64.3278H134.327V50.567H143.133ZM114.65 62.6764C111.761 62.6764 109.421 60.3353 109.421 57.447C109.421 54.5595 111.761 52.2184 114.65 52.2184C117.538 52.2184 119.879 54.5595 119.879 57.447C119.879 60.3353 117.538 62.6764 114.65 62.6764ZM114.65 50.567C110.849 50.567 107.77 53.6476 107.77 57.447C107.77 61.2471 110.849 64.3278 114.65 64.3278C118.45 64.3278 121.53 61.2471 121.53 57.447C121.53 53.6476 118.45 50.567 114.65 50.567ZM125.061 50.567L131.528 62.7303V50.567H133.18V64.3278H130.507L124.098 52.2723V64.3278H122.446V50.567H125.061Z" fill="#1c3d6d" />
                                </svg>
                            </Link>
                            <div className="text-indigo">
                                Copyright @ 2022. All rights
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 lg:w-2/3 bg-rosado text-indigo">
                            <div className="py-8 p-5 md:p-10 lg:p-[60px]">
                                <div className="mb-6 text-[18px] md:text-[32px] leading-5 md:leading-7 tracking-wide font-bold md:mb-12 md:text-3xl">
                                    Suscríbete a nuestro<br /> boletín de insights
                                </div>
                                <div className="flex items-center justify-start">
                                    <input className="w-3/4 p-3 bg-transparent border-b placeholder-indigo text-indigo border-indigo bg-none" placeholder="Email"></input>
                                </div>
                            </div>

                            <div className="flex flex-row items-center justify-center gap-4 p-5 pt-0 md:gap-5 md:p-10 bg-rosado lg:absolute lg:w-2/5 md:relative lg:bottom-0">
                                <Link to={'/'} className="flex items-center ">
                                    <svg width="40" height="40" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M42.2294 35.4499C42.2294 39.1999 39.1894 42.2399 35.4394 42.2399C31.6894 42.2399 28.6494 39.1999 28.6494 35.4499C28.6494 31.6999 31.6894 28.6599 35.4394 28.6599C39.1994 28.6599 42.2294 31.6999 42.2294 35.4499Z" fill="#1B3C6A" />
                                        <path d="M51.3198 23.44C50.9898 22.56 50.4698 21.76 49.7998 21.1C49.1398 20.42 48.3398 19.9 47.4598 19.58C46.7398 19.3 45.6598 18.97 43.6798 18.88C41.5298 18.78 40.8898 18.76 35.4498 18.76C30.0098 18.76 29.3698 18.78 27.2198 18.88C25.2398 18.97 24.1598 19.3 23.4398 19.58C22.5598 19.9 21.7498 20.43 21.0998 21.1C20.4198 21.76 19.8998 22.56 19.5798 23.44C19.2998 24.16 18.9698 25.23 18.8798 27.22C18.7798 29.37 18.7598 30.01 18.7598 35.45C18.7598 40.88 18.7798 41.53 18.8798 43.68C18.9698 45.67 19.2998 46.74 19.5798 47.46C19.9098 48.34 20.4298 49.14 21.0998 49.8C21.7598 50.48 22.5598 51 23.4398 51.32C24.1598 51.6 25.2398 51.93 27.2198 52.02C29.3698 52.12 30.0098 52.14 35.4498 52.14C40.8898 52.14 41.5298 52.12 43.6798 52.02C45.6598 51.93 46.7398 51.6 47.4598 51.32C49.2398 50.63 50.6398 49.23 51.3198 47.46C51.5998 46.74 51.9298 45.67 52.0198 43.68C52.1198 41.53 52.1398 40.89 52.1398 35.45C52.1398 30.01 52.1198 29.37 52.0198 27.22C51.9298 25.24 51.5998 24.16 51.3198 23.44ZM35.4498 45.9C29.6798 45.9 24.9998 41.22 24.9998 35.45C24.9998 29.68 29.6798 25 35.4498 25C41.2198 25 45.8998 29.68 45.8998 35.45C45.8998 41.22 41.2198 45.9 35.4498 45.9ZM46.3098 27.02C44.9598 27.02 43.8698 25.93 43.8698 24.58C43.8698 23.23 44.9598 22.14 46.3098 22.14C47.6598 22.14 48.7498 23.23 48.7498 24.58C48.7598 25.93 47.6598 27.02 46.3098 27.02Z" fill="#1B3C6A" />
                                        <path d="M35.45 0C15.87 0 0 15.88 0 35.45C0 55.03 15.88 70.9 35.45 70.9C55.03 70.9 70.9 55.03 70.9 35.45C70.9 15.87 55.02 0 35.45 0ZM55.68 43.84C55.58 46.01 55.24 47.49 54.73 48.78C53.67 51.51 51.51 53.68 48.78 54.74C47.49 55.24 46.01 55.59 43.84 55.69C41.67 55.79 40.98 55.81 35.45 55.81C29.92 55.81 29.23 55.79 27.06 55.69C24.89 55.59 23.41 55.25 22.12 54.74C20.76 54.23 19.53 53.43 18.51 52.39C17.48 51.37 16.67 50.14 16.16 48.78C15.66 47.49 15.31 46 15.21 43.84C15.11 41.67 15.09 40.97 15.09 35.45C15.09 29.92 15.11 29.23 15.21 27.06C15.31 24.89 15.65 23.41 16.16 22.12C16.67 20.76 17.47 19.53 18.51 18.52C19.53 17.48 20.76 16.68 22.11 16.17C23.4 15.67 24.88 15.32 27.05 15.22C29.22 15.12 29.91 15.1 35.44 15.1C40.97 15.1 41.66 15.12 43.83 15.22C46 15.32 47.48 15.66 48.77 16.17C50.13 16.68 51.36 17.48 52.37 18.52C53.41 19.54 54.21 20.77 54.72 22.12C55.22 23.42 55.57 24.89 55.67 27.06C55.77 29.23 55.79 29.92 55.79 35.45C55.8 40.98 55.78 41.67 55.68 43.84Z" fill="#1B3C6A" />
                                    </svg>
                                </Link>
                                <Link to={'/'} className="flex items-center">
                                    <svg width="40" height="40" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M35.8299 0C16.2499 0 0.379883 15.87 0.379883 35.45C0.379883 55.03 16.2499 70.9 35.8299 70.9C55.4099 70.9 71.2799 55.03 71.2799 35.45C71.2899 15.87 55.4199 0 35.8299 0ZM49.3599 18.05H44.4599C40.6099 18.05 39.8699 19.88 39.8699 22.56V28.47H49.0399L49.0299 37.73H39.8699V61.49H30.2999V37.73H22.2999V28.47H30.2999V21.64C30.2999 13.71 35.1399 9.40002 42.2099 9.40002L49.3499 9.41V18.05H49.3599Z" fill="#1B3C6A" />
                                    </svg>
                                </Link>
                                <Link to={'/'} className="flex items-center">
                                    <svg width="40" height="40" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M31.2393 42.0901L42.7693 35.45L31.2393 28.8101V42.0901Z" fill="#1B3C6A" />
                                        <path d="M35.66 0C16.08 0 0.209961 15.88 0.209961 35.45C0.209961 55.03 16.09 70.9 35.66 70.9C55.24 70.9 71.11 55.03 71.11 35.45C71.11 15.87 55.24 0 35.66 0ZM57.81 35.49C57.81 35.49 57.81 42.68 56.9 46.15C56.39 48.05 54.89 49.54 53 50.05C49.53 50.96 35.67 50.96 35.67 50.96C35.67 50.96 21.84 50.96 18.33 50.01C16.43 49.5 14.94 48 14.43 46.11C13.52 42.68 13.52 35.45 13.52 35.45C13.52 35.45 13.52 28.26 14.43 24.79C14.94 22.89 16.47 21.36 18.33 20.85C21.8 19.94 35.67 19.94 35.67 19.94C35.67 19.94 49.54 19.94 53 20.89C54.9 21.4 56.39 22.9 56.9 24.79C57.85 28.26 57.81 35.49 57.81 35.49Z" fill="#1B3C6A" />
                                    </svg>

                                </Link>
                                <Link to={'/'} className="flex items-center">
                                    <svg width="40" height="40" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M36.2895 0.0898438C16.7595 0.0898438 0.939453 15.9198 0.939453 35.4498C0.939453 54.9698 16.7695 70.7998 36.2895 70.7998C55.8195 70.7998 71.6395 54.9698 71.6395 35.4498C71.6495 15.9198 55.8195 0.0898438 36.2895 0.0898438ZM27.9595 50.6598L20.4695 50.6098L20.6194 26.4198L28.1095 26.4698L27.9595 50.6598ZM24.3495 23.2798C21.8995 23.2598 19.9295 21.2498 19.9495 18.7898C19.9595 16.3198 21.9595 14.3398 24.4095 14.3498C26.8595 14.3698 28.8294 16.3798 28.8094 18.8398C28.7894 21.2998 26.7895 23.2898 24.3495 23.2798ZM56.0195 50.8398L48.5594 50.7898C48.5594 50.7898 48.6195 41.5698 48.6395 38.0898C48.6595 34.6098 47.3495 32.6598 44.5995 32.6398C41.5995 32.6198 40.0195 34.6398 39.9995 38.0398C39.9795 41.7698 39.9195 50.7398 39.9195 50.7398L32.7394 50.6998L32.8895 26.5098L40.0695 26.5498L40.0495 29.8098C40.0495 29.8098 42.2294 25.8298 47.3694 25.8598C52.4994 25.8898 56.1495 29.0498 56.1095 35.5298C56.0795 41.9998 56.0195 50.8398 56.0195 50.8398Z" fill="#1B3C6A" />
                                    </svg>

                                </Link>
                            </div>
                        </div>
                    </div>


                    <div className="bg-indigo text-sm flex-col  flex  lg:w-2/5  p-10 lg:p-[60px]">
                        <div className="flex flex-wrap gap-24 md:flex-row grow text-celeste text-[12px] ">
                            <div className="flex flex-col gap-2 text-left md:flex-col">
                                <Link to={"/"} className="font-semibold opacity-100 text-[16px] cursor-pointer hover:opacity-80">Consultoría</Link>
                                <Link to={"/"} className="cursor-pointer opacity-90 hover:opacity-100">Ciencias del<br /> Comportamiento</Link>
                                <Link to={"/"} className="cursor-pointer opacity-90 hover:opacity-100">Ciencias de la<br /> Información (NLP)</Link>
                                <Link to={"/"} className="cursor-pointer opacity-90 hover:opacity-100">Disrupción Creativa<br /> e Innovación</Link>
                                <Link to={"/"} className="cursor-pointer opacity-90 hover:opacity-100">Producción ágil a<br /> escala</Link>
                            </div>
                            <div className="flex flex-col gap-2 text-left md:flex-col">
                                <Link to={"/"} className="font-semibold opacity-100 text-[16px] cursor-pointer hover:opacity-80">Servicios</Link>
                                <Link to={"/"} className="cursor-pointer opacity-90 hover:opacity-100">Campañas</Link>
                                <Link to={"/"} className="cursor-pointer opacity-90 hover:opacity-100">Redes Sociales</Link>
                                <Link to={"/"} className="cursor-pointer opacity-90 hover:opacity-100">Programas de<br /> relacionamiento</Link>
                                <Link to={"/"} className="cursor-pointer opacity-90 hover:opacity-100">Email y Marketing</Link>
                                <Link to={"/"} className="cursor-pointer opacity-90 hover:opacity-100">Desarrollo Web y<br /> Apps</Link>
                            </div>
                            <div className="flex flex-col gap-2 font-semibold text-left md:flex-col">
                                <Link to={"/"} className="opacity-100 cursor-pointer text-[16px] hover:opacity-80">Contáctanos</Link>
                            </div>
                        </div>

                        <div className="hidden pt-5 text-sm text-celeste md:block">
                            Copyright © 2021. All rights reserved.
                        </div>
                    </div>

                </footer >

        </React.Fragment>
    )
}