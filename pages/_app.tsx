import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import customTheme from '../styles/theme'

import Fonts from '../components/Fonts'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={customTheme}>
        <Fonts />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
