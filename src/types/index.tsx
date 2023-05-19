export interface ButtonType {
  fnOnclick: () => void
  text: string
}

export interface StepperProps {
  offer?: Offer
}

export interface Step {
  activo: boolean
  nombre: string
  ofertas: Offer[]
}

export interface Offer {
  nombre: string
  tipo: 'Calendario' | 'Datos' | 'Finalizar'
  tickets?: Ticket[]
}

export interface Ticket {
  id: number
  precio_full: number
  precio_descuento: number
  url: string
  description: string
}

export enum StepsName {
  FechaVisita = 0,
  MejoraExperiencia = 1,
  DatosCompra = 2,
  FinalizaCompra = 3,
}

export interface ItemTicket {
  precio_full: number
  precio_descuento: number
  description: string
}

export interface ItemExperience {
  id: number
  description: string
  total: number
}

export interface Order {
  id: string
  tickets: Tickets
  experience: Experience
  client: Client
  total: Total
}

interface Total {
  tickets: string
  experience: string
  subtotal: string
  total: string
}

interface Client {
  type: string
  id: string
  name: string
  lastname: string
  email: string
  departament: string
  addres: string
  phone: string
}

interface Experience {
  items: Item[]
  total: number
}

interface Tickets {
  date: string
  items: Item[]
  total: number
}

interface Item {
  id: number
  quantity: number
  total: number
}

export interface ListTickets extends Array<ItemTicket> {}
