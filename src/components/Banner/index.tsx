// Image component
import Image from 'next/image'

// Interface
import { TBanner } from '../../interfaces/Banner/banner.interface'

// Image
import BannerImage from '../../../public/banner.png'

const Banner = ({ image }: TBanner): JSX.Element => (
  <>
    <div className='flex justify-center'>
      <Image
        src={BannerImage}
        alt='user profile picture'
      />
    </div>
  </>
)

export default Banner
