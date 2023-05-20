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

// Hooks
import { useStep } from '../../hooks/useStep'
import { useOrder } from '../../hooks/useOrder'

const messagesEs = {
  Alert: 'Ha ocurrido un problema'
}

const quantityItem = (itemTicket: any, order: any): any => {
  if (order.items.length > 0) {
    const filterItems = order.items.find((item: any) => item.id === itemTicket.id)

    if (filterItems === undefined) {
      return itemTicket.quantity
    }

    return filterItems.quantity
  }

  return itemTicket.quantity
}

const StepDate = ({ offer }: StepperProps): JSX.Element => {
  // Context
  const { step, addStep, prevStep: prevStepState } = useStep()
  const { order, addItem, removeItem } = useOrder()
  console.log('Order State', order)

  const [num, setNum] = useState(0)
  const [selected, setSelected] = React.useState<Date>()
  const tickets = offer?.tickets ?? []
  const onSubmit = (): void => {
    addStep()
  }
  const prevStep = (): void => {
    prevStepState()
  }
  const incNum = (item: any): any => {
    addItem(item, 'Fecha de visita')
  }
  const decNum = (item: any): any => {
    removeItem(item, 'Fecha de visita')
  }
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    // Object

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
      <div className='flex justify-center m-4 border-blue-900 rounded-2xl font-bold p-2 bg-blue-900'>
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
          {tickets.map((itemTicket: any, index: number) => (
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
                    <button className='' type='button' onClick={() => decNum(itemTicket)}>-</button>
                  </div>
                  <input className='w-[35px] mx-[0.5rem] text-center border-solid border-2' type='text' value={quantityItem(itemTicket, order)} onChange={handleChange} />
                  <div className=''>
                    <button className='' type='button' onClick={() => incNum(itemTicket)}>+</button>
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
