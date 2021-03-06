export type Cart = string[]

export const SET_CART = 'SET_CART'
export const ADD_ID_TO_CART = 'ADD_ID_TO_CART'

interface SetCartAction {
  type: typeof SET_CART
}

interface AddToCartIdAction {
  type: typeof ADD_ID_TO_CART
  payload: string
}

export type CartActionTypes = SetCartAction | AddToCartIdAction
