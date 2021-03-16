import { CartActionTypes, SET_CART, ADD_ID_TO_CART, REMOVE_ID_FROM_CART } from './types'

export function setCart(): CartActionTypes {
  return {
    type: SET_CART
  }
}

export function addIdToCart(id: string, quantity: number): CartActionTypes {
  return {
    type: ADD_ID_TO_CART,
    payload: {id: id, quantity: quantity}
  }
}

export function removeIdFromCart(id: string): CartActionTypes {
  return {
    type: REMOVE_ID_FROM_CART,
    payload: id
  }
}
