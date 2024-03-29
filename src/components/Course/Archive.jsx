import React, {useEffect, useState} from "react";
import Pagination from "../common/Pagination";
import {useSelector} from "react-redux";
import { paginate } from "./../../utils/paginate";
import Course from "./Course";
import {store} from "../../store";
import {getAllShops} from "../../actions/getShopList";

const Archive = () => {

    useEffect(() => {
        store.dispatch(getAllShops());
    }, []);
    const [perPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const courses = useSelector(state => state.shopList);
    console.log(courses);

    const handlePageChange = page => {
        setCurrentPage(page);
    };

    // const archiveCourses = paginate(courses, currentPage, perPage);

    return (
        <section className="term-categories">
            <div className="top-bar">
                <header>
                    <h1>
                        {" "}
                        جستجو <span> فروشگاه </span>{" "}
                    </h1>{" "}
                    <span> فروشگاها </span>
                </header>

                <div className="row">
                    <div className="col-md-4 col-sm-12 col-xs-12 pull-right">
                        <form action="" method="">
                            <div className="input">
                                <input
                                    type="text"
                                    name=""
                                    placeholder="موضوع مورد نظر ..."
                                />
                                <button>
                                    <i className="zmdi zmdi-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-8 pull-right">
                        <div className="switch-field available">
                            <input
                                id="available-filter-1"
                                name="available"
                                value="all"
                                checked=""
                                type="radio"
                            />
                            <label for="available-filter-1"> همه </label>
                            <input
                                id="available-filter-2"
                                name="available"
                                value="off"
                                type="radio"
                            />
                            <label for="available-filter-2"> خریدنی </label>
                            <input
                                id="available-filter-3"
                                name="available"
                                value="normal"
                                type="radio"
                            />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 pull-left">
                        <div className="select-ddl">
                            <select>
                                <option> مرتب سازی </option>
                                <option> قیمت </option>
                                <option> تاریخ انتشار </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <aside className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                    <section className="aside-section filter-by-category">
                        <header>
                            <h3> دسته بندی موضوعات </h3>
                        </header>
                        <div className="inner">
                            <ul>
                                <li>
                                    <input type="checkbox" name="" id="cat-1" />
                                    <label for="cat-1"> پوشاک </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="" id="cat-2" />
                                    <label for="cat-2">
                                        {" "}
                                        موبایل و لوازم موبایل{" "}
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" name="" id="cat-3" />
                                    <label for="cat-3">لوازم صوتی و الکترونیک</label>
                                </li>
                                <li>
                                    <input type="checkbox" name="" id="cat-4" />
                                    <label for="cat-4">
                                        {" "}
                                        مبلمان{" "}
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="checkbox"
                                        name=""
                                        id="cat-10"
                                    />
                                    <label for="cat-10">
                                        {" "}
                                        لوازم آشپزخانه{" "}
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </section>
                </aside>

                <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">
                    <section className="terms-items">
                        <div className="row" >
                            <Course courses={courses} />
                        </div>

                        <Pagination
                            totalCourse={courses.length}
                            currentPage={currentPage}
                            perPage={perPage}
                            onPageChange={handlePageChange}
                        />
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Archive;
