export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_PRODUCTS_LIST":
            return { ...action.payload }; //spread Operator
        case "GET_PRODUCTS":
            return {...action.payload};
        default:
            return state;
    }
};
