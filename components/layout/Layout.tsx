import React, { useState } from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import tw from "twin.macro";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <div tw="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div tw="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <main tw="bg-alabaster-500">
            <div tw="h-screen px-4 sm:px-6 lg:px-8 w-full max-w-9xl mx-auto relative">
              {children}
            </div>
          </main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
