import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "node_modules/flowbite-react/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      height: {
        "100p": "100%",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
