import { createSlice } from '@reduxjs/toolkit'
import Axios from 'axios'


export const productSlice = createSlice({
    name: "product",
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
    }
})

export const { setProductList, setProduct } = productSlice.actions
export default productSlice.reducer

export function fetchProducts() {
    return async (dispatch) => {
        let response = await Axios.get("http://localhost:2000/products")
        dispatch(setProductList(response.data))
    }
}

export function getProductById(productId) {
    return async (dispatch) => {
        let response = await Axios.get("http://localhost:2000/products", {
            params: {
                id: productId
            }
        })
        dispatch(setProduct(response.data[0]))
    }
}