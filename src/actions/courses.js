import {
    getCourses,
    newCourse,
    updateCourse,
    deleteCourse, getAllShop,
} from "./../services/courseService";
import { successMessage } from "./../utils/message";


export const getAdminListProduct = () => {
    return async (dispatch) => {
        const { data } = await getCourses();
        console.log(data)
        await dispatch({ type: "INIT", payload: data.shopAdmin});
    };
};

export const createNewCourse = (course) => {
    return async (dispatch, getState) => {
        try {
            const { data, status } = newCourse(course);
            if (status === 201) successMessage("محصول با موفقیت اضافه شد!");
            await dispatch({
                type: "ADD_COURSE",
                payload: [...getState().shopAdmin],
            });
        }
        catch (ex) {
            successMessage("محصول با موفقیت اضافه شد!");
        };

    };
};

export const handleCourseUpdate = (courseId, updatedCourse) => {
    return async (dispatch, getState) => {
        const courses = [...getState().shopAdmin];
        const filteredCourses = courses.filter(
            (course) => course._id !== courseId
        );

        try {
            const { data, status } = await updateCourse(
                courseId,
                updatedCourse
            );
            console.log(data);
            await dispatch({
                type: "UPDATE_COURSE",
                payload: [...filteredCourses, data.shopAdmin],
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
        const courses = [...getState().shopAdmin];
        const filteredCourses = courses.filter(
            (course) => course.id !== courseId
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
