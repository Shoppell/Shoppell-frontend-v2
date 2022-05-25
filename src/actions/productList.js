import {getProductList} from "../services/getProducts";

export const getAllProductList = (slug) => {
    return async (dispatch) => {
        const { data } = await getProductList(slug);
        console.log(data)
        await dispatch({ type: "GET_PRODUCT_LIST", payload: data });
    };
};
