/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#0b618e",
                secondary: "#1e1b2d",
                secondaryHover: "#2a2739"
            }
        }
    },
    plugins: []
};
