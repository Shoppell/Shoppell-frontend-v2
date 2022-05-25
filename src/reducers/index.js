import { combineReducers } from "redux";
import { coursesReducer } from "./courses";
import { courseReducer } from "./course";
import {productReducer} from "./products"
import { userReducer } from "./user";
import { loadingBarReducer } from "react-redux-loading-bar";
import {productListReducer} from "./productList";
import {productDetailsReducer} from "./productDetails";

export const reducers = combineReducers({
    courses: coursesReducer,
    course: courseReducer,
    product : productReducer,
    user: userReducer,
    productList: productListReducer,
    productDetail : productDetailsReducer,
    loadingBar: loadingBarReducer
});
