import { legacy_createStore as createStore} from "redux";
import rootreducer from "./Redux/reducers/main";

const store=createStore(
    rootreducer
)

export default store;