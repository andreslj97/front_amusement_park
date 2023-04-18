// Image component
// import Image from 'next/image'

// Interface
import { TBanner } from '../../interfaces/Banner/banner.interface'

const Banner = ({ image }: TBanner): JSX.Element => (
  <>
    <div className='flex justify-center'>
      <p> {image} </p>
    </div>
  </>
)

export default Banner
