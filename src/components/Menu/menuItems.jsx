import React from 'react'
import Link from 'next/link'
import AnualCalendar from '../Icons/AnualCalendar'
import Vampire from '../Icons/Vampire'
import Group from '../Icons/Group'
import Party from '../Icons/Party'
import Ticket from '../Icons/Ticket'

const MenuItems = () => {
  return (
    <>
      <Link href='#' className='cursor-pointer flex flex-col items-center'>
        <Ticket />
        <span className='hover:drop-shadow-[0_5px_5px_rgba(255,255,255,1)]'>Pasaportes</span>
      </Link>
      <Link href='#' className='cursor-pointer flex flex-col items-center'>
        <AnualCalendar />
        <span className='hover:drop-shadow-[0_5px_5px_rgba(255,255,255,1)]'>Pase anual</span>
      </Link>
      <Link href='#' className='cursor-pointer flex flex-col items-center'>
        <Group />
        <span className='hover:drop-shadow-[0_5px_5px_rgba(255,255,255,1)]'>Grupos</span>
      </Link>
      <Link href='#' className='cursor-pointer flex flex-col items-center'>
        <Party />
        <span className='hover:drop-shadow-[0_5px_5px_rgba(255,255,255,1)]'>Fiestas</span>
      </Link>
      <Link href='#' className='cursor-pointer flex flex-col items-center'>
        <Vampire />
        <span className='hover:drop-shadow-[0_5px_5px_rgba(255,255,255,1)]'>Festival del terror</span>
      </Link>
    </>
  )
}

export default MenuItems
