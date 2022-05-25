import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import Header from "./../common/Header";
import Footer from "./../common/Footer";
import { Helmet } from "react-helmet";
import LoadingBar from "react-redux-loading-bar";
import TopNav from "../Navs/TopNav";

const MainLayout = (props) => {
    const { pathname } = props.location;
    return (
        <Fragment>
            <Helmet>
                <title>شاپل</title>
            </Helmet>
            <div>
                <LoadingBar
                    style={{ backgroundColor: "lime", height: "5px" }}
                />
                <div>
                    <TopNav />
                    {pathname === "/" ? <Header /> : null}
                </div>
            </div>

            <main id="home-page">
                <div className="container">{props.children} </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default withRouter(MainLayout);
