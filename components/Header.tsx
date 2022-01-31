import Image from 'next/image'
import { Flex, Heading, Box, Text, Button } from '@chakra-ui/react'
import bgImageDesktop from '../assets/images/desktop/image-header.jpg'
import bgImageMobile from '../assets/images/mobile/image-header.jpg'

import arrowDown from '../assets/images/icon-arrow-down.svg'

import { motion } from 'framer-motion'


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
        <Flex position="absolute" align="center" top="20%">
          <Heading textAlign="center" as="h1" textTransform="uppercase"  color="white" letterSpacing={["5px", "5px", "10px", "10px"]} fontSize={["4xl", "4xl", "5xl", "5xl"]}>
              we are 
          </Heading>
          <motion.div initial="hidden"animate="visible" variants={{
            hidden: {
              opacity: 0
            },
            visible: {
              opacity: 1,
              transition: {
                duration: 2,
                delay: 2
              }
            }
          }}>
            <Heading textAlign="center" as="h1" textTransform="uppercase"  color="white" letterSpacing={["5px", "5px", "10px", "10px"]} fontSize={["4xl", "4xl", "5xl", "5xl"]} ml="20px">
              creatives
            </Heading>
          </motion.div>  
        </Flex>
          
        <Box position="absolute" top="45%">
          <motion.div animate={{
            y: 30,
            transition: {
              yoyo: Infinity,
              duration: .8,
              delay: 2.5
            },
          }}>
            <Image 
              src={arrowDown}
              alt='arrow down icon'
            />
          </motion.div>
        </Box>
      </Flex>
    )
};



export default Header;
