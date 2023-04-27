import { StepperProps, StepsName } from '../../types'

// Components
import StepDate from './StepDate'
import StepExperience from './StepExperience'
import StepPayment from './StepPayment'
import StepFinish from './StepFinish'

const Steps = ({ setStep, step }: StepperProps): JSX.Element => {
  // Add context status to manage steps !

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
