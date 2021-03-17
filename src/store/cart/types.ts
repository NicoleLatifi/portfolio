export type CartType = {
  [key: string] : CartItemType
}

type CartItemType = {
  quantity: number
}

export const SET_CART = 'SET_CART'
export const ADD_ID_TO_CART = 'ADD_ID_TO_CART'
export const REMOVE_ID_FROM_CART= 'REMOVE_ID_FROM_CART'
interface SetCartAction {
  type: typeof SET_CART
}

interface AddToCartIdAction {
  type: typeof ADD_ID_TO_CART
  payload: {id: string, quantity: number}
}

interface RemoveFromCartIdAction {
  type: typeof REMOVE_ID_FROM_CART
  payload: string
}

export type CartActionTypes = SetCartAction | AddToCartIdAction | RemoveFromCartIdAction
