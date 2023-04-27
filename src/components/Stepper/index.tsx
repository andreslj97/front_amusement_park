import React from 'react'
import { StepperProps, StepsName } from '../../types'

export const Stepper = ({ setStep, step }: StepperProps): JSX.Element => {
  const handleSetStep = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    if (step >= Number(e.currentTarget.innerText)) {
      setStep(Number(e.currentTarget.innerText))
    }
  }

  return (
    <div
      className='pasos flex justify-around items-center'
    >
      <div className=''>
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            handleSetStep(e)}
          className=''
        >
          {step < StepsName.FechaVisita
            ? (
              <>
                Fecha de visita (inactivo)
                {StepsName.FechaVisita}
              </>
              )
            : (
              <>
                Fecha de visita (activo)
                {StepsName.FechaVisita}
              </>
              )}
        </button>
      </div>
      <span className='w-10 h-1 border-2 border-black' />
      <div className=''>
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            handleSetStep(e)}
          className=''
        >
          {step < StepsName.MejoraExperiencia
            ? (
              <>
                Mejora tu experiencia (inactivo)
                {StepsName.MejoraExperiencia}
              </>
              )
            : (
              <>
                Mejora tu experiencia (activo)
                {StepsName.MejoraExperiencia}
              </>
              )}
        </button>
      </div>
      <span className='w-10 h-1 border-2 border-black' />
      <div className=''>
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            handleSetStep(e)}
          className=''
        >
          {step < StepsName.DatosCompra
            ? (
              <>
                Datos de compra (inactivo)
                {StepsName.DatosCompra}
              </>
              )
            : (
              <>
                Datos de compra (activo)
                {StepsName.DatosCompra}
              </>
              )}
        </button>
      </div>
      <span className='w-10 h-1 border-2 border-black' />
      <div className=''>
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            handleSetStep(e)}
          className=''
        >
          {step < StepsName.FinalizaCompra
            ? (
              <>
                Finalizar compra (inactivo)
                {StepsName.FinalizaCompra}
              </>
              )
            : (
              <>
                Finalizar compra (activo)
                {StepsName.FinalizaCompra}
              </>
              )}
        </button>
      </div>
    </div>
  )
}
