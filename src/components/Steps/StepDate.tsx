import React, { useState } from 'react'
import { FormattedNumber, IntlProvider } from 'react-intl'

import { StepperProps, ItemTicket } from '../../types'
import { ButtonSuccess, ButtonReturn } from './Button'
import Image from 'next/image'

import ImgTicket1 from '../../../public/Images/ticket1.png'
import ImgTicket2 from '../../../public/Images/ticket2.png'
import ImgTicket3 from '../../../public/Images/ticket3.png'

import { format } from 'date-fns'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

const messagesEs = {
  Alert: 'Ha ocurrido un problema'
}

const StepDate = ({ setStep, step, offer }: StepperProps): JSX.Element => {
  const [num, setNum] = useState(0)
  const [selected, setSelected] = React.useState<Date>()
  const tickets = offer?.tickets ?? []
  const onSubmit = (): void => {
    setStep((currentStep) => currentStep + 1)
  }
  const prevStep = (): void => {
    setStep((currentStep) => currentStep - 1)
  }
  const incNum = (): void => {
    if (num < 10) {
      setNum(Number(num) + 1)
    }
  }
  const decNum = (): void => {
    if (num > 0) {
      setNum(num - 1)
    }
  }
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const quantity = Number(e.currentTarget.value)
    if (isNaN(quantity)) return
    setNum(quantity)
  }
  let footer = <p>Please pick a day.</p>
  if (selected != null) {
    footer = <p>You picked {format(selected, 'PP')}.</p>
  }
  return (
    <IntlProvider messages={messagesEs} locale='en' defaultLocale='en'>
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
          <div className='bg-[#ADC03A] text-[#20477D] text-lg text-center p-1 uppercase rounded-t-lg top-[-11px] relative'>{offer?.nombre}</div>
          <div className='bg-[#20477D] text-[#fff] text-center p-1 top-[-11px] relative'>Fecha de visita</div>
          {tickets.map((itemTicket: ItemTicket, index: number) => (
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
              <div className='max-w-[60%] text-base font-thin pr-[8px]'>{itemTicket.description}</div>
              <div className='max-w-[20%]'>
                <div>
                  {itemTicket.precio_full !== 0 &&
                    <div className='text-[#8B8A8A] line-through'>
                      <FormattedNumber value={itemTicket.precio_full} style='currency' currency='USD' minimumFractionDigits={0} maximumFractionDigits={0} />
                    </div>}
                  <div className=''><FormattedNumber value={itemTicket.precio_descuento} style='currency' currency='USD' minimumFractionDigits={0} maximumFractionDigits={0} /></div>
                </div>
                <div className='flex align-center justify-center'>
                  <div className=''>
                    <button className='' type='button' onClick={decNum}>-</button>
                  </div>
                  <input className='w-[35px] mx-[0.5rem] text-center border-solid border-2' type='text' value={num} onChange={handleChange} />
                  <div className=''>
                    <button className='' type='button' onClick={incNum}>+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-content-end'>
        {step !== 0
          ? <ButtonReturn fnOnclick={prevStep} text='Atrás' />
          : <></>}
        <ButtonSuccess fnOnclick={onSubmit} text='Continuar' />
      </div>
    </IntlProvider>
  )
}

export default StepDate
