import { createSlice } from '@reduxjs/toolkit';

export const productActiveSlice = createSlice({
    name: 'productActive',
    initialState: null,
    reducers: {
        setProductActive: (state, action) => action.payload
    }
})

export const { setProductActive } = productActiveSlice.actions;

export default productActiveSlice.reducer;

