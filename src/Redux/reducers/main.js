// if we want more reducer in future, so we create a main file in which all the reducer are stored as combined reducer

import { combineReducers } from "redux";
import {cartreducer} from "./reducer";

const rootreducer=combineReducers({
    cartreducer
})

export default rootreducer;