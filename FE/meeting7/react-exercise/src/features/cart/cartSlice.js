import { createSlice } from '@reduxjs/toolkit'
import Axios from 'axios'

export const cartSlice = createSlice({
    name: 'counter',
    initialState: {
        cartList: [],
    },
    reducers: {
        addCart: (state, action) => {
            state.cartList.push(action.payload)
        },
        setCart: (state, action) => {
            state.cartList = (action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addCart, setCart } = cartSlice.actions

export default cartSlice.reducer

export function postCard(item) {
    return async (dispatch) => {
        let { data } = await Axios.post('http://localhost:2000/carts', item)
        dispatch(addCart(data))
    }
}

export function fetchCard() {
    return async (dispatch) => {
        let { data } = await Axios.get('http://localhost:2000/carts')
        console.log(data)
        dispatch(setCart(data))
    }
}