import './App.css'
import { useEffect } from 'react'
import ProductsList from './components/ProductsList/ProductsList'
import { products } from './products-data'
import {ProductsLibrary} from './products-data'
import { connect } from 'react-redux'
import { setProductsData } from './store/products/actions'
import { bindActionCreators } from 'redux'

interface DispatchProps {
  setProductsData: (products: ProductsLibrary) => void
}

function App(props: DispatchProps): JSX.Element {
  useEffect(() => {
    props.setProductsData(products)
  }, [])

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

export const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
    setProductsData
  }, dispatch)
)

export default connect(null, mapDispatchToProps)(App);
