import { ProductItemType } from '../../store/products/types'
import { addIdToCart } from '../../store/cart/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Button from '../Button/Button'

interface DispatchProps {
  addIdToCart: (id: string, quantity: number) => void
}

const mapDispatch = (dispatch: any) => (
  bindActionCreators({
    addIdToCart
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
        onClick={() => props.addIdToCart(props.id, 1)}
      />
    </div>
  )
}

export default connect(null, mapDispatch)(Product)