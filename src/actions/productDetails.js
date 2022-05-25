import {ProductDetails} from "../services/getProducts";

export const ProductDetailsAction = (id) => {
    return async (dispatch) => {
        const { data } = await ProductDetails(id);
        console.log(data);
        await dispatch({ type: "GET_PRODUCTS_DETAILS", payload: data });
    };
};
