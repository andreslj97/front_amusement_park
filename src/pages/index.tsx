import Menu from '../components/Menu'
import Banner from '../components/Banner'
import { listMenu } from '../../public/listConfig/list'

export default function Home (): JSX.Element {
  return (
    <>
      <Menu>
        {listMenu}
      </Menu>
      <Banner image='Imagen interesante !' />
    </>
  )
}
