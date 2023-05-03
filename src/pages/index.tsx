import { useState } from 'react'
// Components
import Menu from '../components/Menu'
import Banner from '../components/Banner'
import { Stepper } from '../components/Stepper'
import Steps from '../components/Steps'

// Data
import { listMenu } from '../../public/listConfig/list'

export default function Home (): JSX.Element {
  const [step, setStep] = useState<number>(0)
  return (
    <>
      <Menu>
        {listMenu}
      </Menu>
      <section className='m-20'>
        <Banner />
        <Stepper setStep={setStep} step={step} />
        <Steps step={step} setStep={setStep} />
      </section>
    </>
  )
}
