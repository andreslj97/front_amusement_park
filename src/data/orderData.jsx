import { listSteps } from '../../public/listConfig/list'

// Filter
let tickets = null
const orderData = {
  items: [],
  dates: {
    name: '',
    lastname: '',
    city: '',
    typeID: '',
    email: '',
    phone: ''
  },
  dateOfVisit: '',
  total: 0
}
const listFilter = listSteps.filter((list) => {
  return list.activo === true
})

listFilter.forEach(item => {
  const { ofertas } = item
  const findTickets = ofertas.filter(ticket => ticket.tickets !== undefined)
  tickets = findTickets
})

tickets.forEach(item => {
  orderData[item.nombre] = { total: 0 }
})

export default orderData
