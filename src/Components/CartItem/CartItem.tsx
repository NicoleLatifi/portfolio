import { CartType } from '../../store/cart/types'
import { ProductItemType, ProductsLibraryType } from '../../store/products/types'
import { removeIdFromCart } from '../../store/cart/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Button from '../Button/Button'

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
  key: number,
  id: string
}

function Product(props: Props): JSX.Element {
  return (
    <div style={{border: "2px solid purple", margin: "5px"}}>
      <p>{props.products[props.id].name}</p>
      <p>quantity: {props.cart[props.id].quantity}</p>
      <Button
        id={props.id}
        variant="remove"
        name="Remove"
        onClick={() => props.removeIdFromCart(props.id)}
      />
      <Button 
      id={props.id}
      variant="decrease-quantity" 
      name="-" 
      onClick={() => props.decreaseQuantity(props.id)}
      />
      <Button 
      id={props.id}
      variant="increase-quantity" 
      name="+" 
      onClick={() => props.increaseQuantity(props.id)}
      />
    </div>
  )
}

export default connect<StateProps, DispatchProps>(
  mapState,
  mapDispatch
)(Product)