import React, {useContext, useEffect} from "react";
import Pagination from "./../common/Pagination";
import { dashContext } from "./../context/dashContext";
import {getAdminListProduct} from "./../../actions/courses";
import {store} from "../../store";
import {useSelector} from "react-redux";

const CourseTable = () => {
    const context = useContext(dashContext);

    useEffect(() => {
        store.dispatch(getAdminListProduct())
    }, []);
    const courses = useSelector((state) => state.shopAdmin);


    const {
        currentPage,
        perPage,
        handlePageChange,
        courseData,
        openNewCourseDialog,
        openEditCourseDialog,
        openDeleteCourseDialog,
        setSearch,
        filteredCourses,
        sortCoursesAsc,
        sortCoursesDes,
    } = context;

    console.log(filteredCourses)

    return (
        <section style={{ marginTop: "7em", marginRight: "2em" }}>
            <div >
                <div>
                    <h3 className="alert alert-info text-center">
                        لیست دوره ها
                    </h3>
                    <div className="row inline-block">
                        <button
                            className="btn btn-primary"
                            onClick={openNewCourseDialog}
                        >
                            <span
                                className="fa fa-plus"
                                style={{
                                    verticalAlign: "middle",
                                    marginLeft: "1em",
                                }}
                            ></span>
                            اضافه کردن محصول جدید
                        </button>
                        <input
                            type="text"
                            placeholder="جستجوی دوره"
                            onChange={(e) => setSearch(e.target.value)}
                            className="form-control"
                            style={{
                                width: "50%",
                                float: "left",
                                marginLeft: "2em",
                            }}
                        />
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">عنوان محصول</th>
                                <th scope="col">تصویر محصول</th>
                                <th scope="col">
                                    قیمت محصول (تومان)
                                    <span
                                        className="fa fa-long-arrow-up"
                                        style={{ marginRight: "0.5em" }}
                                        onClick={sortCoursesDes}
                                    ></span>
                                    <span
                                        className="fa fa-long-arrow-down"
                                        style={{ marginRight: "0.5em" }}
                                        onClick={sortCoursesAsc}
                                    ></span>
                                </th>
                                <th scope="col">قیمت ثانویه (تومان)</th>
                                <th scope="col">دسته بندی</th>
                                <th scope="col">ویرایش</th>
                                <th scope="col">حذف</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courseData.map((course) => (
                                <tr key={course.id}>
                                    <td>{course.name}</td>
                                    <td>
                                        <a
                                            href={`${course.image1}`}
                                            target="_blank"
                                            className="btn btn-info btn-sm"
                                        >
                                            نمایش تصویر
                                        </a>
                                    </td>
                                    <td>
                                        {course.price === 0
                                            ? "رایگان"
                                            : `${course.price}`}
                                    </td>
                                    <td>
                                        {course.last_price}
                                    </td>
                                    <td>
                                        {course.category.name}
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-warning"
                                            onClick={() =>
                                                openEditCourseDialog(course)
                                            }
                                        >
                                            ویرایش
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                                openDeleteCourseDialog(course)
                                            }
                                        >
                                            حذف
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="navbar-fixed-bottom text-center footer">
                    <Pagination
                        totalCourse={filteredCourses.length}
                        currentPage={currentPage}
                        perPage={perPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </section>
    );
};

export default CourseTable;
