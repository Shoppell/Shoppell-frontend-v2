export const ShopListReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_SHOP_LIST":
            return { ...action.payload }; //spread Operator
        default:
            return state;
    }
};
