import { CartActionTypes, Cart, SET_CART, ADD_ID_TO_CART, REMOVE_ID_FROM_CART } from './types'

const initialState: any = {
  cart: []
}

export function cartReducer(
  state = initialState,
  action: CartActionTypes
): Cart {
  switch (action.type) {
    case SET_CART:
      return initialState.cart
    case ADD_ID_TO_CART:
      return [...state, action.payload]
    case REMOVE_ID_FROM_CART:
      const newCart = initialState.cart.filter((id: string) => !action.payload.includes(id))
      return newCart
    default: return state
  }
}