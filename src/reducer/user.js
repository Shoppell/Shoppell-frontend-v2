export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_USER":
            return { ...action.payload }; //spread Operator
        case "CLEAR_USER":
            return { ...action.payload };
        case "REGISTER_SHOP":
            return {...action.payload};
        default:
            return state;
    }
};
