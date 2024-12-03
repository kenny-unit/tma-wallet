import * as React from "react";

interface GlobalLayoutProps {
  children: React.ReactNode;
}

const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
  return (
    <main className="flex min-h-dvh w-full flex-col items-center justify-center overflow-x-hidden bg-unit-gray-100 font-poppins">
      {children}
    </main>
  );
};

export default GlobalLayout;
