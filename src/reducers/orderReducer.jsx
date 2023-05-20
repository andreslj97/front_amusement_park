// Inital State
export const orderInitialState = {}

// Actions
export const ORDER_ACTIONS_TYPES = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM'
}

export const orderReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case ORDER_ACTIONS_TYPES.ADD_ITEM: {
      return {}
    }
    case ORDER_ACTIONS_TYPES.REMOVE_ITEM: {
      return {}
    }
  }
}
