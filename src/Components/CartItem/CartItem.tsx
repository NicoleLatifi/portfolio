import './CartItem.css'
import TrashCan from '../../assets/delete.svg'
import { CartType } from '../../store/cart/types'
import { ProductsLibraryType } from '../../store/products/types'
import { removeIdFromCart, decreaseQuantity, increaseQuantity } from '../../store/cart/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Button from '../Button/Button'

interface StateProps {
  products: ProductsLibraryType
  cart: CartType
}

interface DispatchProps {
  removeIdFromCart: (id: string) => void
  decreaseQuantity: (id: string) => void
  increaseQuantity: (id: string) => void
}

type Props = StateProps & DispatchProps & OwnProps

const mapState = (state: any) => ({
  products: state.products,
  cart: state.cart
})

const mapDispatch = (dispatch: any) => (
  bindActionCreators({
    removeIdFromCart,
    decreaseQuantity,
    increaseQuantity
  }, dispatch)
)

interface OwnProps {
  key: number,
  id: string
}

function Product(props: Props): JSX.Element {
  return (
    <div className="cart-item">
      <div>
        <p>{props.products[props.id].name}</p>
        <p>${props.products[props.id].price.toFixed(2)}</p>
      </div>
      <div className="quantity-and-remove-buttons">
        <div className="quantity-container">
          <Button 
          id={props.id}
          variant="adjust-quantity" 
          name="-" 
          onClick={() => props.decreaseQuantity(props.id)}
          />
          <p className="quantity">{props.cart[props.id].quantity}</p>
          <Button 
          id={props.id}
          variant="adjust-quantity" 
          name="+"
          onClick={() => props.increaseQuantity(props.id)}
          />
        </div>
        <img
          className="trash-can"
          src={TrashCan}
          alt="trash-can"
          onClick={() => props.removeIdFromCart(props.id)}
        />
      </div>
    </div>
  )
}

export default connect<StateProps, DispatchProps>(
  mapState,
  mapDispatch
)(Product)