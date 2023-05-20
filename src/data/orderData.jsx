import { listSteps } from '../../public/listConfig/list'

let tickets = null
const orderData = {}
const listFilter = listSteps.filter((list) => {
  return list.activo === true
})

listFilter.forEach(item => {
  const { ofertas } = item
  const findTickets = ofertas.filter(ticket => ticket.tickets !== undefined)
  tickets = findTickets
})

tickets.forEach(item => {
  orderData[item.nombre] = item.tickets
})

export default orderData
