import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
// import useWindowDimensions from "../hooks/useWindowDimensions";

export default function UIProjectGridCell({ project, id }) {
    // const { height, width } = useWindowDimensions();
    const [hover, setHover] = useState(false);
    const [destroy, setDestroy] = useState(false);


    function Destroyer() { setDestroy(true); setTimeout(function () { setHover(false); }, 1000); }
    function Creator() { setDestroy(false); setHover(true); }

    return (
        <Link to={`/trabajo/${project.route}`} className="text-sm font-black text-indigo md:text-lg hover:text-rosado ">
            <div className="bg-white md:pb-6">
                <div onMouseEnter={Creator} onMouseLeave={Destroyer} className="relative flex w-full overflow-hidden transition-all duration-1000 transform bg-center bg-cover aspect-video" style={{ backgroundImage: `url(${project.cover})` }}>
                    {hover ?
                        <div className={`h-full hidden md:block min-w-full absolute overflow-hidden transition-all ${destroy ? "opacity-0" : "kgdm-appear"}`} >
                            <video autoPlay loop muted src={project.videopreview} />
                        </div>
                        : null
                    }
                </div>
                <div className="flex-col hidden md:flex md:flex-row">
                    <div className="flex flex-col flex-grow gap-4 pt-6 bg-white pb-7">
                        <div className="lg:text-[27px] font-bold tracking-tighter lg:leading-8 md:leading-6 text-brown md:text-[20px]">
                            <ReactMarkdown className="" children={project.descriptionwork} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
