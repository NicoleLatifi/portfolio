import { ProductsLibraryType } from '../../store/products/types'
import { connect } from 'react-redux'

import Product from '../Product/Product'

interface StateProps {
  products: ProductsLibraryType
}

type Props = StateProps

const mapState = (state: any) => ({
  products: state.products
})

function ProductsList(props: Props) {
  const productsToDisplay = Object.values(props.products).map((product, i) => {
    return (
      <Product 
        key={i}
        id={product.id}
        productData={product} 
      />
    )
  })

  return (
    <div>
      {productsToDisplay}
    </div>
  )
}

export default connect<StateProps>(
  mapState
)(ProductsList)
