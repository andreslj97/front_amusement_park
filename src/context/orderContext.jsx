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

  const updateData = (data) => dispatch({
    type: 'UPDATE_DATES',
    payload: data
  })

  const updateDateVisit = (data) => dispatch({
    type: 'DATE_VISIT',
    payload: data
  })

  return { state, addItem, removeItem, updateData, updateDateVisit }
}

// Create provider
export const OrderProvider = ({ children }) => {
  const { state, addItem, removeItem, updateData, updateDateVisit } = useOrderReducer()

  return (
    <OrderContext.Provider
      value={{
        order: state,
        addItem,
        removeItem,
        updateData,
        updateDateVisit
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
