interface ProductsList {
  [key: string] : ProductItem
}

export interface ProductItem {
  id: string,
  name: string
}

interface Id {
  id: string
}

export const products: ProductsList = {
  "1": {
    id: "1",
    name: "Resume"
  },
  "2": {
    id: "2",
    name: "Placeholder One"
  },
  "3": {
    id: "3",
    name: "Placeholder Two"
  },
  "4": {
    id: "4",
    name: "Placeholder Three"
  },
  "5": {
    id: "5",
    name: "Placeholder Four"
  }
}