export const SIGNIN_USER = 'SignIn_User';

// export const signInUser = (email, password) => ({ type: SIGNIN_USER, payLoad: { email, password } })
export const signInUser = (userId) => ({ type: SIGNIN_USER, payLoad: userId })