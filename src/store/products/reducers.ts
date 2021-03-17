import { ProductActionTypes, ProductsLibraryType, SET_PRODUCTS_DATA } from './types'

const initialState: any /* ProductsLibraryType doesn't work with empty object */ = {
  products: {}
}

export function productsReducer(
  state = initialState,
  action: ProductActionTypes
): ProductsLibraryType {
  switch (action.type) {
    case SET_PRODUCTS_DATA:
      return action.payload // this will be the products from products-data.ts
    default: return state
  }
}