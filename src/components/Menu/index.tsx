import React, { useState } from 'react'
import Image from 'next/image'
import Logo from '../../../public/Images/logo.png'
import type { MenuItem, propsWithChildren } from './types'
import MenuButton from './buttonMobile'
import Navbar from './navbarMobile'
import MenuItems from './menuItems'

const Menu = ({ children }: propsWithChildren): JSX.Element => {
  const [open, setOpen] = useState(false)

  const handleClick = (): void => {
    setOpen(!open)
  }
  return (
    <div
      className={`flex absolute w-[100%] sm:px-[5rem] py-[1rem] items-center sticky z-10
      ${children.position === 'Top' ? 'top-0' : 'bottom-0'}
      ${children.direction === 'Right' ? 'flex-row' : 'flex-row-reverse'}`}
      style={{ color: children.textColor, backgroundColor: children.backgroundColor }}
    >
      <div className='w-[60%] sm:w-[10%]'>
        <Image
          src={Logo}
          alt='logo'
        />
      </div>
      <div className='hidden sm:flex w-[70%] items-center justify-end gap-[3%] mx-[3rem]'>
        <MenuItems />
      </div>
      <div className='w-[100%] sm:w-[20%] flex justify-end items-center gap-[1rem]'>
        {children.level1.map((itemMenu: MenuItem) => (
          <div
            className={`
            ${itemMenu.type === 'btn-round-medium' ? 'btn-round-medium' : 'btn-round-small'}
            ${itemMenu.color === 'bg-blue' ? 'bg-blue' : 'bg-yellow'}`}
            key={itemMenu.id}
          >{itemMenu.name}
          </div>
        ))}
      </div>
      <div className='flex sm:hidden w-[10%] mx-[1rem]'>
        <Navbar open={open} />
        <MenuButton open={open} handleClick={handleClick} />
      </div>
    </div>
  )
}

export default Menu
