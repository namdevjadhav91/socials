export const LOGOUT_USER = 'Logout_User';

export const logoutUser = (userId) => ({ type: LOGOUT_USER, payLoad: userId })