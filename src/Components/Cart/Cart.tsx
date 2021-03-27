import './Cart.css'

import { CartType } from '../../store/cart/types'
import { ProductsLibraryType } from '../../store/products/types'
import { removeIdFromCart } from '../../store/cart/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CartItem from '../CartItem/CartItem'

interface StateProps {
  products: ProductsLibraryType
  cart: CartType
}

interface DispatchProps {
  removeIdFromCart: (id: string) => void
}

type Props = StateProps & DispatchProps & OwnProps

const mapState = (state: any) => ({
  products: state.products,
  cart: state.cart
})

const mapDispatch = (dispatch: any) => (
  bindActionCreators({
    removeIdFromCart
  }, dispatch)
)

interface OwnProps {
  toggleHidden: () => void
}

function Cart(props: Props): JSX.Element {
  let productsInCart
  if(Object.keys(props.cart).length > 0) {
    productsInCart = Object.keys(props.cart).map((id, i) => {
      return (
        <CartItem 
          key={i}
          id={id}
        />
      )
    })
  }

  return (
    <div className="modal-wrapper">
      <div 
        className="modal-background"
        onClick={props.toggleHidden}
      >
      </div>
      <div className="cart-modal">
        <div className="cart-items">
          <p>Your Cart</p>
          <a onClick={props.toggleHidden}>X</a>
          {productsInCart}
          <p>Total:</p>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default connect<StateProps, DispatchProps>(
  mapState,
  mapDispatch
)(Cart)