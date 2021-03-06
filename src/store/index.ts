import { combineReducers } from 'redux'
import { productsReducer } from './products/reducers'
import { cartReducer } from './cart/reducers'

export const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
})

export type RootState = ReturnType<typeof rootReducer>