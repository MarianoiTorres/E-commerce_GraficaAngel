import { GET_ALL_PRODUCTS, GET_ALL_SALES, GET_ALL_USERS } from "../Actions/Actions"

const initialState = {
    products: [],
    users: [],
    sales: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            }
        }
        case GET_ALL_USERS: {
            return {
                ...state,
                users: action.payload
            }
        }
        case GET_ALL_SALES: {
            return {
                ...state,
                sales: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default reducer