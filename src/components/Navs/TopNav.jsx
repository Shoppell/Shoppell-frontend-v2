import React from "react";
import { isEmpty } from "lodash";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";


const TopNav = () => {
    const user = useSelector((state) => state.user);

    return (

 <div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
     
 </div>

        // <nav>
        //     <div className="row">
        //         <div className="col-sm-6 col-xs-12">
        //             <ul>
        //                 <li>
        //                     <NavLink
        //                         to="/"
        //                         exact
        //                         activeStyle={{ color: "white" }}
        //                     >
        //                         {" "}
        //                         صفحه اصلی{" "}
        //                     </NavLink>
        //                     <Link to="/about"> درباره ما </Link>
        //                     <a href=""> تماس با ما </a>
        //                     <Link to="/archive">آرشیو فروشگاه ها</Link>
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="col-sm-6 col-xs-12">
        //             <div className="clientarea">
        //                 {!isEmpty(user) ? (
        //                     <div className="loggein ">
        //                         <i className="zmdi zmdi-account"></i>
        //                         <NavLink to="/user-profile">
        //                             {user.name}
        //                         </NavLink>{" "}
        //                         {user.isAdmin ? (
        //                             <NavLink to="/dashboard">
        //                                 /پنل ادمین
        //                             </NavLink>
        //                         ) : null}
        //                         / <NavLink to="/logout">خروج</NavLink>
        //                     </div>
        //                 ) : (
        //                     <div className="signin ">
        //                         <i className="zmdi zmdi-account"></i>
        //                         <NavLink
        //                             to="/login"
        //                         >
        //                             {" "}
        //                             ورود{" "}
        //                         </NavLink>{" "}
        //                         /
        //                         <NavLink
        //                             to="/register"
        //                         >
        //                             {" "}
        //                             عضویت{" "}
        //                         </NavLink>
        //                     </div>
        //                 )}
        //             </div>
        //         </div>
        //     </div>
        // </nav>
    );
};

export default TopNav;
