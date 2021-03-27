import './Product.css'
import PlaceholderImg from '../../assets/placeholder.svg'
import Star from '../../assets/star.svg'
import { useEffect, useState } from 'react'

import { CartType } from '../../store/cart/types'
import { ProductItemType, ProductsLibraryType } from '../../store/products/types'
import { addToCart } from '../../store/cart/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Button from '../Button/Button'
import { products } from '../../products-data'
import { setProductsData } from '../../store/products/actions'

interface StateProps {
  products: ProductsLibraryType
  cart: CartType
}

interface DispatchProps {
  addToCart: (id: string, quantity: number) => void
}

type Props = StateProps & DispatchProps & OwnProps

const mapState = (state: any) => ({
  products: state.products,
  cart: state.cart
})

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

function Product(props: Props): JSX.Element {
  const [ isAddedToCart, setIsAddedToCart ] = useState<boolean>(false)

  useEffect(() => {
    let isAdded = Object.keys(props.cart).includes(props.id)
    setIsAddedToCart(isAdded)
  }, [props.cart, props.id])

  let filledStars = []
  for(let i = 0; i < props.productData.rating; i++) {
      filledStars.push(
      <img 
        className="filled star"
        src={Star}
        alt="Star"
      />
    )
  }
  let unfilledStars = []
  for(let i = 0; i < (5 - props.productData.rating); i++) {
      unfilledStars.push(
      <img 
        className="unfilled star"
        src={Star}
        alt="Star"
      />
    )
  }

  return (
    <div className="product">
      <div className="image-container">
        <img
          className="product-image"
          src={PlaceholderImg}
          alt="No product image available."
        />
      </div>
      <p className="product-name">{props.productData.name}</p>
      <div className="star-container">
        {filledStars}
        {unfilledStars}
        <p className="number-of-reviews">({props.productData.numberOfReviews})</p>
      </div>
      {!isAddedToCart &&
        <Button 
          id={props.id}
          variant="add-to-cart" 
          name="Add To Cart" 
          onClick={() => props.addToCart(props.id, 1)}
        />
      }
      {isAddedToCart &&
        <p>Added!</p>
      }

      {/* If you want decrease and increase buttons }
      {/* {isAddedToCart &&
        <div>
          <Button 
          id={props.id}
          variant="decrease-quantity" 
          name="-" 
          onClick={() => props.addToCart(props.id, 1)}
          // onClick={() => props.decreaseQuantity(props.id)}
          />
          <Button 
          id={props.id}
          variant="increase-quantity" 
          name="+" 
          onClick={() => props.addToCart(props.id, 1)}
          // onClick={() => props.increaseQuantity(props.id)}
          />
        </div>
      } */}
    </div>
  )
}

export default connect<StateProps, DispatchProps>(
  mapState,
  mapDispatch
)(Product)