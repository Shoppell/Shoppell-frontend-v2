import {getAllShop} from "../services/courseService";

export const getAllShops = () => {
    return async (dispatch) => {
        const { data } = await getAllShop();
        console.log(data);
        await dispatch({ type: "GET_SHOP_LIST", payload: data });
    };
};
