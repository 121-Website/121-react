export default function UITalentGridCell({ talent, id }) {

    return (
        <div className="pb-6 bg-white">
            <div className="relative flex w-full md:h-5/6 h-[200px] overflow-hidden transition-all duration-1000 transform md:bg-center bg-cover hover:scale-105 aspect-square" style={{ backgroundImage: `url(${talent.image})` }}>
            </div>
            <div className="flex flex-col mx-4 md:flex-row">
                <div className="flex flex-col flex-grow gap-0 pt-3 bg-white">
                    <div className="text-[20px] font-bold tracking-tight md:text-[20px] text-indigo ">{talent.name}</div>
                    <div className="text-[20px] tracking-tight md:text-[20px] text-indigo ">{talent.charge}</div>
                </div>
            </div>
        </div>
    );
}
