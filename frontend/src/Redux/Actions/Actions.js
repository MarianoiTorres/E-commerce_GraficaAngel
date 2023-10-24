import axios from 'axios'
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
export const GET_ALL_USERS = 'GET_ALL_USERS'
export const GET_ALL_SALES = 'GET_ALL_SALES'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const DELETE_USER = 'DELETE_USER'
export const USER_AUTH = 'USER_AUTH'
export const CLOSE_SESION_USER_AUTH = 'CLOSE_SESION_USER_AUTH'

export const getAllProducts = () => {
    return async (dispatch) => {
        const response = await axios.get('https://e-commercegraficaangel-production.up.railway.app/grafica/products/all')
        return dispatch({
            type: GET_ALL_PRODUCTS,
            payload: response.data
        })
    }
}

export const getAllUsers = () => {
    return async (dispatch) => {
        const response = await axios.get('https://e-commercegraficaangel-production.up.railway.app/grafica/users/all')
        return dispatch({
            type: GET_ALL_USERS,
            payload: response.data
        })
    }
}

export const getAllSales = () => {
    return async (dispatch) => {
        const response = await axios.get('https://e-commercegraficaangel-production.up.railway.app/grafica/sales/')
        return dispatch({
            type: GET_ALL_SALES,
            payload: response.data
        })
    }
}

export const updateProduct = (product, id) => {
    return async (dispatch) => {
        const response = await axios.put(`https://e-commercegraficaangel-production.up.railway.app/grafica/products/${id}`, { product })
        if (response.data === null) return
        return dispatch({
            type: UPDATE_PRODUCT,
            payload: response.data
        })
    }
}

export const deleteProduct = (id) => {
    return async (dispatch) => {
        const response = await axios.delete(`https://e-commercegraficaangel-production.up.railway.app/grafica/products/${id}`)
        return dispatch({
            type: DELETE_PRODUCT,
            payload: id
        })
    }
}

export const deleteUser = (id) => {
    return async(dispatch) => {
        const response = await axios.delete(`https://e-commercegraficaangel-production.up.railway.app/grafica/users/${id}`)
        return dispatch({
            type: DELETE_USER,
            payload: id
        })
    }
}

export const userAuth = (user) => {
    return async(dispatch) => {
        const response = await axios.post(`https://e-commercegraficaangel-production.up.railway.app/grafica/users/login`, user)
        return dispatch({
            type: USER_AUTH,
            payload: response.data
        })
    }
}

export const closeSesion = () => {
    return async(dispatch) => {
        return dispatch({
            type: CLOSE_SESION_USER_AUTH
        })
    }
}