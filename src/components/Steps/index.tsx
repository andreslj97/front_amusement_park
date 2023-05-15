import { StepperProps } from '../../types'
import { listSteps } from '../../../public/listConfig/list'

// Components
import StepDate from './StepDate'
import StepPayment from './StepPayment'
import StepFinish from './StepFinish'

const Steps = ({ setStep, step }: StepperProps): JSX.Element => {
  // Evento activo !
  const offers = listSteps.filter((x) => x.activo)[0].ofertas ?? []
  const offer = offers[step]
  console.log(offers)
  return (
    <>
      {
        offer.tipo === 'Calendario'
          ? <StepDate key={offer.nombre} step={step} setStep={setStep} offer={offer} />
          : offer.tipo === 'Datos'
            ? <StepPayment key={offer.nombre} step={step} setStep={setStep} />
            : offer.tipo === 'Finalizar' &&
              <StepFinish key={offer.nombre} step={step} setStep={setStep} />
      }
    </>
  )
}

export default Steps
