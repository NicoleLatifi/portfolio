import './App.css'
import { products } from './products-data'
import { useEffect } from 'react'

import { ProductsLibraryType } from './store/products/types'
import { setProductsData } from './store/products/actions'
import { setCart, addToCart } from './store/cart/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import TopBar from './components/TopBar/TopBar'
import Nav from './components/Nav/Nav'
import ProductsList from './components/ProductsList/ProductsList'
import Checkout from './components/Checkout/Checkout'

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
      <TopBar />
      <Nav />
      <Switch>
        <Route exact path='/'>
          <ProductsList />
        </Route>
        <Route path='/checkout'>
          <Checkout />
        </Route>
      </Switch>
    </div>
  )
}

export default connect(
  null, mapDispatch
)(App)
