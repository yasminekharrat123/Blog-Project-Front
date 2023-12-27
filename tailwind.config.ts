import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

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
            colors: {
                primary: {
                    100: "#F1F2EB",
                    200: "#D8DAD3",
                    300: "#A4C2A5",
                    400: "#566246",
                    500: "#4A4A48",
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
                ...colors,
                neutral: {
                    100: "#FFFFFF",
                    200: "#F4F5F7",
                    300: "#E1E1E1",
                    400: "#737581",
                    500: "#424B53",
                    600: "#000000",
                },
            },
            fontSize: {
                "2xl": "2.9375rem",
                xl: "2.5rem",
                lg: "2.0625rem",
                md: "1.6875rem",
                sm: "1.4375rem",
                xs: "1rem",
                "2xs": "0.75rem",
                "3xs": "0.625rem",
            },
            keyframes: {
                "spin-slow": {
                    "0%": {
                        transform: "rotate(0deg)",
                    },
                    "100%": {
                        transform: "rotate(360deg)",
                    },
                },
                "spin-fast": {
                    "0%": {
                        transform: "rotate(0deg)",
                    },
                    "100%": {
                        transform: "rotate(360deg)",
                    },
                },
                fadeIn: {
                    "0%": {
                        opacity: "0",
                    },
                    "100%": {
                        opacity: "1",
                    },
                },
                fadeOut: {
                    "0%": {
                        opacity: "1",
                    },
                    "100%": {
                        opacity: "0",
                    },
                },
            },
            animation: {
                "spin-slow": "spin 2s linear infinite",
                "spin-fast": "spin 0.5s linear infinite",
                fadeIn: "fadeIn 0.5s ease-in-out",
                fadeOut: "fadeOut 0.5s ease-in-out",
            },
        },
    },
    plugins: [],
};
export default config;
