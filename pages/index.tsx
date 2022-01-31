import type { NextPage } from 'next'
import { Flex } from '@chakra-ui/react'

import About from '../components/About'
import Header from '../components/Header'
import Testimonials from '../components/Testimonials'
import ImageGallery from '../components/ImageGallery'

const Home: NextPage = () => {
  return (
    <Flex direction="column" justify="center" align="center" width="100vw">
      <Header />
      <About />
      <Testimonials />
      <ImageGallery />
    </Flex>
  )
}

export default Home
