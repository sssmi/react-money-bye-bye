import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'
import AppRouter from './routers/AppRouter.jsx'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses.jsx'
import { setTextFilter } from './actions/filters.jsx'
import getVisibleExpenses from './selectors/expenses.jsx'
import './styles/styles.scss'

const store = configureStore()

store.dispatch(addExpense({ description: 'Rent', amount: 666, createdAt: 114 }))
store.dispatch(addExpense({ description: 'Water Bill', amount: 45, createdAt: 666 }))
store.dispatch(addExpense({ description: 'Electicity Bill', amount: 78, createdAt: 9999 }))

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})

// setTimeout(() => {
//   store.dispatch(setTextFilter('water'))
// }, 3000)

const jsx = (
  // Provider allows us to "provide" a store to all of the components that make up the app
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
