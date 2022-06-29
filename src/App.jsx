import { useSelector } from 'react-redux'
import './App.css'
import CardProduct from './components/CardProduct'
import Form from './components/Form'

function App() {

  const products = useSelector(state => state.products)

  return (
    <div className="App">
      <Form />
      {
        products.map(product => (
          <CardProduct 
            key={product.id}
            product={product}
          />
        ))
      }
    </div>
  )
}

export default App
