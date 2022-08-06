import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    number: 0,
    dates: []
}

const countSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        AddNumber(state, action) {
            state.dates.push(action.payload)
        },
        AddNum(state) {
            state.number = state.number + 1
        },
        DeleteNum(state) {
            state.number = state.number - 1
        },
        RemoveDate(state, action) {
            state.dates = state.dates.filter((_, index) => index !== action.payload)
        },
        SortDate(state) {
            state.dates.sort((a, b) => a.localeCompare(b));
        }

    }
});

export const { AddNumber, AddNum, DeleteNum, RemoveDate, SortDate } = countSlice.actions

export default countSlice.reducer