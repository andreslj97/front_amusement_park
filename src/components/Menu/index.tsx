import Image from 'next/image'
import Logo from '../../../public/Images/logo.png'
import type { MenuItem, propsWithChildren } from './types'

const Menu = ({ children }: propsWithChildren): JSX.Element => {
  return (
    <div
      className={`flex absolute w-screen px-[5rem] py-[1rem]
      ${children.position === 'Top' ? 'top-0' : 'bottom-0'}
      ${children.direction === 'Right' ? 'flex-row' : 'flex-row-reverse'}`}
      style={{ color: children.textColor, backgroundColor: children.backgroundColor }}
    >
      <div style={{ width: children.widthLogo, height: children.heightLogo }}>
        <Image
          src={Logo}
          alt='logo'
        />
      </div>
      <div className='w-[90%] flex justify-end items-center gap-[1rem]'>
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
    </div>
  )
}

export default Menu
