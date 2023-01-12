const UIButton = ({
    className,
    disabled = false,
    onClick,
    children,
    secondary = false,
}) => {
    return (
        <button
            disabled={disabled}
            className={`lg:w-auto tracking-tight shrink-0 relative  h-[36px] items-center text-[14px] font-bold transition-all duration-700 hover:bg-primary-700 px-4 rounded 
            ${
                secondary
                    ? disabled
                        ? 'bg-secondary-300 text-secondary-700'
                        : 'border-primary hover:shadow-xl hover:bg-primary hover:text-white border hover:animate-pulse bg-secondary-500 text-primary'
                    : disabled
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'hover:shadow-xl hover:animate-pulse bg-primary text-white'
            }
                     ${className}`}
            onClick={onClick !== '' ? onClick : null}>
            {children}
        </button>
    );
};

export default UIButton;
