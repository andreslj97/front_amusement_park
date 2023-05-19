// React
import { useReducer, createContext } from 'react'

// Reducers
import { stepInitialState, stepReducer } from '../reducers/stepReducer'

// Create context
export const StepContext = createContext()

// Reducer
const useStepReducer = () => {
  const [state, dispatch] = useReducer(stepReducer, stepInitialState)

  const changeStep = step => dispatch({
    type: 'CHANGE_STEP',
    payload: step
  })

  const addStep = () => dispatch({
    type: 'ADD_STEP',
    payload: null
  })

  const prevStep = () => dispatch({
    type: 'PREV_STEP',
    payload: null
  })

  return { state, changeStep, addStep, prevStep }
}

// Create provider
export const StepProvider = ({ children }) => {
  const { state, changeStep, addStep, prevStep } = useStepReducer()

  return (
    <StepContext.Provider
      value={{
        step: state,
        changeStep,
        addStep,
        prevStep
      }}
    >
      {children}
    </StepContext.Provider>
  )
}
