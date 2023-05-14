import { StepperProps, StepsName } from '../../types'
import { listSteps } from '../../../public/listConfig/list'

// Components
import StepDate from './StepDate'
import StepExperience from './StepExperience'
import StepPayment from './StepPayment'
import StepFinish from './StepFinish'

const Steps = ({ setStep, step }: StepperProps): JSX.Element => {
  // Evento activo !
  const stepActive = listSteps.filter((x) => x.activo)[0] ?? []
  console.log(stepActive)
  return (
    <>
      {step === StepsName.FechaVisita
        ? (
          <StepDate step={step} setStep={setStep} />
          )
        : step === StepsName.MejoraExperiencia
          ? (
            <StepExperience step={step} setStep={setStep} />
            )
          : step === StepsName.DatosCompra
            ? (
              <StepPayment step={step} setStep={setStep} />
              )
            : step === StepsName.FinalizaCompra &&
              <StepFinish step={step} setStep={setStep} />}
    </>
  )
}

export default Steps
