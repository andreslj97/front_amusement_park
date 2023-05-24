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

  const createError = (data) => dispatch({
    type: 'CREATE_ERROR',
    payload: data
  })

  const clearError = () => dispatch({
    type: 'CLEAR_ERROR',
    payload: null
  })

  return { state, addItem, removeItem, updateData, updateDateVisit, createError, clearError }
}

// Create provider
export const OrderProvider = ({ children }) => {
  const { state, addItem, removeItem, updateData, updateDateVisit, createError, clearError } = useOrderReducer()

  return (
    <OrderContext.Provider
      value={{
        order: state,
        addItem,
        removeItem,
        updateData,
        updateDateVisit,
        createError,
        clearError
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
