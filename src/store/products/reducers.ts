import { ProductsLibrary, SET_PRODUCTS_DATA, ProductActionTypes } from './types'

const initialState: any /* ProductsLibrary doesn't work with empty object */ = {
  products: {}
}

export function productsReducer(
  state = initialState,
  action: ProductActionTypes
): ProductsLibrary {
  switch (action.type) {
    case SET_PRODUCTS_DATA:
      return action.payload // this will be the products from products-data.ts
    default: return state
  }
}