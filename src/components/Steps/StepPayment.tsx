import { ButtonSuccess, ButtonReturn } from './Button'
import { useStep } from '../../hooks/useStep'
import { useOrder } from '../../hooks/useOrder'
import { listSteps } from '../../../public/listConfig/list'

const StepPayment = (): JSX.Element => {
  const { order, updateData }: any = useOrder()
  const { dates } = order
  const { dates: { name, lastname, city, typeID, email, phone } } = order
  const { addStep, prevStep: prevStepState } = useStep()
  const listFilter = listSteps.filter((list) => {
    return list.activo
  })
  let tickets: any = []

  listFilter.forEach(item => {
    const { ofertas } = item
    const findTickets = ofertas.filter(ticket => ticket.tickets !== undefined)
    tickets = findTickets
  })

  const onSubmit = (): void => {
    addStep()
  }
  const prevStep = (): void => {
    prevStepState()
  }
  const onChangeDates = (dates: any): any => {
    updateData(dates)
  }
  return (
    <>
      <div className='flex justify-center m-4 border-yellow-500 border-solid border-2 rounded-2xl font-bold p-2 bg-yellow-500'>
        <div className='w-[50%]'>
          <form className='w-full max-w-lg'>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                  Nombres
                </label>
                <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id='grid-first-name' type='text' placeholder='' value={name} onChange={(e) => onChangeDates({ ...dates, name: e.target.value })} />
                <p className='text-red-500 text-xs italic'>Completa el campo.</p>
              </div>
              <div className='w-full md:w-1/2 px-3'>
                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                  Apellidos
                </label>
                <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-last-name' type='text' placeholder='' value={lastname} onChange={(e) => onChangeDates({ ...dates, lastname: e.target.value })} />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                  Ciudad
                </label>
                <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id='grid-first-name' type='text' placeholder='' value={city} onChange={(e) => onChangeDates({ ...dates, city: e.target.value })} />
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
                <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id='grid-first-name' type='text' placeholder='' value={email} onChange={(e) => onChangeDates({ ...dates, email: e.target.value })} />
                <p className='text-red-500 text-xs italic'>Completa el campo.</p>
              </div>
              <div className='w-full md:w-1/2 px-3'>
                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
                  Celular
                </label>
                <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-last-name' type='text' placeholder='' value={phone} onChange={(e) => onChangeDates({ ...dates, phone: e.target.value })} />
              </div>
            </div>
          </form>
        </div>
        <div className='w-[50%] flex flex-col justify-center border-blue-900 border-solid border-2 rounded-2xl'>
          <div className='bg-[#ADC03A] text-[#20477D] text-lg text-center p-1 uppercase rounded-t-lg top-[-11px] relative'>Resumen de tu compra</div>
          <div className='bg-[#20477D] text-[#fff] text-center p-1 top-[-11px] relative'>Fecha de visita</div>
          <div>
            <p>{name}</p>
            <p>{lastname}</p>
            <p>{city}</p>
            <p>{typeID}</p>
            <p>{email}</p>
            <p>{phone}</p>
            {
              order.items.length > 0
                ? order.items.map((item: any): any => {
                  return (
                    <div key={item.id}>
                      <p>Id: {item.id}</p>
                      <p>Name: {item.description}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: {item.precio_descuento}</p>
                      <p>----------------------------------</p>
                    </div>
                  )
                })
                : null
            }
            <p>Total: {order.total}</p>
            {
              tickets.map((item: any): any => {
                return (
                  <div key={item.nombre}>
                    <p> Total {item.nombre}: {order[item.nombre].total} </p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className='flex justify-content-end'>
        <ButtonReturn fnOnclick={prevStep} text='Atrás' />
        <ButtonSuccess fnOnclick={onSubmit} text='Continuar' />
      </div>
    </>
  )
}

export default StepPayment
