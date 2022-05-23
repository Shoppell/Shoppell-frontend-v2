import http from "./httpService";
import config from "./config.json";

export const getCourses = () => {
    return http.get(`http://127.0.0.1:5000/api/v1/shop/shop/list`).then(res => res.data.data);
};

export const getCourse = (courseId) => {
    return http.get(`${config.toplearnapi}/api/course/${courseId}`);
};
export const newCourse = (course) => {
    //TODO: handele this error
    const token = localStorage.getItem("token");
    console.log(course);
    http.post(`${config.localapi}/api/v1/shop/product/create/`, course, {
        headers: { 'content-type': 'multipart/form-data',
            "Authorization" : `Bearer ${token}`}})
};

export const deleteCourse = (courseId) => {
    return http.delete(`${config.toplearnapi}/api/course/${courseId}`);
};

export const updateCourse = (courseId, course) => {
    return http.put(`${config.toplearnapi}/api/course/${courseId}`, course);
};
