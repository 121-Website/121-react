module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
        },
        extend: {
            zIndex: {
                60: '60',
                70: '70',
                80: '80',
                90: '90',
                100: '100',
            },
            dropShadow: {
                lg: '0 4px 16px rgba(69, 91, 99, 0.14)',
                '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
                '4xl': [
                    '0 35px 35px rgba(0, 0, 0, 0.25)',
                    '0 45px 65px rgba(0, 0, 0, 0.15)',
                ],
            },
            colors: {
                rosado: '#c886a9',
                indigo: '#1C3D6D',
                celeste: '#8bbcc2',
                amarillo: '#e2ba56',
                verde: '#869d4c',
            },
            strokeWidth: {
                10: '10px',
                20: '20px',
                50: '50px',
                60: '60px',
                70: '70px',
                100: '100px',
            },
            animation: {
                'slide-transition': 'slide-transition 2s ease-in-out forwards',
                'slide-down': 'slide-down 500ms ease-in-out forwards',
                'slide-up': 'slide-up 500ms ease-in-out forwards',
                appear: 'appear 700ms ease-in-out forwards',
                disappear: 'disappear 2s ease-in-out forwards',
                appeardelayed: 'appear 700ms 700ms ease-in-out forwards',
                draw: 'draw 1s 500ms ease-in-out forwards',
                redraw: 'draw 1s 2s ease-in-out alternate infinite ',
                'bounce-x': 'bounce-x 1s ease-in-out infinite',
            },
            keyframes: {
                appear: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                disappear: {
                    '60%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                draw: {
                    to: { strokeDashoffset: 0 },
                },
                redraw: {
                    '0%': { strokeDashoffset: 0 },
                    '25%': { strokeDashoffset: 1500 },
                    '50%': { strokeDashoffset: 0 },
                },
                'slide-down': {
                    '0%': { bottom: '100%' },
                    '100%': { bottom: '0%' },
                },
                'slide-up': {
                    '0%': { bottom: '0%' },
                    '100%': { bottom: '100%' },
                },
                'slide-transition': {
                    '0% , 100%': { bottom: '100%' },
                    '20% , 80% ': { bottom: '0%' },
                },
                'bounce-x': {
                    '0%, 100%': { transform: 'translateX(-5%)' },
                    '50%': { transform: 'translateX(0)' },
                },
            },
            letterSpacing: {
                ultratight: '-0.09em',
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
                display: ['Compressa VF'],
            },
            fontSize: {
                xxs: ['0.65rem', '0.75rem'],
            },

            screens: {
                '3xl': '1921px',
            },
        },
    },
};
