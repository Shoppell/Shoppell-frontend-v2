import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout";
import UserContext from "../components/context/userContext";
import Login from "../components/Login/Login";
import Register from "./../components/Register/Register";
import Archive from "./../components/Course/Archive";
import SingleCourse from "./../components/Course/SingleCourse";
import UserProfile from "./../components/Profile/UserProfile";
import { useSelector, useDispatch } from "react-redux";
import { paginate } from "./../utils/paginate";
import { addUser, clearUser } from "./../actions/user";
import { decodeToken } from "./../utils/decodeToken";
import Logout from "./../components/Login/Logout";
import { isEmpty } from "lodash";
import NotFound from "./../components/common/NotFound";
import PrivateLayout from "../components/Layouts/PrivateLayout";
import Dashboard from "../components/admin/Dashboard";
import CourseTable from "../components/admin/CourseTable";
import AdminContext from "../components/context/AdminContext";
import Verify from "../components/Login/verify";
import ProductS from "../components/shops/products";
import About_us from "../components/about/about_us";
import productD from "../components/shops/productD";
import Home from "../components/home/home";
import {store} from "../store";
import {getAdminListProduct} from "../actions/courses";

const Toplearn = () => {

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    // const indexCourses = paginate(courses, 1, 8);
    // console.log(courses)

    useEffect(() => {
        if (token) {
            const decodedToken = decodeToken(token);
            const dateNow = Date.now() / 1000;

            if (decodedToken.payload.exp < dateNow) {
                dispatch(clearUser());
            } else dispatch(addUser(decodedToken.payload.user));
        }
    }, []);

    return (
        <Switch>
            <Route path={["/dashboard"]}>
                <PrivateLayout>
                    <Route
                        path="/dashboard/courses"
                        render={() =>
                            !isEmpty("سی") ? (
                                <AdminContext>
                                    <CourseTable />
                                </AdminContext>
                            ) : (
                                <Redirect to="/" />
                            )
                        }
                    />
                    <Route
                        path="/dashboard"
                        exact
                        render={() =>
                            !isEmpty("سیسی") ? (
                                <Dashboard/>
                            ) : (
                                <Redirect to="/" />
                            )
                        }
                    />
                </PrivateLayout>
            </Route>
            <Route path={["/"]}>
                <MainLayout>
                    <Switch>
                        <Route
                            path="/verify"
                            render={() =>
                                    !isEmpty("sd") ? (
                                    <UserContext>
                                        <Verify />
                                    </UserContext>
                                ) : (
                                    <Redirect to="/login" />
                                )
                            }
                        />
                        <Route
                            path="/login"
                            render={() =>
                                isEmpty(user) ? (
                                    <UserContext>
                                        <Login />
                                    </UserContext>
                                ) : (
                                    <Redirect to="/" />
                                )
                            }
                        />
                        <Route
                            path="/logout"
                            render={() =>
                                isEmpty(user) ? <Redirect to="/" /> : <Logout />
                            }
                        />
                        <Route
                            path="/register"
                            render={() =>
                                isEmpty(user) ? (

                                <UserContext>
                                        <Register />
                                    </UserContext>
                                ) : (
                                    <Redirect to="/" />
                                )
                            }
                        />
                        <Route path="/archive" component={Archive} />
                        <Route path="/course/:slug" component={SingleCourse} />
                        <Route path="/product/:slug/:id" component={productD}/>
                        <Route path="/shop1" component={ProductS} />
                        <Route path="/about" component={About_us} />
                        <Route path="/user-profile" component={UserProfile} />
                        <Route path="/product-di" component={productD}/>
                        <Route path="/" component={Home}/>
                        {/*<Route*/}
                        {/*    path="/"*/}
                        {/*    exact*/}
                        {/*    render={() =>*/}
                        {/*        indexCourses.length > 0 ? (*/}
                        {/*            // <home/>*/}
                        {/*            <Course courses={indexCourses} />*/}
                        {/*        ) : (*/}
                        {/*            <h2*/}
                        {/*                style={{*/}
                        {/*                    textAlign: "center",*/}
                        {/*                    margin: "2em",*/}
                        {/*                }}*/}
                        {/*            >*/}
                        {/*                محصولی یافت نشد*/}
                        {/*            </h2>*/}
                        {/*        )*/}
                        {/*    }*/}
                        {/*/>*/}
                        <Route path="*" exact component={NotFound} />
                    </Switch>
                </MainLayout>
            </Route>
        </Switch>
    );
};

export default Toplearn;
