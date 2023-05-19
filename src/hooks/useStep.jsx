import { useContext } from 'react'
import { StepContext } from './../context/stepContext'

export const useStep = () => {
  const context = useContext(StepContext)

  // Best practique, check if is undefined
  if (context === undefined) {
    throw new Error('useStep must be used within a StepProvider')
  }

  return context
}
