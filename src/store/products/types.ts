export type ProductsLibraryType = {
  [key: string] : ProductItemType
}

export type ProductItemType = {
  id: string,
  name: string,
  rating: number,
  numberOfReviews: number
}

export const SET_PRODUCTS_DATA = 'SET_PRODUCTS_DATA'

interface SetProductsDataAction {
  readonly type: typeof SET_PRODUCTS_DATA
  payload: ProductsLibraryType
}

export type ProductActionTypes = SetProductsDataAction
