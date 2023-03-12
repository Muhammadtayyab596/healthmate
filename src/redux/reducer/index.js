
import { combineReducers } from "redux";

import authreducer from "./authreducer";

const rootReducer = combineReducers({
    authreducer,
});

export default rootReducer;