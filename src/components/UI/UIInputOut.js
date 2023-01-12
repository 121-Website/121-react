import { useState } from 'react';

const UIInputOut = ({
    label,
    int = false,
    initialValue = '',
    disabled = false,
    className,
    suffix = null,
    placeholder = '',
    handleChange,
}) => {
    const [value, setValue] = useState(initialValue);
    const [onFocus, setOnFocus] = useState(false);

    const onChange = (e) => {
        setValue(e.target.value);
        handleChange(e.target.value);
    };

    return (
        <div className={`flex  w-full flex-col gap-1 ${className}`}>
            <label className="text-xxs font-bold text-[#535353] tracking-tight">
                {label}
            </label>
            <div className="relative h-[34px] flex">
                {onFocus && (
                    <div className="absolute w-full h-full animate-pulse blur-sm bg-primary-100"></div>
                )}
                <div className={`absolute flex w-full h-full bg-white rounded`}>
                    {suffix && <div className='absolute text-xxs left-2 top-3'>{suffix}</div>}
                    <input
                        onFocus={() => setOnFocus(true)}
                        onBlur={() => setOnFocus(false)}
                        className={`p-4 text-xs ${int && 'text-right'}
                        ${
                            disabled
                                ? 'text-slate-400 cursor-not-allowed bg-slate-200 border-slate-200 border'
                                : 'bg-white'
                        } w-full outline-none transition-all rounded `}
                        type={int ? 'number' : 'text'}
                        value={value}
                        disabled={disabled}
                        placeholder={initialValue ? initialValue : placeholder}
                        onChange={onChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default UIInputOut;
