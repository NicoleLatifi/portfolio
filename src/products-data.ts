export interface ProductsLibrary {
  [key: string] : ProductItem
}

export interface ProductItem {
  id: string,
  name: string,
  rating: number,
  numberOfReviews: number
}

export const products: ProductsLibrary = {
  "1": {
    id: "1",
    name: "Resume",
    rating: 5,
    numberOfReviews: 1
  },
  "2": {
    id: "2",
    name: "Placeholder One",
    rating: 3,
    numberOfReviews: 1
  },
  "3": {
    id: "3",
    name: "Placeholder Two",
    rating: 4,
    numberOfReviews: 1
  },
  "4": {
    id: "4",
    name: "Placeholder Three",
    rating: 0,
    numberOfReviews: 0
  },
  "5": {
    id: "5",
    name: "Placeholder Four",
    rating: 0,
    numberOfReviews: 0
  }
}