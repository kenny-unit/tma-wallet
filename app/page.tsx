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
      <Register />
      {/* <Onboarding /> */}
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
      <Paragraph>
        Secure your username, deposit crypto, swap assets, and earn
        rewards—start now!
      </Paragraph>
      <button
        className={`bg-mainPurple ${poppins.className} text-lg text-white text-center w-5/6 h-14 rounded-md transition duration-200 hover:bg-black mt-12`}
      >
        Get Started
      </button>
    </div>
  );
}

function SmallHeader({ children }: { children: string }) {
  return (
    <h2 className={`${poppins.className} text-3xl text-center mt-8 mx-28`}>
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: string }) {
  return (
    <p className={`${inter.className} mx-16 text-center text-gray-400 mt-4`}>
      {children}
    </p>
  );
}

function Button({ children }: { children: string }) {
  return (
    <button
      className={`bg-mainPurple ${poppins.className} text-lg text-white text-center w-5/6 h-14 rounded-md transition duration-200 hover:bg-black mt-12`}
    >
      {children}
    </button>
  );
}

function Register() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <SmallHeader>Register your unique username</SmallHeader>
      <Paragraph>
        Secure your unique username to represent your identity on Unit Network.
        This will help others find and connect with you.
      </Paragraph>
      <div className="w-full max-w-sm min-w-[200px]">
        <input
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Type here..."
        />
      </div>
      <Button>Next</Button>
    </div>
  );
}
