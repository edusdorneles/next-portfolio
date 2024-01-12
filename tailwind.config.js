/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#2E5EAA",
                primaryHover: "#2E5EAA90",
                secondary: "#2a323c",
                secondaryHover: "#2a323c90"
            }
        }
    },
    plugins: []
};
