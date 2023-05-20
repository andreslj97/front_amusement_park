import { useContext } from 'react'
import { OrderContext } from '../context/orderContext'

export const useOrder = () => {
  const context = useContext(OrderContext)

  // Best practique, check if is undefined
  if (context === undefined) {
    throw new Error('useOrder must be used within a OrderProvider')
  }

  return context
}
