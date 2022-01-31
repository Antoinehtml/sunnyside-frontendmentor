import Image from 'next/image'
import { Flex, Heading, Box, Text, Button } from '@chakra-ui/react'
import bgImageDesktop from '../assets/images/desktop/image-header.jpg'
import bgImageMobile from '../assets/images/mobile/image-header.jpg'

import arrowDown from '../assets/images/icon-arrow-down.svg'




const Header = () => {
    return (
        <Flex justify="center"  position="relative" overflow="hidden" height="90vh" w="100%">
        <Flex display={["none", "none", "flex", "flex"]}>
          <Image 
            src={bgImageDesktop}
            alt="background orange"
            objectFit='cover'
            objectPosition="bottom"
          />
        </Flex>
        <Flex display={["flex", "flex", "none", "none"]}>
          <Image 
            src={bgImageMobile}
            alt="background orange"
            objectFit="cover"
            objectPosition="bottom"
          />
        </Flex>
        <Heading textAlign="center" as="h1" textTransform="uppercase" position="absolute" top="20%" color="white" letterSpacing={["5px", "5px", "10px", "10px"]} fontSize={["4xl", "4xl", "5xl", "5xl"]}>
          we are creatives
        </Heading>
        <Box position="absolute" top="45%">
          <Image 
            src={arrowDown}
            alt='arrow down icon'
          />
        </Box>
      </Flex>
    )
};

export default Header;
