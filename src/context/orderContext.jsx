// React
import { useReducer, createContext } from 'react'

// Reducers
import { orderInitialState, orderReducer } from '../reducers/orderReducer'

// Context
export const OrderContext = createContext()

// Reducer
const useOrderReducer = () => {
  const [state, dispatch] = useReducer(orderReducer, orderInitialState)

  const addItem = (item, section) => dispatch({
    type: 'ADD_ITEM',
    payload: {
      item,
      section
    }
  })

  const removeItem = (item, section) => dispatch({
    type: 'REMOVE_ITEM',
    payload: {
      item,
      section
    }
  })

  return { state, addItem, removeItem }
}

// Create provider
export const OrderProvider = ({ children }) => {
  const { state, addItem, removeItem } = useOrderReducer()

  return (
    <OrderContext.Provider
      value={{
        order: state,
        addItem,
        removeItem
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
