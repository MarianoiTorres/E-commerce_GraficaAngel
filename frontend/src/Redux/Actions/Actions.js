import axios from 'axios'
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
export const GET_ALL_USERS = 'GET_ALL_USERS'
export const GET_ALL_SALES = 'GET_ALL_SALES'


export const getAllProducts = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3001/grafica/products/all')
        return dispatch({
            type: GET_ALL_PRODUCTS,
            payload: response.data
        })
    }   
}

export const getAllUsers = () => {
    return async(dispatch) => {
        const response = await axios.get('http://localhost:3001/grafica/users/all')
        return dispatch({
            type: GET_ALL_USERS,
            payload: response.data
        })
    }
}

export const getAllSales = () => {
    return async(dispatch) => {
        const response = await axios.get('http://localhost:3001/grafica/sales/')
        return dispatch({
            type: GET_ALL_SALES,
            payload: response.data
        })
    }
}