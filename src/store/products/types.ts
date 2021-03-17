export type ProductsLibraryType = {
  [key: string] : ProductItemType
}

export type ProductItemType = {
  id: string,
  name: string
}

export const SET_PRODUCTS_DATA = 'SET_PRODUCTS_DATA'

interface SetProductsDataAction {
  type: typeof SET_PRODUCTS_DATA
  payload: ProductsLibraryType
}

export type ProductActionTypes = SetProductsDataAction
