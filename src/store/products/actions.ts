import { ProductsLibraryType, SET_PRODUCTS_DATA, ProductActionTypes } from './types'

export function setProductsData(products: ProductsLibraryType): ProductActionTypes {
  return {
    type: SET_PRODUCTS_DATA,
    payload: products
  }
}
