import { CartActionTypes, Cart, SET_CART, ADD_ID_TO_CART, REMOVE_ID_FROM_CART } from './types'

const initialState: any = {
  cart: {}
}

export function cartReducer(
  state = initialState.cart,
  action: CartActionTypes
): Cart {
  switch (action.type) {
    case SET_CART:
      return state
    case ADD_ID_TO_CART:
      let newCart = {...state}
      newCart[action.payload.id] = {"quantity": action.payload.quantity}
      return newCart
    case REMOVE_ID_FROM_CART:
      newCart = state.filter((id: string) => !action.payload.includes(id))
      return newCart
    default: return state
  }
}