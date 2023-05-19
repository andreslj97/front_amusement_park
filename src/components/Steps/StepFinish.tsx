import { ButtonReturn } from './Button'
import { useStep } from '../../hooks/useStep'

const StepFinish = (): JSX.Element => {
  const { addStep } = useStep()
  const prevStep = (): void => {
    addStep()
  }
  return (
    <>
      <div className='w-[100%] mt-[3rem] flex flex-col justify-center border-blue-900 border-solid border-2 rounded-2xl'>
        <div className='bg-[#ADC03A] text-[#20477D] text-lg text-center p-1 uppercase rounded-t-lg relative'>Has finalizado tú compra!!</div>
        <div className='bg-[#20477D] text-[#fff] text-center p-1 relative'>Fecha de visita</div>
      </div>
      <div className='flex justify-content-end'>
        <ButtonReturn fnOnclick={prevStep} text='Atrás' />
      </div>
    </>
  )
}

export default StepFinish
