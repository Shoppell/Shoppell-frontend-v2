import React, {Fragment, useEffect, useState} from "react";
import Pagination from "../common/Pagination";
import { useSelector, useDispatch } from "react-redux";
import ShowImage from "./../common/ShowImage";
import {getProductsAndShop} from "../../actions/products";
import {store} from "../../store";
import ProductS from "../shops/products"
import {paginate} from "../../utils/paginate";

const SingleCourse = ({ match }) => {

    useEffect(() => {
        // if (courseIdValidator(match.params.id))
        store.dispatch(getProductsAndShop(match.params.slug));
    },[]);

    const shop = useSelector(state => state.product);
    console.log(shop.name);
    const [perPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const slug = match.params.slug;
    console.log(slug);
    const handlePageChange = page => {
        setCurrentPage(page);
    };

    // const archiveProducts = paginate(product, currentPage, perPage);
    // console.log(archiveProducts)

    // if (!courseIdValidator(match.params.id)) return <Redirect to="/404" />;


    return (
        <Fragment>
            <section className="term-content">
                <header>
                    <h1>خانه/{shop.name}</h1>
                </header>
                <div className="row">
                    <aside className="col-md-4 col-sm-12 col-xs-12 pull-right">
                        {/*<div className="statistics">*/}
                        {/*    <ul>*/}
                        {/*        <li>*/}
                        {/*            <span> مدت دوره </span>*/}
                        {/*            <i> 03:12:52 </i>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <span> تعداد ویدیوها </span>*/}
                        {/*            <i> 16 </i>*/}
                        {/*        </li>*/}
                        {/*        <li>*/}
                        {/*            <span> تعداد دانشجوها </span>*/}
                        {/*            <i> 52 نفر </i>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}

                        {/*    <a href=""> شرکت در دوره : 450.000 تومان </a>*/}
                        {/*</div>*/}

                        <article className="teacher-info">
                            <ShowImage image={shop.image} />
                            <h2> {shop.name} </h2>
                            <p>
                                {shop.description}
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
                            <ShowImage image= {shop.cover} />
                        </section>
                        <div className="row">
                        <ProductS slug={slug}/>
                        </div>
                        {/*<Pagination*/}
                        {/*    totalCourse={product.length}*/}
                        {/*    currentPage={currentPage}*/}
                        {/*    perPage={perPage}*/}
                        {/*    onPageChange={handlePageChange}*/}
                        {/*/>*/}
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
