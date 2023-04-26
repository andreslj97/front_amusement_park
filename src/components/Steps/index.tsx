// Components
import StepDate from './StepDate'
import StepExperience from './StepExperience'
import StepPayment from './StepPayment'
import StepFinish from './StepFinish'
import Button from './Button'

const Steps = (): JSX.Element => {
  // Add context status to manage steps !

  return (
    <>
      <StepDate />
      <StepExperience />
      <StepPayment />
      <StepFinish />
      <Button />
    </>
  )
}

export default Steps
