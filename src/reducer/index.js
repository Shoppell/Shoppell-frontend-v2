import { combineReducers } from "redux";
import {ShopAdminReducer} from "./courses";
import { loadingBarReducer } from "react-redux-loading-bar";
import {productListReducer} from "./productList";
import {userReducer} from "./user";
import {ShopListReducer} from "./shopList";
import {ShopDetailsReducer} from "./shopDetails";


export const reducers = combineReducers({
    shopAdmin: ShopAdminReducer,
    productList: productListReducer,
    user: userReducer,
    shopList: ShopListReducer,
    shopDetails : ShopDetailsReducer,
    loadingBar: loadingBarReducer
});
