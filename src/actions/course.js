import { getCourse } from "../services/courseService";

export const getSingleCourse = courseId => {
    const { data } = getCourse(courseId);
    return data;
    // TODO : dispatch data
    // return async dispatch => {
    //     const { data } = await getCourse(courseId);
    //     await dispatch({ type: "GET_COURSE", payload: data.course });
    // };
};
