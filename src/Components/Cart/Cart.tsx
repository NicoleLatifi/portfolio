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
  cartAnimation: string
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

  let modalClassList = `cart-modal ${props.cartAnimation}`
  let numberOfCartItems: number = Object.keys(props.cart).length
  let total: number = Object.keys(props.cart).reduce((sum, id) => {
    return sum + (props.products[id].price * props.cart[id].quantity)
  }, 0)

  return (
    <div className="modal-wrapper">
      <div 
        className="modal-background"
        onClick={props.toggleHidden}
      >
      </div>
      <div className={modalClassList}>
        <div className="cart-items">
          <div className="cart-header">
            <p>Cart ({numberOfCartItems})</p>
            <p 
              className="x" 
              onClick={props.toggleHidden}
            >
              x
            </p>
          </div>
          {(numberOfCartItems === 0) &&
            <p>No items in cart</p>}
          {(numberOfCartItems > 0) &&
            <div>
              {productsInCart}
              <p>Total: ${total.toFixed(2)}</p>
              <button>Checkout</button>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default connect<StateProps, DispatchProps>(
  mapState,
  mapDispatch
)(Cart)