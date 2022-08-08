import React from "react";
import tw from "twin.macro";
import BarChart from "./ChartBar";

// Import utilities
import { tailwindConf } from "../utilities/Utils";

const tailwindConfig: any = tailwindConf();

const BarChartModel = () => {
  const chartData = {
    labels: [
      "12-01-2020",
      "01-01-2021",
      "02-01-2021",
      "03-01-2021",
      "04-01-2021",
      "05-01-2021",
    ],
    datasets: [
      // Light blue bars
      {
        label: "Aktif",
        data: [800, 1600, 900, 1300, 1950, 1700],
        backgroundColor: tailwindConfig.theme.colors.blue[400],
        hoverBackgroundColor: tailwindConfig.theme.colors.blue[500],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Blue bars
      {
        label: "Non Aktif",
        data: [4900, 2600, 5350, 4800, 5200, 4800],
        backgroundColor: tailwindConfig.theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig.theme.colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div tw="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-xl border border-gray-200">
      <header tw="px-5 py-4 border-b border-gray-100">
        <h2 tw="font-semibold text-gray-800">Karyawan Aktif</h2>
      </header>
      <BarChart data={chartData} width={595} height={248} />
    </div>
  );
};

export default BarChartModel;
