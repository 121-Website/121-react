import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Transition() {
    const location = useLocation();

    React.useEffect(() => {
        console.log('handle route change here', location);
    }, [location]);

    return (
        <React.Fragment>
            <div className="absolute top-0 left-0 right-0 flex overflow-hidden z-80 bottom-full bg-celeste animate-slide-transition">
                <div className="flex justify-center w-9/12 m-auto justify-items-center ">
                    <svg
                        width="141"
                        height="501"
                        viewBox="0 0 141 501"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            className=" draw stroke-60 stroke-indigo animate-draw"
                            d="M0 93.4405C23.6327 93.4405 44.2065 93.4405 61.0067 93.4405C88.621 93.4405 111 71.0536 111 43.4394C111 24.5825 111 6.1807 111 0V501"
                        />
                    </svg>
                    <svg
                        width="329"
                        height="505"
                        viewBox="0 0 329 505"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            className=" draw stroke-60 stroke-rosado animate-draw"
                            d="M0.5 30H131.5M329 30H131.5M131.5 30V504.5"
                        />
                    </svg>
                    <svg
                        className="-ml-10"
                        width="517"
                        height="517"
                        viewBox="0 0 517 517"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle
                            className=" draw stroke-60 stroke-rosado animate-draw"
                            cx="258.5"
                            cy="258.5"
                            r="228.5"
                        />
                    </svg>
                    <svg
                        className="-ml-32"
                        width="141"
                        height="501"
                        viewBox="0 0 141 501"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            className=" draw stroke-60 stroke-indigo animate-draw"
                            d="M0 93.4405C23.6327 93.4405 44.2065 93.4405 61.0067 93.4405C88.621 93.4405 111 71.0536 111 43.4394C111 24.5825 111 6.1807 111 0V501"
                        />
                    </svg>
                </div>
            </div>
        </React.Fragment>
    );
}
