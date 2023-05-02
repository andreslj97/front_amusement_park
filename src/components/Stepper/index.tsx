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
      className='pasos flex justify-center items-center text-[0px] mt-[1rem] text-white'
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
                <div className='btn-round-medium text-base bg-blue'>
                  Fecha de visita
                </div>
                {StepsName.FechaVisita}
              </>
              )
            : (
              <>
                <div className='btn-round-medium text-base bg-yellow'>
                  Fecha de visita
                </div>
                {StepsName.FechaVisita}
              </>
              )}
        </button>
      </div>
      <span className='w-10 h-1 border-2 text-base border-yellow' />
      <div className=''>
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            handleSetStep(e)}
          className=''
        >
          {step < StepsName.MejoraExperiencia
            ? (
              <>
                <div className='btn-round-medium text-base bg-blue'>
                  Mejora tu experiencia
                </div>
                {StepsName.MejoraExperiencia}
              </>
              )
            : (
              <>
                <div className='btn-round-medium text-base bg-yellow'>
                  Mejora tu experiencia
                </div>
                {StepsName.MejoraExperiencia}
              </>
              )}
        </button>
      </div>
      <span className='w-10 h-1 border-2 text-base border-yellow' />
      <div className=''>
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            handleSetStep(e)}
          className=''
        >
          {step < StepsName.DatosCompra
            ? (
              <>
                <div className='btn-round-medium text-base bg-blue'>
                  Datos de compra
                </div>
                {StepsName.DatosCompra}
              </>
              )
            : (
              <>
                <div className='btn-round-medium text-base bg-yellow'>
                  Datos de compra
                </div>
                {StepsName.DatosCompra}
              </>
              )}
        </button>
      </div>
      <span className='w-10 h-1 border-2 text-base border-yellow' />
      <div className=''>
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            handleSetStep(e)}
          className=''
        >
          {step < StepsName.FinalizaCompra
            ? (
              <>
                <div className='btn-round-medium text-base bg-blue'>
                  Finalizar compra
                </div>
                {StepsName.FinalizaCompra}
              </>
              )
            : (
              <>
                <div className='btn-round-medium text-base bg-yellow'>
                  Finalizar compra
                </div>
                {StepsName.FinalizaCompra}
              </>
              )}
        </button>
      </div>
    </div>
  )
}
