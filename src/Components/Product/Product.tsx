import { ProductItem } from '../../products-data'
import Button from '../Button/Button'

interface Props {
  key: number,
  id: string,
  productData: ProductItem,
  addToCart: (productId: string) => void
}

function Product(props: Props) {
  return (
    <div>
      {props.productData.name}
      <Button 
        id={props.id}
        variant="" 
        name="Add To Cart" 
        onClick={props.addToCart}
      />
    </div>
  )
}

export default Product