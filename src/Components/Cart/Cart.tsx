import { CartType } from '../../store/cart/types'
import { ProductsLibraryType } from '../../store/products/types'
import { removeIdFromCart } from '../../store/cart/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

interface StateProps {
  products: ProductsLibraryType
  cart: CartType
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

function Cart(props: Props): JSX.Element {
  let productsInCart
  if(Object.keys(props.cart).length > 0) {
    productsInCart = Object.keys(props.cart).map((id) => {
      return (
        <div style={{border: "2px solid purple", margin: "5px"}}>
          <p>{props.products[id].name}</p>
          <p>quantity: {props.cart[id].quantity}</p>
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

export default connect<StateProps, DispatchProps>(
  mapState,
  mapDispatch
)(Cart)