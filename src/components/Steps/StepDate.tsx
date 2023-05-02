import React from 'react'
import { StepperProps, ItemTicket } from '../../types'
import Button from './Button'
import Image from 'next/image'

import ImgTicket1 from '../../../public/Images/ticket1.png'
import ImgTicket2 from '../../../public/Images/ticket2.png'
import ImgTicket3 from '../../../public/Images/ticket3.png'

import { format } from 'date-fns'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

import { listTickets } from '../../../public/listConfig/list'

const StepDate = ({ setStep, step }: StepperProps): JSX.Element => {
  const [selected, setSelected] = React.useState<Date>()
  const onSubmit = (): void => {
    setStep((currentStep) => currentStep + 1)
  }
  let footer = <p>Please pick a day.</p>
  if (selected != null) {
    footer = <p>You picked {format(selected, 'PP')}.</p>
  }
  return (
    <>
      <div className='flex justify-center m-4 border-blue-900 border-solid border-2 rounded-2xl font-bold p-2 bg-blue-900'>
        <span className='text-white'> Fecha de visita </span>
        <div className='w-[50%] flex justify-center'>
          <DayPicker
            mode='single'
            selected={selected}
            onSelect={setSelected}
            footer={footer}
          />
        </div>
        <div className='w-[50%] flex flex-col justify-center border-blue-900 border-solid border-2 rounded-2xl'>
          {listTickets.map((itemTicket: ItemTicket, index: number) => (
            <div key={itemTicket.description} className='w-[100%] flex justify-evenly items-center'>
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
              <div className='max-w-[60%] text-base font-thin'>{itemTicket.description}</div>
            </div>
          ))}
        </div>
      </div>
      <Button fnOnclick={onSubmit} text='Continuar' />
    </>
  )
}

export default StepDate
