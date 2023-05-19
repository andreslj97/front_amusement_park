// Initial State
export const stepInitialState = 0

// Actions
export const STEP_ACTIONS_TYPES = {
  CHANGE_STEP: 'CHANGE_STEP',
  ADD_STEP: 'ADD_STEP',
  PREV_STEP: 'PREV_STEP'
}

export const stepReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case STEP_ACTIONS_TYPES.CHANGE_STEP: {
      const newState = actionPayload

      return newState
    }
    case STEP_ACTIONS_TYPES.ADD_STEP: {
      const newState = state + 1

      return newState
    }
    case STEP_ACTIONS_TYPES.PREV_STEP: {
      const newState = state - 1

      return newState
    }
  }
}
