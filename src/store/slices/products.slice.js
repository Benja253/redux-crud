import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [
      {
        id: 1,
        name: 'Televisión',
        price: 1000,
        available: true
      },
      {
        id: 2,
        name: 'Celular',
        price: 500,
        available: false
      }
    ],
    reducers: {
      addProduct: (state, action) => {
        state.push(action.payload)
      },
      delProduct: (state, action) => {
        // Otra opcion ------
        // const indexSearched = state.findIndex(e => e.id === action.payload)
        // state.splice(indexSearched, 1)
        // Fin de otra opcion ------
        return state.filter(product => product.id !== action.payload)
      }
    }
})

export const { addProduct, delProduct } = productsSlice.actions

export default productsSlice.reducer;
