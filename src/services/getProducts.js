import http from "./httpService";
import config from "./config.json";


export const getAllProduct = (slug) => {
    return http.get(`${config.localapi}/api/v1/shop/shop/read/${slug}`);
};

export const getProductList = (slug) => {
    return http.get(`${config.localapi}/api/v1/shop/shop/productlist/${slug}`);
};

export const ProductDetails = (id) => {
    console.log("faech")
    return http.get(`${config.localapi}/api/v1/shop/product/read/${id}`);
};

