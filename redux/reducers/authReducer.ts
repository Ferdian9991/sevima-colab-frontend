type InitialStateType = {
  isLoggedIn: boolean;
  userLogin: any;
};

const initialState: InitialStateType = {
  isLoggedIn: false,
  userLogin: null,
};

type ActionType = {
  type: string;
  payload: Object;
  response: Object;
};

const auth = (state = initialState, action: ActionType) => {
  const { type, payload, response } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        userLogin: response,
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        isLoggedIn: false,
        userLogin: null,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        userLogin: null,
      };
    default:
      return state;
  }
};

export default auth;
