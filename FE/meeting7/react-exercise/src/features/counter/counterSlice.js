import { createSlice } from '@reduxjs/toolkit'
import Axios from 'axios'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        random: (state, action) => {
            state.value = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, random } = counterSlice.actions

export default counterSlice.reducer

export function randomNumber() {
    return async (dispatch) => {
        try {
            const { data } = await Axios.get("http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1")
            console.log(data)
            dispatch(counterSlice.actions.random(data[0]))
        } catch (error) {

        }
    }
}