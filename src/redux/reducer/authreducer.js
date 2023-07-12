import { LOGOUT_USER, LOGIN_USER } from '../constants/index';

const initialState = {
  user: null,
  isLogin: false,
};

const authreducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        isLogin: true,
        user: action.payload,
      };
    case LOGOUT_USER:
      localStorage.clear();
      return initialState;
    default:
      return state;
  }
};

export default authreducer;
