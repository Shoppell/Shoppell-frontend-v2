export const productListReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_PRODUCTS_LIST_DATA":
            return { ...action.payload }; //spread Operator
        default:
            return state;
    }
};
