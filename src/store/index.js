import { createStore, compose, applyMiddleware } from "redux";
import { reducers } from "./../reducers/index";
import thunk from "redux-thunk";
import {getAllCourses, getAllShops} from "./../actions/courses";
import { loadingBarMiddleware } from "react-redux-loading-bar";

export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk, loadingBarMiddleware())
    )
);

//Initialize
// store.dispatch(getAllShops());

//subscribe
// store.subscribe(() => console.log(store.getState()));
