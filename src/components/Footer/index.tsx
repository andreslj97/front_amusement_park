// Image component
import Image from 'next/image'

// Image
import Visa from '../../../public/Logos/visa.png'
import Master from '../../../public/Logos/mastercard.png'
import Pse from '../../../public/Logos/pse.png'
import Nequi from '../../../public/Logos/nequi.png'
import Daviplata from '../../../public/Logos/daviplata.png'
import Efecty from '../../../public/Logos/efecty.png'

import Style from './footer.module.css'

const Footer = (): JSX.Element => (
  <>
    <div className='flex justify-end'>
      <section>
        <div className='mb-4'>
          <label className='text-neutral-400 font-medium'> Metodos de pago: </label>
        </div>
        <div className='flex flex-row flex-wrap justify-center items-center gap-4'>
          <Image
            src={Visa}
            alt='Visa'
            width={50}
            height={50}
            className={Style.imageLogo}
          />
          <Image
            src={Master}
            alt='Mastercard'
            width={50}
            height={50}
            className={Style.imageLogo}
          />
          <Image
            src={Pse}
            alt='Pse'
            width={50}
            height={200}
            className={Style.imageLogo}
          />
          <Image
            src={Nequi}
            alt='Nequi'
            width={50}
            height={50}
            className={Style.imageLogo}
          />
          <Image
            src={Daviplata}
            alt='Daviplata'
            width={50}
            height={50}
            className={Style.imageLogo}
          />
          <Image
            src={Efecty}
            alt='Efecty'
            width={50}
            height={50}
            className={Style.imageLogo}
          />
        </div>
      </section>
    </div>
  </>
)

export default Footer
