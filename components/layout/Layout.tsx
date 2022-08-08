import React, { useState } from "react";
import Head from "next/head";
import tw from "twin.macro";
import Sidebar from "./Sidebar";
import Header from "./Header";

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
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main tw="bg-zircon-500">
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
