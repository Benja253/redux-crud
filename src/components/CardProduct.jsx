import React from 'react'
import { useDispatch } from 'react-redux'
import { setProductActive } from '../store/slices/productActive.slice'
import { delProduct } from '../store/slices/products.slice'

const CardProduct = ({product}) => {

  const dispatch = useDispatch()

  const deleteProduct = () => {
    dispatch(delProduct(product.id))
  }

  const updateProduct = () => {
    dispatch(setProductActive(product))
  }

  return (
    <article className='card'>
      <h2>{`#${product.id} ${product.name}`}</h2>
      <ul>
        <li><b>Precio: </b>{product.price}</li>
        <li><b>Disponible: </b>{product.available ? 'Sí' : 'No'}</li>
      </ul>
      <button onClick={deleteProduct}>Borrar Producto</button>
      <button onClick={updateProduct}>Editar Producto</button>
    </article>
  )
}

export default CardProduct