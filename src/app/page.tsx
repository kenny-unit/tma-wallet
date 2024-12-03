import Image from "next/image";

import GlobalLayout from "@/src/components/layout/GlobalLayout";

export default function Home() {
  return (
    <GlobalLayout>
      <div className="flex w-full max-w-[400px] flex-col items-center justify-center gap-y-14 px-6">
        <Image
          src="/images/onboarding.svg"
          alt="logo"
          width={350}
          height={150}
        />
        <div className="flex flex-col items-center gap-y-3 text-center">
          <h1 className="text-2xl font-semibold">Welcome to Unit Network</h1>
          <p className="font-inter text-xs text-unit-gray-400">
            Secure your username, deposit crypto, swap assets, and earn
            rewards—start now!
          </p>
        </div>
      </div>
    </GlobalLayout>
  );
}
