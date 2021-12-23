import Cookies from "js-cookie";
import * as constants from "../constants";

const INIT_STATE = {
  token: Cookies.get("ROUTES_AUTH_TOKEN"),
  role: Cookies.get("USER_ROLE"),
  loading: false,
  error: null,
};

const auth = (state = INIT_STATE, action) => {
  switch (action.type) {
    case constants.LOGIN_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case constants.LOGIN_USER_SUCCESS:
      return { ...state, token: action.payload.token, role: action.payload.role, loading: false };
    case constants.LOGIN_USER_FAILURE:
      return { ...state, error: action.payload, loading: false };

    case constants.LOGOUT_USER_SUCCESS:
      return { ...state, token: null, loading: false, error: null };

    default:
      return state;
  }
};

export default auth;
