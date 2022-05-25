import {ProductDetails} from "../services/getProducts";

export const ProductDetailsAction = (slug) => {
    return async (dispatch) => {
        const { data } = await ProductDetails(slug);
        console.log(data);
        await dispatch({ type: "GET_PRODUCT_DETAILS", payload: data });
    };
};
