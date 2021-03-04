import './App.css';
import ProductsList from './Components/ProductsList/ProductsList'

function App(): JSX.Element {
  const addToCart = () => {
    console.log("Product added to cart!")
  };

  return (
    <div>
      <h1>Nicole Latifi</h1>
      <ProductsList addToCart={addToCart} />
    </div>
  )
}

export default App;
