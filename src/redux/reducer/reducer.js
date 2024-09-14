import { ADD_TO_CART, FAVOURITE, REMOVE_TO_CART } from "../actionTypes/actionTypes";

const initialState = {
    addToCart: [],
    favourite: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, addToCart: [...state.addToCart, action.addToCart] }
        case REMOVE_TO_CART:
            return {...state, addToCart:state.addToCart.filter((item)=>item.id !== action.removeToCart.id)}    
        case FAVOURITE:
            return {
                ...state, favourite: state.favourite.find((item => item.id === action.favourite.id)) ?
                    state.favourite.filter((item) => item.id !== action.favourite.id) :
                    [...state.favourite, action.favourite]
            }
        default:
            return state;
    }
}

export default reducer;