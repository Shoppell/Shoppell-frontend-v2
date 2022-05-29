export const  ShopDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_SHOP_DETAILS":
            return { ...action.payload };
        default:
            return state;
    }
};
