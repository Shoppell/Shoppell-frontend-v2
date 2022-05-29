import React from "react";
import { isEmpty } from "lodash";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";


const TopNav = () => {
    const user = useSelector((state) => state.user);

    return (
        <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title" style={{float:"left"}}>
            شاپل
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span />
            <span />
            <span />
          </label>
        </div>
        <div className="nav-links">
          <NavLink to="/">خانه</NavLink>
          <NavLink to="/about">درباره ی ما</NavLink>
          <NavLink to="/archive">فروشگاه ها</NavLink>
          <a href="#" target="_blank">کالا ها</a>
          <NavLink to="/dashboard">داشبورد</NavLink>
          <NavLink to="/login">ورود</NavLink>
          <NavLink to="/register">ساخت فروشگاه</NavLink>
        </div>
      </div>

    );
};

export default TopNav;
