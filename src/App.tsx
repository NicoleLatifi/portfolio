import './App.css'
import { useEffect } from 'react'
import ProductsList from './components/ProductsList/ProductsList'
import { products, ProductsLibrary } from './products-data'
import { connect } from 'react-redux'
import { setProductsData } from './store/products/actions'
import { setCart, addIdToCart } from './store/cart/actions'
import { bindActionCreators } from 'redux'
import Cart from './components/Cart/Cart'

interface DispatchProps {
  setProductsData: (products: ProductsLibrary) => void,
  setCart: () => void,
  addIdToCart: (id: string) => void
}

const mapDispatch = (dispatch: any) => (
  bindActionCreators({
    setProductsData,
    setCart,
    addIdToCart
  }, dispatch)
)

function App(props: DispatchProps): JSX.Element {
  useEffect(() => {
    props.setProductsData(products)
    props.setCart()
  }, [props])

  const addToCart = (productId: string) => {
    props.addIdToCart(productId)
  }

  return (
    <div>
      <h1>Nicole Latifi</h1>
      <Cart />
      <ProductsList addToCart={addToCart} />
    </div>
  )
}

export default connect(null, mapDispatch)(App);
