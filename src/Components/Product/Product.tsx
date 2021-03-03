import { ProductItem } from '../../products-data'

interface Props {
  productData: ProductItem
}

function Product(props: Props) {
  return (
    <div>
      {props.productData.name}
      <a>Add To Cart</a>
    </div>
  )
}

export default Product