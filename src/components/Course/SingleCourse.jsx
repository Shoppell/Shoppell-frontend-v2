import React, { Fragment, useEffect } from "react";
import Pagination from "../common/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { getSingleCourse } from "./../../actions/course";
import ShowImage from "./../common/ShowImage";
import {getProducts} from "../../actions/products";

const SingleCourse = ({ match }) => {
    const course = useSelector(state => state.course);
    const dispatch = useDispatch();
    const products = getProducts(course.slug);

    useEffect(() => {
        // if (courseIdValidator(match.params.id))
            dispatch(getSingleCourse(match.params.id));
    }, []);

    // if (!courseIdValidator(match.params.id)) return <Redirect to="/404" />;


    return (
        <Fragment>
            <section className="term-content">
                <header>
                    <h1>{course.title}</h1>
                </header>
                <div className="row">
                    <aside className="col-md-4 col-sm-12 col-xs-12 pull-right">
                        <div className="statistics">
                            <ul>
                                <li>
                                    <span> مدت دوره </span>
                                    <i> 03:12:52 </i>
                                </li>
                                <li>
                                    <span> تعداد ویدیوها </span>
                                    <i> 16 </i>
                                </li>
                                <li>
                                    <span> تعداد دانشجوها </span>
                                    <i> 52 نفر </i>
                                </li>
                            </ul>

                            <a href=""> شرکت در دوره : 450.000 تومان </a>
                        </div>

                        <article className="teacher-info">
                            <img src="../images/pic/avatar.jpg" />
                            <h2> اسم فروشگاه انیجا </h2>
                            <p>
                                اطلاعات فروشگاه میاد اینجا
                            </p>
                        </article>

                        <div className="share-layer">
                            <span> به اشتراک گذاری </span>
                            <a href="">
                                <i className="zmdi zmdi-facebook"></i>
                            </a>
                            <a href="">
                                <i className="zmdi zmdi-google-old"></i>
                            </a>
                            <a href="">
                                <i className="zmdi zmdi-twitter"></i>
                            </a>
                            <a href="">
                                <i className="zmdi zmdi-linkedin"></i>
                            </a>
                        </div>

                        <div className="tags-layer">
                            <a href=""> تگ ها  </a>

                        </div>
                    </aside>
                    <div className="col-md-8 col-sm-12 col-xs-12 pull-left">
                        <section className="term-description">
                            <ShowImage image={course.image} />

                            <p>{course.info}</p>

                        </section>
                        {/*<ProductS courses={}/>*/}
                        <section className="user-comments">
                            <header>
                                <h3> نظرات کاربران </h3>
                            </header>
                            <div className="inner">
                                <form>
                                    <div className="row">
                                        <div className="col-md-4 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="نام و نام خانوادگی"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="ایمیل"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="شماره تماس"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-8 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="متن نظر"
                                                ></textarea>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-8 col-sm-7 col-xs-7">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="کد امنیتی"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-sm-5 col-xs-5">
                                                    <img src="../images/captcha.jpg" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12">
                                            <button
                                                type="submit"
                                                className="btn btn-success"
                                            >
                                                {" "}
                                                ثبت دیدگاه{" "}
                                            </button>
                                        </div>
                                    </div>
                                </form>

                                <div className="comment-list">
                                    <div className="comment-row">
                                        <img src="../images/pic/avatar.jpg" />
                                        <div className="left-col">
                                            <h3> میترا رحیمی </h3>
                                            <span>12/03/1397</span>
                                            <p>
                                                لورم ایپسوم متن ساختگی با تولید
                                                سادگی نامفهوم از صنعت چاپ و با
                                                استفاده از طراحان گرافیک است.
                                                چاپگرها و متون بلکه روزنامه و
                                                مجله در ستون و سطرآنچنان که لازم
                                                است
                                            </p>
                                        </div>
                                    </div>

                                    <div className="comment-row">
                                        <img src="../images/pic/avatar.jpg" />
                                        <div className="left-col">
                                            <h3> میترا رحیمی </h3>
                                            <span>12/03/1397</span>
                                            <p>
                                                لورم ایپسوم متن ساختگی با تولید
                                                سادگی نامفهوم از صنعت چاپ و با
                                                استفاده از طراحان گرافیک است.
                                                چاپگرها و متون بلکه روزنامه و
                                                مجله در ستون و سطرآنچنان که لازم
                                                است
                                            </p>
                                        </div>
                                    </div>

                                    <div className="comment-row">
                                        <img src="../images/pic/avatar.jpg" />
                                        <div className="left-col">
                                            <h3> میترا رحیمی </h3>
                                            <span>12/03/1397</span>
                                            <p>
                                                لورم ایپسوم متن ساختگی با تولید
                                                سادگی نامفهوم از صنعت چاپ و با
                                                استفاده از طراحان گرافیک است.
                                                چاپگرها و متون بلکه روزنامه و
                                                مجله در ستون و سطرآنچنان که لازم
                                                است
                                            </p>
                                        </div>
                                    </div>

                                    <div className="comment-row">
                                        <img src="../images/pic/avatar.jpg" />
                                        <div className="left-col">
                                            <h3> میترا رحیمی </h3>
                                            <span>12/03/1397</span>
                                            <p>
                                                لورم ایپسوم متن ساختگی با تولید
                                                سادگی نامفهوم از صنعت چاپ و با
                                                استفاده از طراحان گرافیک است.
                                                چاپگرها و متون بلکه روزنامه و
                                                مجله در ستون و سطرآنچنان که لازم
                                                است
                                            </p>
                                        </div>
                                    </div>

                                    <div className="comment-row">
                                        <img src="../images/pic/avatar.jpg" />
                                        <div className="left-col">
                                            <h3> میترا رحیمی </h3>
                                            <span>12/03/1397</span>
                                            <p>
                                                لورم ایپسوم متن ساختگی با تولید
                                                سادگی نامفهوم از صنعت چاپ و با
                                                استفاده از طراحان گرافیک است.
                                                چاپگرها و متون بلکه روزنامه و
                                                مجله در ستون و سطرآنچنان که لازم
                                                است
                                            </p>
                                        </div>
                                    </div>

                                    <Pagination />
                                </div>
                            </div>
                        </section>
                    </div>


                </div>
            </section>
        </Fragment>
    );
};

export default SingleCourse;
