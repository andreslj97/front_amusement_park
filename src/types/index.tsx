export interface ButtonType {
  fnOnclick: () => void
  text: string
}

export interface StepperProps {
  setStep: React.Dispatch<React.SetStateAction<number>>
  step: number
}

export enum StepsName {
  FechaVisita = 0,
  MejoraExperiencia = 1,
  DatosCompra = 2,
  FinalizaCompra = 3,
}
