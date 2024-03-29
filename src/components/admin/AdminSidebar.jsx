import React from "react";
import { Link, withRouter } from "react-router-dom";

const AdminSidebar = ({ location }) => {
    return (
        <div>
            <ul className="nav navbar-nav side-nav" style={{ height: "100vh", display:"block" }}>
                <li
                    className={
                        location.pathname === "/dashboard" ? "active" : ""
                    }
                >
                    <Link to="/dashboard" style={{fontFamily:"Vazir"}}>
                        <i className="fa fa-fw fa-dashboard"></i> داشبورد
                    </Link>
                </li>

                <li
                    className={
                        location.pathname === "/dashboard/courses"
                            ? "active"
                            : ""
                    }
                >
                    <Link to="/dashboard/courses" style={{fontFamily:"Vazir"}}>
                        <i className="fa fa-fw fa-archive"></i>محصولات
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default withRouter(AdminSidebar);
