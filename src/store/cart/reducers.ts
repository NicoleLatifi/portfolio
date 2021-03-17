import { 
  CartActionTypes, 
  CartType, 
  SET_CART, 
  ADD_ID_TO_CART, 
  REMOVE_ID_FROM_CART, 
  DECREASE_QUANTITY, 
  INCREASE_QUANTITY
} from './types'

const initialState: any = {
  cart: {}
}

export function cartReducer(
  state = initialState.cart,
  action: CartActionTypes
): CartType {
  let newCart
  switch (action.type) {
    case SET_CART:
      return state
    case ADD_ID_TO_CART:
      newCart = {...state}
      newCart[action.payload.id] = {"quantity": action.payload.quantity}
      return newCart
    case REMOVE_ID_FROM_CART:
      newCart = {...state}
      delete newCart[action.payload]
      return newCart
    case DECREASE_QUANTITY:
      newCart = {...state}
      newCart[action.payload].quantity--
      if(newCart[action.payload].quantity === 0) {
        delete newCart[action.payload]
      }
      return newCart
    case INCREASE_QUANTITY:
      newCart = {...state}
      newCart[action.payload].quantity++
      return newCart
    default: return state
  }
}