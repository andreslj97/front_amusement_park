import React from 'react'
import { NavbarWrapper } from './styles/NavbarStyles'
import MenuItems from './menuItems'

function Navbar ({ open }) {
  return (
    <NavbarWrapper open={open}>
      <MenuItems />
    </NavbarWrapper>
  )
}

export default Navbar
