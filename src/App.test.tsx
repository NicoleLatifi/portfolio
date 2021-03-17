import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([])
const store = mockStore({
  products: {
    "1": {
      id: "1",
      name: "Resume"
    }
  },
  cart: {}
})

test('renders header', () => {
  render(
    <Provider store={ store }>
      <App />
    </Provider>
  )
  const header = screen.getByText('Nicole Latifi')
  expect(header).toBeInTheDocument()
})

test('renders product name', () => {
  render(
    <Provider store={ store }>
      <App />
    </Provider>
  )
  const name = screen.getByText('Resume')
  expect(name).toBeInTheDocument()
})

test('renders Add To Cart button', () => {
  render(
    <Provider store={ store }>
      <App />
    </Provider>
  )
  const button = screen.getAllByText('Add To Cart')[0]
  expect(button).toBeInTheDocument()
})