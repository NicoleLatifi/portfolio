export interface ProductsLibrary {
  [key: string] : ProductItem
}

export interface ProductItem {
  id: string,
  name: string,
  price: number,
  rating: number,
  numberOfReviews: number
}

export const products: ProductsLibrary = {
  "1": {
    id: "1",
    name: "Resume",
    price: 3,
    rating: 5,
    numberOfReviews: 1
  },
  "2": {
    id: "2",
    name: "Placeholder One",
    price: 4,
    rating: 3,
    numberOfReviews: 1
  },
  "3": {
    id: "3",
    name: "Placeholder Two",
    price: 0,
    rating: 4,
    numberOfReviews: 1
  },
  "4": {
    id: "4",
    name: "Placeholder Three",
    price: 0,
    rating: 0,
    numberOfReviews: 0
  },
  "5": {
    id: "5",
    name: "Placeholder Four",
    price: 0,
    rating: 0,
    numberOfReviews: 0
  }
}