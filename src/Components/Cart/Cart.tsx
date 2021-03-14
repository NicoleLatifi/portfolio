import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { products, ProductsLibrary } from '../../products-data'
import { removeIdFromCart } from '../../store/cart/actions'

interface StateProps {
  products: ProductsLibrary
  cart: []
}

interface DispatchProps {
  removeIdFromCart: (id: string) => void
}

type Props = StateProps & DispatchProps

const mapState = (state: any) => ({
  products: state.products,
  cart: state.cart
})

const mapDispatch = (dispatch: any) => (
  bindActionCreators({
    removeIdFromCart
  }, dispatch)
)

function Cart(props: Props) {
  let productsInCart
  if(props.cart.length > 0) {
    productsInCart = Object.values(props.cart).map((id) => {
      return (
        <div style={{border: "2px solid purple", margin: "5px"}}>
          <p>{products[id].name}</p>
          <p>quantity: 1</p>
          <button onClick={() => props.removeIdFromCart(id)}>Remove</button>
          <br></br>
        </div>
      )
    })
  }

  return (
    <div>
      <p>Your Cart</p>
      {productsInCart}
      <p>Total:</p>
      <button>Checkout</button>
    </div>
  )
}

export default connect<StateProps, DispatchProps /*, OwnProps*/ >(
  mapState,
  mapDispatch
)(Cart)