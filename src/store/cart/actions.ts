import { 
  CartActionTypes, 
  SET_CART, 
  ADD_ID_TO_CART, 
  REMOVE_ID_FROM_CART, 
  DECREASE_QUANTITY,
  INCREASE_QUANTITY
} from './types'

export function setCart(): CartActionTypes {
  return {
    type: SET_CART
  }
}

export function addToCart(id: string, quantity: number): CartActionTypes {
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

export function decreaseQuantity(id: string): CartActionTypes {
  return {
    type: DECREASE_QUANTITY,
    payload: id
  }
}

export function increaseQuantity(id: string): CartActionTypes {
  return {
    type: INCREASE_QUANTITY,
    payload: id
  }
}