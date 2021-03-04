import { products } from '../../products-data'
import Product from '../Product/Product'

interface Props {
  addToCart: (productId: string) => void
}

function ProductsList(props: Props) {
  const productsToDisplay = Object.values(products).map((product, i) => {
    return (
      <Product 
        key={i}
        id={product.id}
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
