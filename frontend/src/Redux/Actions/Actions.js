import axios from 'axios'
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'


export const getAllProducts = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3001/grafica/products/all')
        return dispatch({
            type: GET_ALL_PRODUCTS,
            payload: response.data
        })
    }   
}