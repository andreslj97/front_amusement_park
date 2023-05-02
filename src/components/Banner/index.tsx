// Image component
import Image from 'next/image'

// Image
import BannerImage from '../../../public/banner.png'

const Banner = (): JSX.Element => (
  <>
    <div className='flex mt-40 justify-center'>
      <Image
        src={BannerImage}
        alt='user profile picture'
        width={1500}
      />
    </div>
  </>
)

export default Banner
