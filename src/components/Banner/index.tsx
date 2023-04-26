// Image component
import Image from 'next/image'

// Image
import BannerImage from '../../../public/banner.png'

const Banner = (): JSX.Element => (
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
