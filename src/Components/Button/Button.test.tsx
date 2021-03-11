import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])
const store = mockStore({
  "1": {
    id: "1",
    name: "Resume"
  }
})

const mockAddToCart = jest.fn()

test('Product is added to cart when Add To Cart button is clicked', () => {
  render(
    <Provider store={ store }>
      < Button
        id={"1"}
        variant="" 
        name="Add To Cart" 
        onClick={mockAddToCart}
      />
    </Provider>
  )
  const button = screen.getAllByText('Add To Cart')[0]
  fireEvent.click(button)

  expect(mockAddToCart).toBeCalledTimes(1)
})