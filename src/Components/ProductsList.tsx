import { products } from '../products-data'

function ProductsList() {
  const productsToDisplay = Object.values(products).map(product => {
    return (
      <div>
        <p>{product.name}</p>
      </div>
    )
  })

  return (
    <div>
      {productsToDisplay}
    </div>
  );
}

export default ProductsList;
