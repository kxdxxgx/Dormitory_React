/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx,tx,tsx,css}', './node_modules/react-tailwindcss-datepicker/dist/index.esm.js'],
    theme: {
        extend: {
            spacing: {
                1: '0.25rem'
            }
        }
    },
    variants: {},
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.mt-0': {
                    marginTop: '0rem !important'
                },
                '.mt-1': {
                    marginTop: '0.25rem !important'
                },
                '.mt-2': {
                    marginTop: '0.5rem !important'
                },
                '.mt-24': {
                    marginTop: '6rem !important'
                },
                '.mt-36': {
                    marginTop: '9rem !important'
                },
                '.bg-gray-100': {
                    backgroundColor: 'rgb(243 244 246) !important'
                },
                '.outline-none': {
                    outline: 'none !important'
                },
                '.p-4': {
                    padding: '1rem !important'
                },
                '.mb-48': {
                    marginBottom: '12rem !important'
                },
                '.p-10': {
                    padding: '2.5rem !important'
                },
                '.p-12': {
                    padding: '3rem !important'
                },
                '.pb-12': {
                    paddingBottom: '3rem !important'
                },
                '.h-112': {
                    height: '28rem !important'
                },
                '.justify-start': {
                    justifyContent: 'flex-start !important'
                }
            }
            addUtilities(newUtilities)
        }
    ]
}
