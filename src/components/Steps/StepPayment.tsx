import { ButtonSuccess, ButtonReturn } from './Button'
import { FormattedNumber, IntlProvider } from 'react-intl'
import { format } from 'date-fns'
import esLocale from 'date-fns/locale/es'
import { useStep } from '../../hooks/useStep'
import { useOrder } from '../../hooks/useOrder'
import Image from 'next/image'
// import { listSteps } from '../../../public/listConfig/list'
import ImgTicket1 from '../../../public/Images/ticket1.png'
import ImgTicket2 from '../../../public/Images/ticket2.png'
import ImgTicket3 from '../../../public/Images/ticket3.png'
import { useState } from 'react'
import { regExpInputs } from '../../utils/regExp'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const StepPayment = (): JSX.Element => {
  const { order, updateData }: any = useOrder()
  const { dates } = order
  const { dates: { name, lastname, city, email, phone, typeID } } = order
  const { prevStep: prevStepState, addStep } = useStep()
  const [errorValidate, setError] = useState({
    errorName: true,
    errorLastname: true,
    errorCity: true,
    errorEmail: true,
    errorPhone: true
  })

  const validateData = (): void => {
    console.log('Regexp', regExpInputs.regExpUserName.test(dates.name.replaceAll(' ', '')) && dates.name !== '')
    if (regExpInputs.regExpUserName.test(dates.name.replaceAll(' ', '')) && dates.name !== '') {
      console.log('No error un name')
      setError({ ...errorValidate, errorName: false })
    } else {
      setError({ ...errorValidate, errorName: true })
    }

    if (regExpInputs.regExpUserName.test(dates.lastname.replaceAll(' ', '')) && dates.lastname !== '') {
      setError({ ...errorValidate, errorLastname: false })
    } else {
      setError({ ...errorValidate, errorLastname: true })
    }

    if (regExpInputs.regExpUserName.test(dates.city.replaceAll(' ', '')) && dates.city !== '') {
      setError({ ...errorValidate, errorCity: false })
    } else {
      setError({ ...errorValidate, errorCity: true })
    }

    if (regExpInputs.regExpEmail.test(dates.email.replaceAll(' ', '')) && dates.email !== '') {
      setError({ ...errorValidate, errorEmail: false })
    } else {
      setError({ ...errorValidate, errorEmail: true })
    }

    if (regExpInputs.regExpUserName.test(dates.phone.replaceAll(' ', '')) && dates.phone !== '') {
      setError({ ...errorValidate, errorPhone: false })
    } else {
      setError({ ...errorValidate, errorPhone: true })
    }
  }
  const onSubmit = (): void => {
    if (name === '' || lastname === '' || city === '' || email === '' || phone === '' || typeID === '') {
      toast.error('Todos los campos son obligatorios', {
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
  const onChangeDates = (dates: any): any => {
    validateData()
    updateData(dates)
  }
  const messagesEs = {
    Alert: 'Ha ocurrido un problema'
  }

  console.log('Error', errorValidate)

  return (
    <IntlProvider messages={messagesEs} locale='en' defaultLocale='en'>
      <div className='flex flex-col items-center md:flex-row  md:justify-center md:m-4 border-yellow-500 border-solid border-2 rounded-2xl font-bold pt-5 pl-2 bg-yellow-500'>
        <div className='w-[100%] md:w-[50%]'>
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
                {errorValidate.errorLastname &&
                  <p className='text-red-500 text-xs italic'>Completa el campo.</p>}
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                  Ciudad
                </label>
                <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-first-name' type='text' placeholder='' value={city} onChange={(e) => onChangeDates({ ...dates, city: e.target.value })} />
                {errorValidate.errorCity &&
                  <p className='text-red-500 text-xs italic'>Completa el campo.</p>}
              </div>
              <div className='w-full md:w-1/2 px-3'>
                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                  Tipo de identificación
                </label>
                <div className='relative'>
                  <select className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-state' onChange={(e) => onChangeDates({ ...dates, typeID: e.target.value })}>
                    <option>Selecciona</option>
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
                {errorValidate.errorEmail &&
                  <p className='text-red-500 text-xs italic'>Completa el campo.</p>}
              </div>
              <div className='w-full md:w-1/2 px-3'>
                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                  Celular
                </label>
                <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-last-name' type='text' placeholder='' value={phone} onChange={(e) => onChangeDates({ ...dates, phone: e.target.value })} />
                {errorValidate.errorPhone &&
                  <p className='text-red-500 text-xs italic'>Completa el campo.</p>}
              </div>
            </div>
          </form>
        </div>
        <div className='w-[100%] md:w-[50%] flex flex-col justify-center border-blue-900 border-solid border-2 rounded-2xl'>
          <div className='bg-[#ADC03A] text-[#20477D] text-lg text-center p-1 uppercase rounded-t-lg top-[-11px] relative'>Resumen de tu compra</div>
          <div className='bg-[#20477D] text-[#fff] text-center p-1 top-[-11px] relative'>{order.dateOfVisit === '' ? 'Seleciona una fecha!' : `Fecha de visita: ${format(order.dateOfVisit, 'PPP', { locale: esLocale })}`}</div>
          <div className='h-[18rem] overflow-x-hidden overflow-y-auto'>
            {
              order.items.length > 0
                ? order.items.map((item: any, index: number): any => {
                  return (
                    <div key={item.id} className='w-[100%] flex border-b-[1px] justify-evenly items-center'>
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
                      <div className='w-[60%] text-[0.9rem] font-thin pr-[8px]'>{item.description}</div>
                      <p className='w-[10%] text-center'>{item.quantity}</p>
                      <p>{item.precio_descuento}</p>
                    </div>
                  )
                })
                : null
            }
            <div className='bg-[#F5B723] text-[#fff] text-center p-1 top-[10px] border-t-2 relative'>
              <div className='flex flex-row flex-nowrap justify-center items-center gap-[1rem]'>
                <label>
                  Codigo descuento
                </label>
                <input type='text' />
              </div>
              <div className='mt-5'>
                <button className='bg-gray-400/50 p-3 rounded-3xl'> Aplicar descuento </button>
              </div>
            </div>
            {order.total !== 0 &&
              <div className='bg-[#ADC03A] text-[#fff] text-center p-1 top-[10px] border-t-2 relative'>
                Total: <FormattedNumber value={order.total} style='currency' currency='USD' minimumFractionDigits={0} maximumFractionDigits={0} />
              </div>}
          </div>
        </div>
      </div>
      <div className='flex justify-end'>
        <ButtonReturn fnOnclick={prevStep} text='Atrás' />
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

export default StepPayment
