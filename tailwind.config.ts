import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'var(--font-poppins)',
        lato: "var(--font-lato)",
        inter: "var(--font-inter)",
      },
      colors: {
        unit: {
          gray: {
            '100': '#f8f9fc',
            '200': '#e5e5ea',
            '300': '#c7c7cc',
            '400': '#8e8e93',
            '500': '#666668',
            '600': '#48484a',
            '700': '#3A3A3C',
            '800': '#2c2c2e',
            '900': '#1c1c1c'
          },
          purple: {
            '100': '#F3EFFD',
            '200': '#9D85FF',
            '400': '#6a45ff',
            '600': '#4b1fff'
          },
          blue: {
            '100': '#C4ECFF',
            '200': '#A7E3FF',
            '400': '#5db9eb',
            '600': '#2fadeb'
          },
          turquoise: {
            '100': '#E0F7F4',
            '200': '#bde1dd',
            '400': '#85e1cb',
            '600': '#29ccb4'
          },
          midnight: {
            '100': '#F6F7FE',
            '200': '#D7D8EF',
            '400': '#797BA4',
            '600': '#35364B'
          },
          red: {
            '100': '#FFDFDF',
            '200': '#FC9999',
            '400': '#F15C59',
            '600': '#E52424'
          },
          orange: {
            '100': '#FFE9D6',
            '200': '#FFC799',
            '400': '#FF8800',
            '600': '#E06500'
          },
          yellow: {
            '100': '#FFF8CA',
            '200': '#FEEC73',
            '400': '#FEE645',
            '600': '#FEDD00'
          },
          green: {
            '100': '#D6F3E0',
            '200': '#A3E4C5',
            '400': '#51C28B',
            '600': '#1FA96C'
          }
        }
      },
      boxShadow: {
        'card': '0px 0px 8px 0px #30313514',
      },
    }
  },
  plugins: [tailwindcssAnimate],
};
export default config;
