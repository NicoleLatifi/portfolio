import { ProductsLibrary, SET_PRODUCTS_DATA, ProductActionTypes } from './types'

export function setProductsData(products: ProductsLibrary): ProductActionTypes {
  return {
    type: SET_PRODUCTS_DATA,
    payload: products
  }
}
