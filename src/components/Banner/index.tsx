// Image component
import Image from 'next/image'

// Image
import BannerImage from '../../../public/banner.jpg'

const Banner = (): JSX.Element => (
  <>
    <div className='flex md:mt-20 md:mt-40 justify-center'>
      <Image
        src={BannerImage}
        alt='user profile picture'
        width={1500}
      />
    </div>
  </>
)

export default Banner
