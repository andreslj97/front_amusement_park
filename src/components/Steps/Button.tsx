import { ButtonType } from '../../types'

const Button = ({ fnOnclick, text }: ButtonType): JSX.Element => {
  return (
    <>
      <button
        className='flex justify-center text-base m-4 border-lime-600 border-solid border-2 rounded-2xl font-bold p-2 bg-lime-600 text-white'
        type='button'
        onClick={fnOnclick}
      >
        {text}
      </button>
    </>
  )
}

export default Button
