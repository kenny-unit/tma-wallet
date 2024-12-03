import { Inter, Lato, Poppins } from "next/font/google";

export const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

export const lato = Lato({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
    variable: "--font-lato",
});

export const inter = Inter({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-inter",
});
