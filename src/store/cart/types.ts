export type CartType = {
  [key: string] : CartItemType
}

type CartItemType = {
  quantity: number
}

export const SET_CART = 'SET_CART'
export const ADD_ID_TO_CART = 'ADD_ID_TO_CART'
export const REMOVE_ID_FROM_CART = 'REMOVE_ID_FROM_CART'
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY'
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY'

interface SetCartAction {
  readonly type: typeof SET_CART
}

interface AddToCartIdAction {
  readonly type: typeof ADD_ID_TO_CART
  payload: {id: string, quantity: number}
}

interface RemoveFromCartIdAction {
  readonly type: typeof REMOVE_ID_FROM_CART
  payload: string
}

interface DecreaseQuantityAction {
  readonly type: typeof DECREASE_QUANTITY
  payload: string
}

interface IncreaseQuantityAction {
  readonly type: typeof INCREASE_QUANTITY
  payload: string
}

export type CartActionTypes = SetCartAction | 
  AddToCartIdAction | 
  RemoveFromCartIdAction | 
  DecreaseQuantityAction |
  IncreaseQuantityAction
