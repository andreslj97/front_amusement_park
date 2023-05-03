import React from 'react'
import Image from 'next/image'
import { format } from 'date-fns'
import { DayPicker } from 'react-day-picker'

// Images
import ImgTicket1 from '../../../public/Images/ticket1.png'
import ImgTicket2 from '../../../public/Images/ticket2.png'
import ImgTicket3 from '../../../public/Images/ticket3.png'

// Components
import { StepperProps, ItemExperience } from '../../types'
import Button from './Button'
import { listExperience } from '../../../public/listConfig/list'

// Helpers
import { formatNumber } from '../../utils/helper'

const StepExperience = ({ setStep, step }: StepperProps): JSX.Element => {
  const [selected, setSelected] = React.useState<Date>()
  let footer = <p>Please pick a day.</p>
  if (selected != null) {
    footer = <p>You picked {format(selected, 'PP')}.</p>
  }
  const onSubmit = (): void => {
    setStep((currentStep) => currentStep + 1)
  }
  const prevStep = (): void => {
    setStep((currentStep) => currentStep - 1)
  }
  return (
    <>
      <div className='flex justify-center m-4'>
        <div className='w-[50%] flex justify-center'>
          <DayPicker
            mode='single'
            selected={selected}
            onSelect={setSelected}
            footer={footer}
          />
        </div>
        <div className='w-[50%] flex flex-col justify-center'>
          {listExperience.map((itemExperience: ItemExperience, index: number) => (
            <div key={itemExperience.description} className='w-[100%] flex justify-evenly items-center'>
              {index === 0
                ? <Image
                    src={ImgTicket1}
                    alt='user profile picture'
                    width={121}
                  />
                : index === 1
                  ? <Image
                      src={ImgTicket2}
                      alt='user profile picture'
                      width={121}
                    />
                  : <Image
                      src={ImgTicket3}
                      alt='user profile picture'
                      width={121}
                    />}
              <div className='max-w-[60%] text-base font-thin'>{itemExperience.description}</div>
              <div className='max-w-[60%] text-base font-thin'>
                ${formatNumber(itemExperience.total)}
                <button> - </button>
                <span> 0 </span>
                <button> + </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button fnOnclick={prevStep} text='Atrás' />
      <Button fnOnclick={onSubmit} text='Continuar' />
    </>
  )
}

export default StepExperience
