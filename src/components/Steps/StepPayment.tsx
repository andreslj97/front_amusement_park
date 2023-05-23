import { ButtonSuccess, ButtonReturn } from './Button'
import { FormattedNumber, IntlProvider } from 'react-intl'
import { format } from 'date-fns'
import esLocale from 'date-fns/locale/es'
import { useStep } from '../../hooks/useStep'
import { useOrder } from '../../hooks/useOrder'
import Image from 'next/image'
import { listSteps } from '../../../public/listConfig/list'
import ImgTicket1 from '../../../public/Images/ticket1.png'
import ImgTicket2 from '../../../public/Images/ticket2.png'
import ImgTicket3 from '../../../public/Images/ticket3.png'
import { useState } from 'react'
import { regExpInputs } from '../../utils/regExp'

const StepPayment = (): JSX.Element => {
  const { order, updateData }: any = useOrder()
  const { dates } = order
  const { dates: { name, lastname, city, typeID, email, phone } } = order
  const { addStep, prevStep: prevStepState } = useStep()
  const [errorValidate, setError] = useState({
    errorName: true,
    errorLastname: true,
    errorCity: true,
    errorEmail: true,
    errorPhone: true
  })
  const listFilter = listSteps.filter((list) => {
    return list.activo
  })
  let tickets: any = []

  listFilter.forEach(item => {
    const { ofertas } = item
    const findTickets = ofertas.filter(ticket => ticket.tickets !== undefined)
    tickets = findTickets
  })
  const validateData = (): void => {
    if (regExpInputs.regExpUserName.test(dates.name.replaceAll(' ', '')) && dates.name !== '') {
      setError({ ...errorValidate, errorName: false })
    } else {
      setError({ ...errorValidate, errorName: true })
    }
  }
  const onSubmit = (): void => {
    // addStep()
    validateData()
    console.log('Va a validar', dates)
  }
  const prevStep = (): void => {
    prevStepState()
  }
  const onChangeDates = (dates: any): any => {
    validateData()
    updateData(dates)
  }
  const messagesEs = {
    Alert: 'Ha ocurrido un problema'
  }

  return (
    <IntlProvider messages={messagesEs} locale='en' defaultLocale='en'>
      <div className='flex justify-center m-4 border-yellow-500 border-solid border-2 rounded-2xl font-bold p-2 bg-yellow-500'>
        <div className='w-[50%]'>
          <form className='w-full max-w-lg' onSubmit={onSubmit}>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                  Nombres
                </label>
                <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-first-name' type='text' placeholder='' value={name} onChange={(e) => onChangeDates({ ...dates, name: e.target.value })} />
                {errorValidate.errorName &&
                  <p className='text-red-500 text-xs italic'>Completa el campo.</p>}
              </div>
              <div className='w-full md:w-1/2 px-3'>
                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                  Apellidos
                </label>
                <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-last-name' type='text' placeholder='' value={lastname} onChange={(e) => onChangeDates({ ...dates, lastname: e.target.value })} />
                <p className='text-red-500 text-xs italic'>Completa el campo.</p>
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                  Ciudad
                </label>
                <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-first-name' type='text' placeholder='' value={city} onChange={(e) => onChangeDates({ ...dates, city: e.target.value })} />
                <p className='text-red-500 text-xs italic'>Completa el campo.</p>
              </div>
              <div className='w-full md:w-1/2 px-3'>
                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                  Tipo de identificación
                </label>
                <div className='relative'>
                  <select className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-state' onChange={(e) => onChangeDates({ ...dates, typeID: e.target.value })}>
                    <option>CC</option>
                    <option>TI</option>
                  </select>
                  <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                    <svg className='fill-current h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' /></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                  Email
                </label>
                <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-first-name' type='text' placeholder='' value={email} onChange={(e) => onChangeDates({ ...dates, email: e.target.value })} />
                <p className='text-red-500 text-xs italic'>Completa el campo.</p>
              </div>
              <div className='w-full md:w-1/2 px-3'>
                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                  Celular
                </label>
                <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-last-name' type='text' placeholder='' value={phone} onChange={(e) => onChangeDates({ ...dates, phone: e.target.value })} />
                <p className='text-red-500 text-xs italic'>Completa el campo.</p>
              </div>
            </div>
          </form>
        </div>
        <div className='w-[50%] flex flex-col justify-center border-blue-900 border-solid border-2 rounded-2xl'>
          <div className='bg-[#ADC03A] text-[#20477D] text-lg text-center p-1 uppercase rounded-t-lg top-[-11px] relative'>Resumen de tu compra</div>
          <div className='bg-[#20477D] text-[#fff] text-center p-1 top-[-11px] relative'>Fecha de visita: {format(order.dateOfVisit, 'PPP', { locale: esLocale })}</div>
          <div className='h-[18rem] overflow-x-hidden overflow-y-auto'>
            {/* <p>{name}</p>
            <p>{lastname}</p>
            <p>{city}</p>
            <p>{typeID}</p>
            <p>{email}</p>
            <p>{phone}</p> */}
            {
              order.items.length > 0
                ? order.items.map((item: any, index: number): any => {
                  return (
                    <div key={item.id} className='w-[100%] mt-[1rem] flex justify-evenly items-center'>
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
                      <div className='w-[60%] text-base font-thin pr-[8px]'>{item.description}</div>
                      <p className='w-[10%] text-center'>{item.quantity}</p>
                      <p>{item.precio_descuento}</p>
                    </div>
                  )
                })
                : null
            }
            {order.total !== 0 &&
              <div className='bg-[#ADC03A] text-[#fff] text-center p-1 top-[10px] border-t-2 relative'>
                Total: <FormattedNumber value={order.total} style='currency' currency='USD' minimumFractionDigits={0} maximumFractionDigits={0} />
              </div>}
          </div>
        </div>
      </div>
      <div className='flex justify-content-end'>
        <ButtonReturn fnOnclick={prevStep} text='Atrás' />
        <ButtonSuccess fnOnclick={onSubmit} text='Continuar' />
      </div>
    </IntlProvider>
  )
}

export default StepPayment
