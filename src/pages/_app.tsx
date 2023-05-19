import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// Font
import { Raleway } from 'next/font/google'

// Step provider
import { StepProvider } from '../context/stepContext'

const raleway = Raleway({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <StepProvider>
      <main className={`${raleway.className}`}>
        <Component {...pageProps} />
      </main>
    </StepProvider>
  )
}
