interface ProductsList {
  1: ProductItem
  2: ProductItem
  3: ProductItem
  4: ProductItem
  5: ProductItem
}

export interface ProductItem {
  name: string
}

export const products: ProductsList = {
  1: {
    name: "Resume"
  },
  2: {
    name: "Placeholder One"
  },
  3: {
    name: "Placeholder Two"
  },
  4: {
    name: "Placeholder Three"
  },
  5: {
    name: "Placeholder Four"
  }
}