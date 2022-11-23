import React from 'react';
import { NavLink } from 'react-router-dom';
import UIBurguerIcon from './UIBurguerIcon';

export default function NavigationTop(props) {
    const [responsive, setResponsive] = React.useState(false);

    return (
        <React.Fragment>
            {responsive && (
                <div className={`fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-6 overflow-hidden text-3xl font-bold tracking-tight  text-indigo bg-celeste z-60 ${responsive ? 'animate-slide-down' : 'animate-slide-up'}`}>
                    <NavLink
                        to="/">
                        Hola 121
                    </NavLink>
                    <NavLink
                        to="/trabajo">
                        Trabajo
                    </NavLink>
                    <NavLink
                        to="/diferencia">
                        La diferencia
                    </NavLink>
                    <NavLink
                        to="/soy121">
                        Soy 121
                    </NavLink>
                    <NavLink
                        to="/hablemos"
                        data-scroll-to>
                        Hablemos
                    </NavLink>
                </div>
            )}
            <div className="fixed top-0 left-0 z-40 flex flex-grow w-full gap-4 px-1 py-2 transition-all duration-500 bg-white text-indigo md:py-4 md:hover:py-10 navigation-top ">
                <div className="mx-[40px] flex grow">
                    <NavLink
                        to={'/'}
                        className="flex items-end gap-2 pr-16 bg-opacity-0 bg-right bg-no-repeat hover:bg-opacity-100">
                        <img
                            src="/assets/images/121-icon-new.svg"
                            alt="logo"
                            className="h-10 md:h-16"
                        />
                    </NavLink>
                    <div className="flex flex-grow"></div>
                    <div className="items-center hidden md:flex navigation-top__menu">
                        <ul className="flex flex-row text-[15px] uppercase gap-12 font-sans text-sm font-bold tracking-wide shrink-0 ">
                            <li className="transition-all transform rounded-full hover:bg-white hover:bg-opacity-20">
                                <NavLink to="/" data-scroll-to
                                    className={({ isActive }) =>
                                        isActive ? 'border-b-2 pb-2 border-b-indigo ' : 'font-bold'
                                    }
                                >
                                    Hola 121
                                </NavLink>
                            </li>
                            <li className="transition-all transform rounded-full hover:bg-white hover:bg-opacity-20 hover:animate-pulse ">
                                <NavLink to="/trabajo" data-scroll-to
                                    className={({ isActive }) =>
                                        isActive ? 'border-b-2 pb-2 border-b-indigo ' : 'font-bold'
                                    }
                                >
                                    Trabajo
                                </NavLink>
                            </li>
                            <li className="transition-all transform rounded-full hover:bg-white hover:bg-opacity-20 hover:animate-pulse">
                                <NavLink to="/diferencia" data-scroll-to
                                    className={({ isActive }) =>
                                        isActive ? 'border-b-2 pb-2 border-b-indigo ' : 'font-bold'
                                    }
                                >
                                    La Diferencia
                                </NavLink>
                            </li>
                            <li className="transition-all transform rounded-full hover:bg-white hover:bg-opacity-20 hover:animate-pulse">
                                <NavLink to="/soy121" data-scroll-to
                                    className={({ isActive }) =>
                                        isActive ? 'border-b-2 pb-2 border-b-indigo ' : 'font-bold'
                                    }
                                >
                                    Soy 121
                                </NavLink>
                            </li>
                            <li className="transition-all transform rounded-full hover:bg-white hover:bg-opacity-20 hover:animate-pulse">
                                <NavLink to="/hablemos" data-scroll-to
                                    className={({ isActive }) =>
                                        isActive ? 'border-b-2 pb-2 border-b-indigo ' : 'font-bold'
                                    }
                                >
                                    Hablemos
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <UIBurguerIcon
                        onClick={() => setResponsive(!responsive)}
                        className="flex mt-2 md:hidden"
                    />
                </div>
            </div>
        </React.Fragment>
    );
}
