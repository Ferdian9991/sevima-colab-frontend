import { Dispatch } from "redux";
import cookie from "cookie";
import ms from "ms";

export const logIn =
  (payload: Object, response: any) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      let maxAge = ms("1d") / 1000;
      const { data } = response;

      document.cookie = cookie.serialize("api_token", data?.api_token || "", {
        maxAge,
        path: "/",
      });

      dispatch({
        type: "LOGIN_SUCCESS",
        payload,
        response: data,
      });
    } catch (e) {
      throw {
        e,
      };
    }
  };

export const userLogin =
  () =>
  (dispatch: Dispatch): Object => {
    return {};
  };

export const logout =
  () =>
  (dispatch: Dispatch): void => {
    document.cookie = cookie.serialize("token", "", {
      maxAge: -1, // Expire the cookie immediately
      path: "/",
    });
    window.localStorage.clear();
    dispatch({
      type: "LOGOUT",
    });
  };
