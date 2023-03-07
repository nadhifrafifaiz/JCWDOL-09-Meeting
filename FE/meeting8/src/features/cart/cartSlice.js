import { createSlice } from '@reduxjs/toolkit'
import Axios from 'axios'


export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: [],

    },
    reducers: {
        setCartList: (state, action) => {
            state.cartList = action.payload
        }

    }
})

export const { setCartList } = cartSlice.actions
export default cartSlice.reducer

// export function fetchProducts() {
//     return async (dispatch) => {
//         let response = await Axios.get("http://localhost:2000/products")
//         dispatch(setProductList(response.data))
//     }
// }
