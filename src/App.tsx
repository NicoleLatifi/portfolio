import './App.css'
import { products } from './products-data'
import { useEffect } from 'react'

import { ProductsLibraryType } from './store/products/types'
import { setProductsData } from './store/products/actions'
import { setCart, addToCart } from './store/cart/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Cart from './components/Cart/Cart'
import ProductsList from './components/ProductsList/ProductsList'

interface DispatchProps {
  setProductsData: (products: ProductsLibraryType) => void,
  setCart: () => void,
  addToCart: (id: string, quantity: number) => void
}

const mapDispatch = (dispatch: any) => (
  bindActionCreators({
    setProductsData,
    setCart,
    addToCart
  }, dispatch)
)

function App(props: DispatchProps): JSX.Element {
  useEffect(() => {
    props.setProductsData(products)
    props.setCart()
  }, [props])

  return (
    <div>
      <h1>Nicole Latifi</h1>
      <Cart />
      <ProductsList />
    </div>
  )
}

export default connect(
  null, mapDispatch
)(App)
