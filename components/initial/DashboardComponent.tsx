import React, { useEffect } from "react";
import tw from "twin.macro";
import AuthArea, { useCookie } from "../layout/AuthArea";
import Layout from "../layout/Layout";
import AuthServices from "../../services/AuthServices";
import BarChartModel from "../chart/BarChartModel";
import ListView from "../partials/ListView";

const DashboardComponent = () => {
  return (
    <AuthArea>
      <Layout>
        <div tw="w-full flex flex-col justify-center space-y-8">
          <div tw="grid grid-cols-1 sm:grid-cols-4 pt-10 w-full gap-5">
            <div tw="px-8 rounded-xl py-5 bg-white flex sm:justify-center items-center w-full space-x-5">
              <div tw="bg-indigo-500 rounded-full w-[40px] h-[40px] rounded-xl flex justify-center items-center">
                <i className="fa-solid fa-users" tw="text-white text-lg" />
              </div>
              <div tw="flex flex-col">
                <h2 tw="text-gray-500 text-base font-medium font-poppins">
                  Karyawan Aktif
                </h2>
                <h2 tw="text-gray-800 text-base font-bold font-poppins">
                  10.000
                </h2>
              </div>
            </div>
            <div tw="px-8 rounded-xl py-5 bg-white flex sm:justify-center items-center w-full space-x-5">
              <div tw="bg-indigo-500 rounded-full w-[40px] h-[40px] rounded-xl flex justify-center items-center">
                <i className="fa-solid fa-users" tw="text-white text-lg" />
              </div>
              <div tw="flex flex-col">
                <h2 tw="text-gray-500 text-base font-medium font-poppins">
                  Karyawan Aktif
                </h2>
                <h2 tw="text-gray-800 text-base font-bold font-poppins">
                  10.000
                </h2>
              </div>
            </div>
            <div tw="px-8 rounded-xl py-5 bg-white flex sm:justify-center items-center w-full space-x-5">
              <div tw="bg-indigo-500 rounded-full w-[40px] h-[40px] rounded-xl flex justify-center items-center">
                <i className="fa-solid fa-users" tw="text-white text-lg" />
              </div>
              <div tw="flex flex-col">
                <h2 tw="text-gray-500 text-base font-medium font-poppins">
                  Karyawan Aktif
                </h2>
                <h2 tw="text-gray-800 text-base font-bold font-poppins">
                  10.000
                </h2>
              </div>
            </div>
            <div tw="px-8 rounded-xl py-5 bg-white flex sm:justify-center items-center w-full space-x-5">
              <div tw="bg-indigo-500 rounded-full w-[40px] h-[40px] rounded-xl flex justify-center items-center">
                <i className="fa-solid fa-users" tw="text-white text-lg" />
              </div>
              <div tw="flex flex-col">
                <h2 tw="text-gray-500 text-base font-medium font-poppins">
                  Karyawan Aktif
                </h2>
                <h2 tw="text-gray-800 text-base font-bold font-poppins">
                  10.000
                </h2>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div tw="w-[100%]">
              <BarChartModel />
            </div>
            <div tw="w-[100%]">
              <ListView />
            </div>
          </div>
        </div>
      </Layout>
    </AuthArea>
  );
};

export default DashboardComponent;
