import { ProductItemType } from '../../store/products/types'
import { addToCart } from '../../store/cart/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Button from '../Button/Button'

interface DispatchProps {
  addToCart: (id: string, quantity: number) => void
}

const mapDispatch = (dispatch: any) => (
  bindActionCreators({
    addToCart
  }, dispatch)
)

interface OwnProps {
  key: number,
  id: string,
  productData: ProductItemType,
}

type Props = DispatchProps & OwnProps

function Product(props: Props) {
  return (
    <div>
      {props.productData.name}
      <Button 
        id={props.id}
        variant="" 
        name="Add To Cart" 
        onClick={() => props.addToCart(props.id, 1)}
      />
    </div>
  )
}

export default connect(null, mapDispatch)(Product)