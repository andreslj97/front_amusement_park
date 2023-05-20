import { listSteps } from '../../../public/listConfig/list'

// Components
import StepDate from './StepDate'
import StepPayment from './StepPayment'
import StepFinish from './StepFinish'
import { useStep } from '../../hooks/useStep'

const Steps = (): JSX.Element => {
  const { step } = useStep()
  // Evento activo !
  const offers = listSteps.filter((x) => x.activo)[0].ofertas ?? []
  const offer = offers[step]
  return (
    <>
      {
        offer.tipo === 'Calendario'
          ? <StepDate key={offer.nombre} offer={offer} />
          : offer.tipo === 'Datos'
            ? <StepPayment key={offer.nombre} />
            : offer.tipo === 'Finalizar' &&
              <StepFinish key={offer.nombre} />
      }
    </>
  )
}

export default Steps
