export const productListReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_PRODUCT_LIST":
            return { ...action.payload }; //spread Operator
        default:
            return state;
    }
};
