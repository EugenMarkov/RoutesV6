import Cookies from "js-cookie";

import { put, take, fork, all } from "redux-saga/effects";
import * as constants from "./../constants";
import { logInSuccess, logInFailure } from "../actions/";

/**
 * @desc function generator - request for auth log in
 * @param {object} user - user data
 */
export function* fetchUserLogin(user) {
  try {
    const roles = {
      ADMIN: "ADMIN",
      OWNER: "OWNER",
    };
    const role = roles[user.login.toUpperCase()] || "USER";
    yield put(logInSuccess("token", role));
    Cookies.set("ROUTES_AUTH_TOKEN", `Bearer token`, {
      expires: 1,
      sameSite: "strict",
      secure: true,
    });
    Cookies.set("USER_ROLE", role, {
      expires: 1,
      sameSite: "strict",
      secure: true,
    });
  } catch (error) {
    yield put(logInFailure(error));
  }
}

/**
 * @desc function generator - observer for auth log in
 */
export function* userLogInFlow() {
  while (true) {
    const { payload } = yield take(constants.LOGIN_USER_REQUEST);
    yield fork(fetchUserLogin, payload);
  }
}

/**
 * @desc function generator - observer for success log out action
 */
export function* watchLogOutFlow() {
  while (true) {
    yield take(constants.LOGOUT_USER_SUCCESS);
    Cookies.remove("USER_ROLE");
    Cookies.remove("ROUTES_AUTH_TOKEN");
  }
}

/**
 * @desc function generator - observer for all login saga functions
 */
export function* watchUserAuth() {
  yield all([fork(userLogInFlow), fork(watchLogOutFlow)]);
}
