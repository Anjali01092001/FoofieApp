const initialState = {
    carts: []
}

export const cartreducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }
        // break;
        case "REMOVE_TO_CART":
            const data = state.carts.filter((e) => e.id !== action.payload);
            return{
                ...state,
                carts:data
            }

        default:
            return state
    }
}