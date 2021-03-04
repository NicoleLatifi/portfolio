import { products } from '../../products-data'
import Product from '../Product/Product'

interface Props {
  addToCart: () => void
}

function ProductsList(props: Props) {
  const productsToDisplay = Object.values(products).map(product => {
    return (
      <Product 
        productData={product} 
        addToCart={props.addToCart}
      />
    )
  })

  return (
    <div>
      {productsToDisplay}
    </div>
  );
}

export default ProductsList
