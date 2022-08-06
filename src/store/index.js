import { configureStore } from '@reduxjs/toolkit'
import countReducer from './slice/countSlice'

export const store = configureStore({
    reducer: {
        count: countReducer
    }
})