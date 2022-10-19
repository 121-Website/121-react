import { useState } from 'react';

export default function UIBurguerIcon({ className, onClick  }) {
    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-gray-700 transition ease transform duration-300`;
    const lastHamburgerLine = `h-1 my-1 rounded-full bg-gray-700 transition ease transform duration-300`;

    return (
        <button
            className={`flex flex-col items-start justify-center w-12 h-12 border-2 border-none rounded group ${className}`}
            onClick={() => {
                setIsOpen(!isOpen);
                onClick();
            }}>
            <div
                className={`${genericHamburgerLine} ${
                    isOpen
                        ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
                        : 'opacity-50 group-hover:opacity-100'
                }`}
            />
            <div
                className={`${genericHamburgerLine} ${
                    isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
                }`}
            />
            <div
                className={`${lastHamburgerLine} ${
                    isOpen
                        ? '-rotate-45 w-8 -translate-y-3 opacity-50 group-hover:opacity-100'
                        : 'opacity-50 w-6 group-hover:opacity-100'
                }`}
            />
        </button>
    );
}
