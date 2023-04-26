// Components
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import Steps from '../components/Steps'

// Data
import { listMenu } from '../../public/listConfig/list'

export default function Home (): JSX.Element {
  return (
    <>
      <Menu>
        {listMenu}
      </Menu>
      <Banner />
      <Steps />
    </>
  )
}
