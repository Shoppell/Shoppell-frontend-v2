import http from "./httpService";
import config from "./config.json";

export const registerUser = user => {
    const token = localStorage.getItem("token");
    console.log(user);
    http.post(`${config.localapi}/api/v1/shop/shop/create/`, user, {
        headers: { 'content-type': 'multipart/form-data',
            "Authorization" : `Bearer ${token}`}})
};
export const loginUser = user => {
    return http.post(`${config.localapi}/api/v1/user/register`, JSON.stringify(user));
};

export const verifyUser = user => {
    return http.post(`${config.localapi}/api/v1/user/verify`, JSON.stringify(user));
};
