import dynamic from "next/dynamic";

const LoginComponent = dynamic(
  () => import("../components/initial/LoginComponent"),
  {
    ssr: false,
  }
);

export default () => {
  return <LoginComponent />;
};
