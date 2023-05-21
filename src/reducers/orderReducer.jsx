// Order Data
import orderData from '../data/orderData'

// Inital State
export const orderInitialState = orderData

// Actions
export const ORDER_ACTIONS_TYPES = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_DATES: 'UPDATE_DATES'
}

export const orderReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case ORDER_ACTIONS_TYPES.ADD_ITEM: {
      const { item, section } = actionPayload

      const newState = structuredClone(state)
      const itemClone = structuredClone(item)
      const indexItem = newState.items.findIndex(itemIndex => itemIndex.id === itemClone.id)

      if (indexItem !== -1) {
        newState.items[indexItem].quantity += 1
      } else {
        // Add quantity
        itemClone.quantity += 1

        // Push new item
        newState.items.push(itemClone)
      }

      // Add total
      newState[section].total += itemClone.precio_descuento
      newState.total += itemClone.precio_descuento

      return newState
    }
    case ORDER_ACTIONS_TYPES.REMOVE_ITEM: {
      const { item, section } = actionPayload

      const newState = structuredClone(state)
      const itemClone = structuredClone(item)

      const indexItem = newState.items.findIndex(itemIndex => itemIndex.id === itemClone.id)

      if (indexItem !== -1) {
        // Rest quantity
        const newQuantity = newState.items[indexItem].quantity - 1

        // Check if quantity is zero
        if (newQuantity === 0) {
          const newItems = newState.items.filter(itemFilter => itemFilter.id !== itemClone.id)
          newState.items = newItems
        } else if (newQuantity > 0) {
          newState.items[indexItem].quantity = newQuantity
        }
      } else {
        return newState
      }

      // Add total
      newState[section].total -= itemClone.precio_descuento
      newState.total -= itemClone.precio_descuento

      return newState
    }
    case ORDER_ACTIONS_TYPES.UPDATE_DATES: {
      const data = actionPayload
      const newState = structuredClone(state)
      newState.dates = data

      return newState
    }
  }
}
