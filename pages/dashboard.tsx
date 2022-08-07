import dynamic from "next/dynamic";

const DashboardComponent = dynamic(
  () => import("../components/initial/DashboardComponent"),
  {
    ssr: false,
  }
);

export default () => {
  return <DashboardComponent />;
};
