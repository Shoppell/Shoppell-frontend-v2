export const productDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_PRODUCTS_DETAILS":
            return { ...action.payload }; //spread Operator
        default:
            return state;
    }
};
