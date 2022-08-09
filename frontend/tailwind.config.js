module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            primary: "#14141c",
            primaryDark: "#0a0a12",
            secondary: "#0e79b2",
            secondaryDark: "#09547c",
            tertiary: "#191923",
            tertiaryDark: "#0a0a12",
            gray: "#252525",
            black: "#000000",
            white: {
                DEFAULT: "#ffffff",
                100: "#f5f5f5",
                200: "#e6e6e6",
                500: "#cccccc"
            }
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "2rem",
                sm: "4rem",
                lg: "8rem",
                xl: "12rem",
                "2xl": "18rem"
            }
        }
    },
    plugins: []
};
