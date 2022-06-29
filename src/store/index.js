import { configureStore } from "@reduxjs/toolkit";
import products from './slices/products.slice'
import productActive from './slices/productActive.slice'

export default configureStore({
  reducer: {
    products, 
    productActive
  }
})