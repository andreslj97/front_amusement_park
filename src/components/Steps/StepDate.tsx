import React, { useEffect } from 'react'
import { FormattedNumber, IntlProvider } from 'react-intl'

import { StepperProps } from '../../types'
import { ButtonSuccess, ButtonReturn } from './Button'
import Image from 'next/image'

import ImgTicket1 from '../../../public/Images/ticket1.png'
import ImgTicket2 from '../../../public/Images/ticket2.png'
import ImgTicket3 from '../../../public/Images/ticket3.png'

import { format } from 'date-fns'
import esLocale from 'date-fns/locale/es'
import 'react-day-picker/dist/style.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ClassNames, DayPicker } from 'react-day-picker'
import styles from 'react-day-picker/dist/style.module.css'
import customStyles from './day-picker.module.css'

// Hooks
import { useStep } from '../../hooks/useStep'
import { useOrder } from '../../hooks/useOrder'

const messagesEs = {
  Alert: 'Ha ocurrido un problema'
}

const classNames: ClassNames = {
  ...styles,
  head: 'custom-head',
  tbody: 'custom-body',
  tfoot: 'custom-tfoot',
  caption: 'custom-caption',
  caption_label: 'custom-caption_label',
  nav_button: 'custom-nav_button',
  day: 'custom-day',
  day_disabled: 'custom-day_disabled',
  day_selected: 'custom-day_selected',
  table: 'custom-table',
  cell: 'custom-cell'
}

const disabledDays = [
  { from: new Date(1900, 1, 1), to: new Date(new Date().setDate(new Date().getDay() + 2)) }
]

const quantityItem = (itemTicket: any, order: any): any => {
  if (order.items.length > 0) {
    const filterItems = order.items.find((item: any) => item.id === itemTicket.id)
    if (filterItems === undefined) {
      return 0
    }
    return filterItems.quantity
  }
  return 0
}

const StepDate = ({ offer }: StepperProps): JSX.Element => {
  // Context
  const { step, addStep, prevStep: prevStepState } = useStep()
  const { order, addItem, removeItem, updateDateVisit } = useOrder()
  const [selected, setSelected] = React.useState<Date>()
  const tickets = offer?.tickets ?? []
  const onSubmit = (): void => {
    if (order.dateOfVisit === '') {
      toast.error('Selecciona una fecha', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      })
    } else if (order.items.length === 0) {
      toast.error('Debes agregar Tickets', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      })
    } else {
      addStep()
    }
  }
  const prevStep = (): void => {
    prevStepState()
  }
  const incNum = (item: any): any => {
    addItem(item, offer?.nombre)
  }
  const decNum = (item: any): any => {
    removeItem(item, offer?.nombre)
  }
  useEffect(() => {
    if (selected != null) {
      updateDateVisit(selected)
    }
    console.log('Order State', order)
  }, [selected])

  let footer = <p>Seleccione el día de visita.</p>
  order.dateOfVisit === ''
    ? footer = <p><br />Selecciona tu fecha de visita.</p>
    : footer = <p><br />Fecha de visita : {format(order.dateOfVisit, 'PPP', { locale: esLocale })}.</p>

  return (
    <IntlProvider messages={messagesEs} locale='en' defaultLocale='en'>
      <div className='flex flex-col items-center md:flex-row md:items-start md:justify-center border-blue-900 rounded-2xl font-bold p-2 bg-blue-900'>
        <div className='w-[100%] md:w-[50%] flex justify-center'>
          <style>{`
            @media only screen and (max-width: 576px) {
              .custom-caption_label{
                font-size: 20px !important;
              }

              .custom-nav_button {
                transform: scale(1) !important;
              }

              .custom-day {
                width: 40px !important;
                height: 40px !important
              }
            }
            .custom-head {
              color: #20477D
            }
            .custom-caption{
              display:flex;
              text-transform: uppercase;
              align-items: center;
              justify-content: center;
            }
            .custom-caption_label{
              color: #20477D;
              font-size: 3rem
            }
            .custom-nav_button{
              color: #ADC03A;
              margin-inline: 2rem;
              transform: scale(2.5);
            }
            .custom-day{
              border: 2px solid #C5C5C5;
              border-radius: 0px;
              width: 4rem;
              height: 4rem;
            }
            .custom-day_disabled{
              background-color: #C5C5C5 !important;
              opacity: 1 !important;
              color: #717070 !important;
            }
            .custom-day_selected{
              background-color: #F5B723 !important;
            }
            .custom-table{
              width: 100%;
            }
            .custom-cell{
              margin: 15px;
            }
            .custom-tfoot{
              color: #20477D;
              text-align: center;
              text-transform: uppercase;
            }
          `}
          </style>
          <DayPicker
            locale={esLocale}
            mode='single'
            selected={order.dateOfVisit}
            onSelect={setSelected}
            footer={footer}
            modifiersClassNames={{
              day: customStyles.day
            }}
            classNames={classNames}
            disabled={disabledDays}
          />
        </div>
        <div className='w-[100%] md:w-[50%] flex flex-col justify-center md:mt-[4rem] border-blue-900 border-solid border-2 rounded-2xl'>
          <div className='bg-[#ADC03A] text-[#20477D] text-lg text-center p-1 uppercase rounded-t-lg top-[0px] relative'>{offer?.nombre}</div>
          <div className='bg-[#20477D] text-[#fff] text-center p-1 top-[0px] relative'>{order.dateOfVisit === '' ? 'Seleciona una fecha!' : `Fecha de visita: ${format(order.dateOfVisit, 'PPP', { locale: esLocale })}`}</div>
          <div className='max-h-[24rem] block relative overflow-x-hidden overflow-y-auto'>
            {tickets.map((itemTicket: any, index: number) => (
              <div key={itemTicket.name} className='w-[100%] p-4 md:p-0 flex border-b-[1px] justify-evenly items-center'>
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
                <div className='w-[60%] text-[0.9rem] font-thin pr-[8px]'>{itemTicket.name}</div>
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
                      <button className='' type='button' disabled={quantityItem(itemTicket, order) === 0} onClick={() => decNum(itemTicket)}>-</button>
                    </div>
                    <input className='w-[35px] mx-[0.5rem] text-center border-solid border-2' type='text' value={quantityItem(itemTicket, order)} readOnly />
                    <div className=''>
                      <button className='' type='button' onClick={() => incNum(itemTicket)}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {order['Fecha de visita'].total !== 0 &&
            <div className='bg-[#20477D] text-[#fff] text-center p-1 top-[10px] relative'>
              Boletos: <FormattedNumber value={order['Fecha de visita'].total} style='currency' currency='USD' minimumFractionDigits={0} maximumFractionDigits={0} />
            </div>}
          {order['Mejora tu visita'].total !== 0 &&
            <div className='bg-[#20477D] text-[#fff] text-center p-1 top-[10px] border-t-2 relative'>
              Adicionales: <FormattedNumber value={order['Mejora tu visita'].total} style='currency' currency='USD' minimumFractionDigits={0} maximumFractionDigits={0} />
            </div>}
          {order.total !== 0 &&
            <div className='bg-[#ADC03A] text-[#fff] text-center p-1 top-[10px] border-t-2 relative'>
              Total: <FormattedNumber value={order.total} style='currency' currency='USD' minimumFractionDigits={0} maximumFractionDigits={0} />
            </div>}
        </div>
      </div>
      <div className='flex justify-end'>
        {step !== 0
          ? <ButtonReturn fnOnclick={prevStep} text='Atrás' />
          : <></>}
        <ButtonSuccess fnOnclick={onSubmit} text='Continuar' />
      </div>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme='dark'
      />
    </IntlProvider>
  )
}

export default StepDate
