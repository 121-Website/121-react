export default function UIServiceGridCell({ service, id, color }) {

    return (
        <div className={`flex flex-col break-inside-avoid md:mb-6 flex-grow gap-0 px-10 py-6 lg:py-16 lg:px-10 sm:px-5 sm:py-3 md:px-10 md:py-6 text-indigo`}
            style={{ backgroundColor: service.color, color: service.textcolor }}>
            <div className="lg:text-[36px] font-bold tracking-tight md:text-[24px] ">{service.name}</div>
            <div className="lg:text-[24px] lg:pt-4 md:pt-2 md:leading-tight lg:leading-6 md:w-4/5 ">{service.description}</div>
        </div>
    );
}
