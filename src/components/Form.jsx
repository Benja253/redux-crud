import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../store/slices/products.slice'

const Form = () => {

  const {handleSubmit, reset, register} = useForm()

  const dispatch = useDispatch()

  const productActive = useSelector(state => state.productActive)

  useEffect(() => {
    if(productActive) {
      reset(productActive)
    }
  }, [productActive])

  const submit = data => {
    data.id = Date.now()
    dispatch(addProduct(data))
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <ul>
        <li>
          <label htmlFor="name">Nombre Producto</label>
          <input type="text" id='name' {...register('name')} />
        </li>
        <li>
          <label htmlFor="price">Precio</label>
          <input type="number" id='price' {...register('price')} />
        </li>
        <li>
          <label htmlFor="available">Available</label>
          <input type="checkbox" id='available' {...register('available')} />
        </li>
      </ul>
      <button>Submit</button>
    </form>
  )
}

export default Form