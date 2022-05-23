import http from "./httpService";

export const getAllProduct = (idProduct) => {
    return http.get(`http://127.0.0.1:5000/api/v1/shop/pr/list/`).then(res => res.data.data);
};

export const getProduct = () => {
  return http.get(`http://127.0.0.1:5000/api/v1/shop/shop`).then(res => res.data.data);
};
