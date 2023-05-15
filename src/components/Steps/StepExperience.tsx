import { StepperProps } from '../../types'
import { ButtonSuccess, ButtonReturn } from './Button'

const StepExperience = ({ setStep, step }: StepperProps): JSX.Element => {
  const onSubmit = (): void => {
    setStep((currentStep) => currentStep + 1)
  }
  const prevStep = (): void => {
    setStep((currentStep) => currentStep - 1)
  }
  return (
    <>
      <div className='flex justify-center m-4 border-yellow-500 border-solid border-2 rounded-2xl font-bold p-2 bg-yellow-500'>
        <span className='text-white'> Mejora tu experiencia </span>
      </div>
      <div className='flex justify-content-end'>
        <ButtonReturn fnOnclick={prevStep} text='Atrás' />
        <ButtonSuccess fnOnclick={onSubmit} text='Continuar' />
      </div>
    </>
  )
}

export default StepExperience
