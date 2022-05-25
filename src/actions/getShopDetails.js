import {ProductDetails} from "../services/getProducts";
import {getShopDetails} from "../services/courseService";

export const ShopDetailsAction = (slug) => {
    return async (dispatch) => {
        const { data } = await getShopDetails(slug);
        console.log(data);
        await dispatch({ type: "GET_PRODUCT_DETAILS", payload: data });
    };
};
