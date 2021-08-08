const defaultState = {
    users: {
        "user1": { id: "user1", fname: "Dev", lname: "D", email: "qwerty@qwe.rty", password: "123456" }
    }
};
const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SignUp_User':
            let id = 'user' + (Object.keys(state.users).length + 1);
            return { ...state, users: { ...state.users, [id]: { ...action.payLoad, id } } };
        case 'SignIn_User':
            return { ...state, "loggedInUserId": action.payLoad };
        case 'Logout_User':
            return { ...state, "loggedInUserId": false };
        default:
            return state;

    }
}


export default userReducer;