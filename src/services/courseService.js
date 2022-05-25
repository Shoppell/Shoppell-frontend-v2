import http from "./httpService";
import config from "./config.json";

export const getCourses = () => {
    const token = localStorage.getItem("token");
    return http.get(`${config.localapi}/api/v1/shop/shop/productlist`,{
                    headers: { 'content-type': 'multipart/form-data',
                        "Authorization" : `Bearer ${token}`}});
};

export const getAllShop = () => {
    return http.get(`${config.localapi}/api/v1/shop/shop/list`);
};

export const getShopDetails = (courseId) => {
    return http.get(`${config.localapi}/api/v1/shop/shop/read/${courseId}`);
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
