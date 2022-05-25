import {getAllProduct} from "../services/getProducts"

export const getProductsAndShop = (slug) => {
    return async (dispatch) => {
        const { data } = await getAllProduct(slug);
        console.log(data);
        await dispatch({ type: "GET_SHOP", payload: data });
    };
};
