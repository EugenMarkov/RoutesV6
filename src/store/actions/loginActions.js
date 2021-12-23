import * as constants from "../constants";

/**
 * @desc function for auth log in
 * @param {object} user - object with user data
 * @return {{type: string, payload: object}}
 */
export const logInRequest = user => {
  return {
    type: constants.LOGIN_USER_REQUEST,
    payload: user,
  };
};

/**
 * @desc function for successful auth log in
 * @param {string} token - user token
 * @param {string} role - user role
 * @return {{type: string, payload: object}}
 */
export const logInSuccess = (token,  role) => {
  return {
    type: constants.LOGIN_USER_SUCCESS,
    payload: { token, role },
  };
};

/**
 * @desc function for failed auth log in
 * @param {object} error - object with error
 * @return {{type: string, payload: object}}
 */
export const logInFailure = error => {
  return {
    type: constants.LOGIN_USER_FAILURE,
    payload: error,
  };
};

/**
 * @desc function for successful auth log out
 * @return {{type: string}}
 */
export const logOutSuccess = () => {
  return {
    type: constants.LOGOUT_USER_SUCCESS,
  };
};
