import './App.css';
import ProductsList from './Components/ProductsList/ProductsList'
import { products } from './products-data'

function App(): JSX.Element {
  const addToCart = (productId: string) => {
    console.log(`${products[productId].name} added to cart!`)
  }

  return (
    <div>
      <h1>Nicole Latifi</h1>
      <ProductsList addToCart={addToCart} />
    </div>
  )
}

export default App;
