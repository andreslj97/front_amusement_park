import { StepperProps } from '../../types'
import Button from './Button'

const StepPayment = ({ setStep, step }: StepperProps): JSX.Element => {
  const onSubmit = (): void => {
    setStep((currentStep) => currentStep + 1)
  }
  const prevStep = (): void => {
    setStep((currentStep) => currentStep - 1)
  }
  return (
    <>
      <div className='flex justify-center m-4 border-yellow-500 border-solid border-2 rounded-2xl font-bold p-2 bg-yellow-500'>
        <span className='text-white'> Datos de compra </span>
      </div>
      <Button fnOnclick={prevStep} text='Atrás' />
      <Button fnOnclick={onSubmit} text='Continuar' />
    </>
  )
}

export default StepPayment
