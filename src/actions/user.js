import {successMessage} from "../utils/message";
import {registerUser} from "./../services/userService";

export const addUser = user => {
    return async dispatch => {
        await dispatch({ type: "SET_USER", payload: user });
    };
};

export const clearUser = () => {
    return async dispatch => {
        await dispatch({ type: "CLEAR_USER", payload: {} });
    };
};

export const RegisterUser = shop => {
    return async (dispatch, getState) => {
        const { data, status } = await registerUser(shop);
        console.log(data)
        if (status === 201) successMessage("قروشگاه با موفقیت ساخته شد!");
        await dispatch({
            type: "REGISTER_SHOP",
            payload: [...getState().shops, data.shop],
        });
    };
};
