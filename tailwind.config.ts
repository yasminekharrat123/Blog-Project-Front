import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
        colors: {
            primary: {
                100: "#F1F2EB",
                200: "#D8DAD3",
                300: "#A4C2A5",
                400: "#566246",
                500: "#4A4A48",
            },
            neutral: {
                100: "#FFFFFF",
                200: "F4F5F7",
                300: "#E1E1E1",
                400: "#737581",
                500: "#424B53",
                600: "#000000",
            },
            success: {
                100: "#329E66",
                200: "#367848",
                300: "#276739",
            },
            warning: {
                100: "#F1C542",
                200: "#DAB23F",
                300: "#B49E35",
            },
            error: {
                100: "#D0454C",
                200: "#B54248",
                300: "#95353A",
            },
        },
        fontSize: {
            "2xl": "47px",
            xl: "40px",
            lg: "33px",
            md: "27px",
            sm: "23px",
            xs: "16px",
        },
    },
    plugins: [],
};
export default config;
