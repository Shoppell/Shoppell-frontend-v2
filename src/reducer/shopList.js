export const ShopListReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_SHOP":
            return { ...action.payload }; //spread Operator
        default:
            return state;
    }
};
