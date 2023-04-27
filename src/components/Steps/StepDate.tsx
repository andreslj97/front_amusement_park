import { StepperProps } from '../../types'
import Button from './Button'

const StepDate = ({ setStep, step }: StepperProps): JSX.Element => {
  const onSubmit = (): void => {
    setStep((currentStep) => currentStep + 1)
  }
  return (
    <>
      <div className='flex justify-center m-4 border-blue-900 border-solid border-2 rounded-2xl font-bold p-2 bg-blue-900'>
        <span className='text-white'> Fecha de visita </span>
      </div>
      <Button fnOnclick={onSubmit} text='Continuar' />
    </>
  )
}

export default StepDate
