import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import configureStore from 'redux-mock-store'
import { createBrowserHistory } from 'history'

import App from './App'

describe('With React Testing Library', () => {
  const initialState = {
    data: {
      images: [],
      inProgress: false,
    },
    auth: {
      isAuthenticated: false
    }
  }
  const mockStore = configureStore()
  const history = createBrowserHistory()

  it('renders without crashing', () => {
    const store = mockStore(initialState)
    const div = document.createElement('div')

    ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
