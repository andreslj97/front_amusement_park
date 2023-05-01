interface MenuType {
  position?: 'Top' | 'Bottom' | undefined
  direction?: 'Left' | 'Right' | undefined
  widthLogo?: string
  heightLogo?: string
  backgroundColor: string
  textColor: string
  level1: MenuItem[]
}

interface MenuItem {
  id: number
  name: string
  type: 'btn-round-medium' | 'btn-round-small' | undefined
  color: 'bg-blue' | 'bg-yellow' | undefined
}

interface propsWithChildren {
  children: MenuType
}

export type { MenuType, MenuItem, propsWithChildren }
