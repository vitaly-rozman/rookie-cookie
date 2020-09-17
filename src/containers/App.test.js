import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import App from './App'

describe('With React Testing Library', () => {
  const initialState = {
    data: {
      images: [],
      inProgress: false,
    }
  }
  const mockStore = configureStore()

  it('renders without crashing', () => {
    const store = mockStore(initialState)
    const div = document.createElement('div');

    ReactDOM.render(<Provider store={store}><App /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
