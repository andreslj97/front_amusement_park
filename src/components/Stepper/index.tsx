import React from 'react'
import { listSteps } from '../../../public/listConfig/list'
import { Offer } from '../../types'
import { useStep } from '../../hooks/useStep'

export const Stepper = (): JSX.Element => {
  const { step } = useStep()
  const stepActive = listSteps.filter((x) => x.activo)[0] ?? []
  // const handleSetStep = (
  //   e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  //   index: number
  // ): void => {
  //   changeStep(Number(index))
  // }

  return (
    <div
      className='pasos flex justify-center items-center text-[0px] mt-[1rem] text-white'
    >
      {stepActive.ofertas?.map((offerActive: Offer, index: number, row) => (
        <div key={offerActive.nombre} className='flex items-center'>
          <button
            // onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            //   handleSetStep(e, index)}
            className=''
          >
            {step < index
              ? (
                <>
                  <div className='btn-round-medium text-base bg-blue'>
                    {offerActive.nombre}
                  </div>
                  {index}
                </>
                )
              : (
                <>
                  <div className='btn-round-medium text-base bg-yellow'>
                    {offerActive.nombre}
                  </div>
                  {index}
                </>
                )}
          </button>
          {index + 1 < row.length &&
            <span className='w-10 hidden md:block  h-1 border-2 text-base border-yellow' />}
        </div>
      ))}
    </div>
  )
}
