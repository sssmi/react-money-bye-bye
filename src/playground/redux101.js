import { createStore } from 'redux'

// If no args given, empty object as default, and incrementBy defaults 1
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy,
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy,
})

const resetCount = () => ({
  type: 'RESET',
})

const setCount = ({ count }) => ({
  // no default values, forces user to provide count
  type: 'SET',
  count,
})

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

// basically same as:
// this.setState((prevState) => {
//  return prevState
// })
const countReducer = (state = { count: 0 }, action) => {
  // if (action.type === 'INCREMENT')
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy,
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy,
      }
    case 'RESET':
      return {
        count: 0,
      }
    case 'SET':
      return {
        count: action.count,
      }
    default:
      return state
  }
}

const store = createStore(countReducer)

// Gets called every time the store changes
// return value of subscribe is a function which unsubscribes
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// store.dispatch({ // send the object to redux
//   type: 'INCREMENT',
//   incrementBy: 5,
// })

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

// unsubscribe()

store.dispatch(resetCount())

store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch(setCount({ count: 666 }))
