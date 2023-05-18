import { useState } from 'react'
import { IntlProvider } from 'react-intl'

// Components
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import { Stepper } from '../components/Stepper'
import Steps from '../components/Steps'

// Data
import { listMenu } from '../../public/listConfig/list'

const messagesEs = {
  Alert: 'Ha ocurrido un problema'
}

export default function Home (): JSX.Element {
  const [step, setStep] = useState<number>(0)
  return (
    <>
      <IntlProvider messages={messagesEs} locale='es' defaultLocale='es'>
        <Menu>
          {listMenu}
        </Menu>
        <section className='m-20'>
          <Banner />
          <Stepper setStep={setStep} step={step} />
          <Steps step={step} setStep={setStep} />
        </section>
      </IntlProvider>
    </>
  )
}
