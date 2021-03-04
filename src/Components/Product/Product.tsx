import { ProductItem } from '../../products-data'
import Button from '../Button/Button'

interface Props {
  productData: ProductItem,
  addToCart: () => void
}

function Product(props: Props) {
  return (
    <div>
      {props.productData.name}
      <Button 
        variant="" 
        name="Add To Cart" 
        onClick={props.addToCart}
      />
    </div>
  )
}

export default Product