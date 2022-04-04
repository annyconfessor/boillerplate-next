import { ReactChild } from 'react'
import ThemeContainer from './../src/theme'

interface MyAppProps {
  Component: any
  pageProps: ReactChild
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <ThemeContainer>
      <Component {...pageProps} />
    </ThemeContainer>
  )
}

export default MyApp
