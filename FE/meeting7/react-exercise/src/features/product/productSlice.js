import { createSlice } from '@reduxjs/toolkit'
import Axios from 'axios'

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        productList: [],
        product: {
            id: 0,
            productName: "",
            price: 0,
            productImage: "",
            description: "",
            category: ""
        }
    },
    reducers: {
        setProductList: (state, action) => {
            state.productList = action.payload
        },
        setProduct: (state, action) => {
            state.product = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setProductList, setProduct } = productSlice.actions

export default productSlice.reducer

export function getProductById(productId) {
    return async (dispatch) => {
        let { data } = await Axios.get('http://localhost:2000/products', {
            params: {
                id: productId
            }
        })
        console.log(data)
        dispatch(setProduct(data[0]))
    }
}

export function fetchProduct() {
    return async (dispatch) => {
        let { data } = await Axios.get('http://localhost:2000/products')
        dispatch(setProductList(data))
    }
}