import { IntlProvider } from 'react-intl'

// Components
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import { Stepper } from '../components/Stepper'
import Steps from '../components/Steps'

// Data
import { listMenu } from '../../public/listConfig/list'

// Provider
import { OrderProvider } from '../context/orderContext'

const messagesEs = {
  Alert: 'Ha ocurrido un problema'
}

export default function Home (): JSX.Element {
  return (
    <>
      <IntlProvider messages={messagesEs} locale='es' defaultLocale='es'>
        <Menu>
          {listMenu}
        </Menu>
        <section className='md:m-20'>
          <Banner />
          <OrderProvider>
            <Stepper />
            <Steps />
          </OrderProvider>
          <Footer />
        </section>
      </IntlProvider>
    </>
  )
}
