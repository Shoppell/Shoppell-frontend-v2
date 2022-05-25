import {
    getCourses,
    newCourse,
    updateCourse,
    deleteCourse, getAllShop,
} from "./../services/courseService";
import { successMessage } from "./../utils/message";
import {getProductList} from "../services/getProducts";

export const getAllCourses = () => {
    return async (dispatch) => {
        const { data } = await getCourses();
        await dispatch({ type: "GET_PRODUCT_LIST", payload: data });
    };
};

export const getAllProductList = (slug) => {
    return async (dispatch) => {
        const { data } = await getProductList(slug);
        console.log(data)
        await dispatch({ type: "GET_PRODUCTS_LIST_DATA", payload: data });
    };
};


export const getAllShops = () => {
    return async (dispatch) => {
        const { data } = await getAllShop();
        console.log(data);
        await dispatch({ type: "GET_SHOP_LIST", payload: data });
    };
};

export const createNewCourse = (course) => {
    return async (dispatch, getState) => {
        try {
            const { data, status } = newCourse(course);
            if (status === 201) successMessage("محصول با موفقیت اضافه شد!");
            await dispatch({
                type: "ADD_COURSE",
                payload: [...getState().courses],
            });
        }
        catch (ex) {
            successMessage("محصول با موفقیت اضافه شد!");
        };

    };
};

export const handleCourseUpdate = (courseId, updatedCourse) => {
    return async (dispatch, getState) => {
        const courses = [...getState().courses];
        const filteredCourses = courses.filter(
            (course) => course._id !== courseId
        );
        // const updatedCourses = [...courses];
        // const courseIndex = updatedCourses.findIndex(
        //     (course) => course._id == courseId
        // );

        // let course = updatedCourses[courseIndex];

        // course = { ...Object.fromEntries(updatedCourse) };
        // updatedCourses[courseIndex] = course;

        try {
            const { data, status } = await updateCourse(
                courseId,
                updatedCourse
            );
            console.log(data);
            await dispatch({
                type: "UPDATE_COURSE",
                payload: [...filteredCourses, data.course],
            });
            if (status === 200) {
                successMessage("دوره با موفقیت ویرایش شد.");
            }
        } catch (ex) {
            await dispatch({ type: "UPDATE_COURSE", payload: [...courses] });
        }
    };
};

export const handleCourseDelete = (courseId) => {
    return async (dispatch, getState) => {
        const courses = [...getState().courses];
        const filteredCourses = courses.filter(
            (course) => course._id !== courseId
        );

        try {
            await dispatch({
                type: "DELETE_COURSE",
                payload: [...filteredCourses],
            });
            const { status } = await deleteCourse(courseId);

            if (status === 200) successMessage("دوره با موفقیت پاک شد.");
        } catch (ex) {
            await dispatch({ type: "DELETE_COURSE", payload: [...courses] });
        }
    };
};
