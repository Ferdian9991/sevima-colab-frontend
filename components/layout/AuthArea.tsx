import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts: any = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  else return null;
};

type AuthAreaTypes = {
  children?: React.ReactNode;
  preventRole?: [];
};

const AuthArea = ({ children }: AuthAreaTypes) => {
  const router = useRouter();
  const loggedUser = useSelector((state: any) => state.creds.userLogin);
  const isLoggedInUser = isLoggedIn(loggedUser);

  if (isLoggedInUser) {
    return <React.Fragment>{children}</React.Fragment>;
  } else {
    router.replace("/");
    return <React.Fragment></React.Fragment>;
  }
};

export default AuthArea;

export const isLoggedIn = (user: any) => {
  const cookieToken = getCookie("api_token");
  if (!Boolean(user) || cookieToken === null) {
    return false;
  } else {
    return true;
  }
};

export const useCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts: any = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  else return null;
};
