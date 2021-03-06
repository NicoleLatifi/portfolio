import { CartActionTypes, Cart, SET_CART } from './types'

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
    default: return state
  }
}