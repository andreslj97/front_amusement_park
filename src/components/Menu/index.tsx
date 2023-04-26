import Image from 'next/image'
import Logo from '../../../public/Images/logo.png'
import type { MenuItem, propsWithChildren } from './types'

const Menu = ({ children }: propsWithChildren): JSX.Element => {
  return (
    <div
      className={`flex absolute w-screen ${children.position === 'Top' ? 'top-0' : 'bottom-0'}
      ${children.direction === 'Right' ? 'flex-row' : 'flex-row-reverse'}`}
      style={{ color: children.textColor, backgroundColor: children.backgroundColor }}
    >
      <Image
        src={Logo}
        alt='logo'
        width={children.widthLogo}
        height={children.heightLogo}
      />
      {children.level1.map((itemMenu: MenuItem) => (
        <div className='user' key={itemMenu.id}>{itemMenu.name}</div>
      ))}
    </div>
  )
}

export default Menu
