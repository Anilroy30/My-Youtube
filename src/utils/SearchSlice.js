import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
    name: "search",
    initialState: {
        search: "",
    },
    reducers: {
        cacheResults: (state, action) => {
            state = Object.assign(state, action.payload);
        },
    },
})

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;