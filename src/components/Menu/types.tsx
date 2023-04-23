interface MenuType {
  position?: 'Top' | 'Bottom' | undefined
  direction?: 'Left' | 'Right' | undefined
  widthLogo?: number
  heightLogo?: number
  backgroundColor: string
  textColor: string
  level1: MenuItem[]
}

interface MenuItem {
  id: number
  name: string
}

interface propsWithChildren {
  children: MenuType
}

export type { MenuType, MenuItem, propsWithChildren}
