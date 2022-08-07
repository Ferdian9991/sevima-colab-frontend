/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useRef } from "react";
import tw from "twin.macro";
import { css } from "@emotion/react";
import Link from "next/link";
import { useRouter } from "next/router";
import UserIcon from "../../public/images/user-clear.png";

type MenuTypes = {
  link: string;
  icon: string;
  label: string;
  roles: ArrayBuffer;
  isActive(router: any, link: string): boolean;
};

const linkPathname = (router: any, link: string) => {
  let result = router.pathname.indexOf(link) >= 0;
  return result;
};

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState<any>(
    storedSidebarExpanded === null ? true : storedSidebarExpanded === "true"
  );

  const listMenu: any = [
    {
      link: "/dashboard",
      icon: "fa fa-home",
      label: "Dashboard",
      roles: ["Teacher", "Student", "Parent"],
      isActive: linkPathname,
    },
    {
      link: "/whatsapp-devices",
      icon: "fa-solid fa-mobile-screen",
      label: "Whatsapp Devices",
      roles: ["Teacher", "Student", "Parent"],
      isActive: linkPathname,
    },
  ];

  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector<any>("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector<any>("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div tw="px-3">
      <div
        id="sidebar"
        ref={sidebar}
        tw="bg-white flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto 2xl:!w-64 flex-shrink-0 p-4 w-64 lg:w-20 h-screen overflow-y-auto lg:overflow-y-auto transform transition-all duration-200 ease-in-out lg:translate-x-0"
        className={`no-scrollbar lg:sidebar-expanded:!w-64`}
        css={{
          transform: sidebarOpen ? "translateX(0rem)" : "translateX(-16rem)",
        }}
      >
        <div tw="flex justify-between mb-10 pr-3 sm:px-3 pt-5">
          <button
            ref={trigger}
            tw="lg:hidden text-white"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span tw="sr-only">Close sidebar</span>
            <svg
              tw="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>

          <Link href="/">
            <div tw="block">
              <img src={UserIcon.src} width="25" height="25"></img>
            </div>
          </Link>
        </div>

        <div tw="space-y-8">
          <div>
            <h3 tw="text-xs uppercase text-white font-semibold pl-3">
              <span
                className="lg:sidebar-expanded:hidden"
                tw="hidden lg:block 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              <span
                className="lg:sidebar-expanded:block"
                tw="lg:hidden 2xl:block text-gray-600"
              >
                Menu
              </span>
            </h3>

            <ul tw="mt-3">{menuRenderer({ subMenu: listMenu })}</ul>
          </div>
        </div>

        <div tw="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div tw="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span tw="sr-only">Expand / collapse sidebar</span>
              <svg
                className="sidebar-expanded:rotate-180"
                tw="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path
                  tw="text-gray-600"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path tw="text-gray-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const menuRenderer = ({ subMenu }: { subMenu: [] }) => {
  const router = useRouter();
  return subMenu.map((menu: MenuTypes, i) => {
    let active = menu.isActive && menu.isActive(router, menu.link);
    return (
      <li
        key={i}
        tw="px-3 py-[5px] cursor-pointer rounded-sm mb-2 last:mb-0"
        css={[active && tw`bg-indigo-500 rounded-lg`]}
      >
        <Link href={menu.link}>
          <div tw="block text-gray-200 hover:text-white truncate transition duration-150">
            <div tw="flex items-center">
              <i
                className={menu.icon}
                tw="flex-shrink-0 w-6 text-xl"
                css={[active ? tw`text-white` : tw`text-gray-600`]}
              ></i>
              <span
                className="lg:sidebar-expanded:opacity-100"
                tw="text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200"
                css={[active ? tw`text-white` : tw`text-gray-600`]}
              >
                {menu.label}
              </span>
            </div>
          </div>
        </Link>
      </li>
    );
  });
};

export default Sidebar;
