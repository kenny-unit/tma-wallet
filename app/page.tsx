"use client";

// Next Components
import Image from "next/image";

// Images Path
import onboardingImagePath from "./images/onboarding.svg";

// Fonts
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });

export default function Home() {
  return (
    <>
      <Onboarding />
    </>
  );
}

function Onboarding() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <Image
        src={onboardingImagePath}
        width={352}
        height={155}
        alt="Unit's Logo"
        priority={true}
      />
      <h1 className={`${poppins.className} text-4xl text-center mt-8`}>
        Welcome to <br />
        Unit Network
      </h1>
      <p className={`${inter.className} mx-16 text-center text-gray-400 mt-4`}>
        Secure your username, deposit crypto, swap assets, and earn
        rewards—start now!
      </p>
      <button
        className={`bg-mainPurple ${poppins.className} text-lg text-white text-center w-5/6 h-14 rounded-md transition duration-200 hover:bg-purple-700 mt-8`}
      >
        Get Started
      </button>
    </div>
  );
}
