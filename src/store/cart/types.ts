export type Cart = string[]

export const SET_CART = 'SET_CART'

interface SetCartAction {
  type: typeof SET_CART
}

export type CartActionTypes = SetCartAction
