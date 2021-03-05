export interface ProductsLibrary {
  [key: string] : ProductItem
}

export interface ProductItem {
  id: string,
  name: string
}

export const SET_PRODUCTS_DATA = 'SET_PRODUCTS_DATA'

interface SetProductsDataAction {
  type: typeof SET_PRODUCTS_DATA
  payload: ProductsLibrary
}

export type ProductActionTypes = SetProductsDataAction
