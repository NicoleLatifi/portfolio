import { products } from '../../products-data'
import Product from '../Product/Product'

function ProductsList() {
  const productsToDisplay = Object.values(products).map(product => {
    return (
      <Product productData = {product} />
    )
  })

  return (
    <div>
      {productsToDisplay}
    </div>
  );
}

export default ProductsList
