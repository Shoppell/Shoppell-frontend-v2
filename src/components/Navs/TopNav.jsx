import React from "react";
import { isEmpty } from "lodash";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";


const TopNav = () => {
    const user = useSelector((state) => state.user);

    return (

 <div>

<header id="header" className="fixed-top" style={{backgroundColor:"#D6E0F0"}} >
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo" style={{float:"left",marginTop:"1%"}}><a href="index.html">شاپل</a></h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
          <nav id="navbar" className="navbar" style={{margin:"0px"}}>
            <ul>
              <li><a className="active" href="index.html" style={{fontFamily:"Yekan"}}>خانه</a></li>
              <li><a href="our-story.html" style={{fontFamily:"Yekan"}}>درباره ی ما</a></li>
              <li><a href="events.html" style={{fontFamily:"Yekan"}}>ارتباط با ما</a></li>
              <li><a href="gallery.html" style={{fontFamily:"Yekan"}}>فروشگاه ها</a></li>
              <li className="dropdown"><a href="#" style={{fontFamily:"Yekan"}}><span>دسته ها</span> <i className="bi bi-chevron-down" /></a>
                <ul>
                  <li><a href="#" style={{fontFamily:"Yekan"}}>لباس</a></li>
                  <li className="dropdown"><a href="#" style={{fontFamily:"Yekan"}}><span>لوازم برقی</span> <i className="bi bi-chevron-right" /></a>
                    <ul>
                      <li><a href="#" style={{fontFamily:"Yekan"}}>موبایل</a></li>
                      <li><a href="#" style={{fontFamily:"Yekan"}}>تبلت</a></li>
                      <li><a href="#" style={{fontFamily:"Yekan"}}>لپ تاپ</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="contact.html" style={{fontFamily:"Yekan"}}>همکاری با ما</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>{/* .navbar */}
        </div>
      </header>{/* End Header */}
     
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
