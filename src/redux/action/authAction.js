import { LOGOUT_USER, LOGIN_USER } from "../constants";

export const loginUser = (user) => {
    return{
        type: LOGIN_USER,
        payload : user
    }
}

export const logout = () => {
    return{
        type: LOGOUT_USER,
    }
}