import type { NextPage } from 'next'
import NextLink from 'next/link'
import Image from 'next/image'
import { Flex, Heading, Box, Text, Button } from '@chakra-ui/react'

import bgImageDesktop from '../assets/images/desktop/image-header.jpg'
import transformImageDesktop from '../assets/images/desktop/image-transform.jpg'
import standoutImageDesktop from '../assets/images/desktop/image-stand-out.jpg'
import cherryImageDesktop from '../assets/images/desktop/image-graphic-design.jpg'
import orangeImageDesktop from '../assets/images/desktop/image-photography.jpg'

import bgImageMobile from '../assets/images/mobile/image-header.jpg'
import transformImageMobile from '../assets/images/mobile/image-transform.jpg'
import standoutImageMobile from '../assets/images/mobile/image-stand-out.jpg'
import cherryImageMobile from '../assets/images/mobile/image-graphic-design.jpg'
import orangeImageMobile from '../assets/images/mobile/image-photography.jpg'


import arrowDown from '../assets/images/icon-arrow-down.svg'
import customTheme from '../styles/theme'

const About = () => {
    const customColors = customTheme.colors.brand

  return (
    <Flex direction="column" h="100%" w="100vw">
    {/* Section 1 */}
      <Flex direction={["column-reverse", "column-reverse", "row", "row"]} justifyContent="space-between" align="center" w="100%" h="100%">
        <Flex direction="column" justify="center" align={["center", "center", "flex-start", "flex-start"]} w={["100%", "100%", "50%", "50%"]} h="100%" p={["80px 30px", "80px 40px", "0 80px", "0 100px"]}>
          <Heading as="h2" mb={["15px", "15px", "25px", "25px"]} textAlign={["center", "center", "initial", "initial"]} fontSize={["4xl", "4xl", "2xl", "4xl"]}>
            Transform your <br />brand
          </Heading>
          <Text as="p" mb={["15px", "15px", "25px", "25px"]} textAlign={["center", "center", "initial", "initial"]} color={customColors.darkGrayishBlue}>
            We are a full-service creative agency specializing in 
            <Box h="0" display={["none", "none", "none", "flex"]}><br /></Box>
            helping brands grow fast. 
            Engage your clients through 
            <Box h="0" display={["none", "none", "none", "flex"]}><br /></Box>
            compelling visuals that do most of the marketing for you.
          </Text>
          <NextLink href="/about" passHref>
            <Button position="relative" variant="ghost" zIndex="1" as="a" textTransform="uppercase" fontSize="sm" w="100px" mb={["15px", "15px", "0", "0"]}>
              <Heading fontSize="sm" fontWeight="bold">
                learn more  
              </Heading>
              <Box position="absolute" bottom={"10px"} left="0" zIndex="-1" width="100%" height="10px" backgroundColor={customColors.yellow} borderRadius="4px"></Box>
            </Button>
          </NextLink>
        </Flex>

        {/* Mobile Image */}
        <Flex display={["flex", "flex", "none", "none"]} justify="center" align="center" w="100%" h="100%" backgroundColor={customColors.yellow} overflow="hidden">
          <Image 
            src={transformImageMobile}
            alt='egg'
            objectFit="cover"
            objectPosition="bottom"
          />
        </Flex>

        {/* Desktop Image */}
        <Flex display={["none", "none", "flex", "flex"]} justify="center" align="center" w="50%" h="100%" backgroundColor={customColors.yellow}>
          <Image 
            src={transformImageDesktop}
            alt='egg'
            objectFit="cover"
            objectPosition="center"
          />
        </Flex>
      </Flex>

      {/* Section 2 */}
      <Flex direction={["column", "column", "row", "row"]} justifyContent="space-between" align="center" w="100%" h="100%">
        {/* Mobile Image */}
        <Flex display={["flex", "flex", "none", "none"]} justify="center" align="center" w="100%" h="100%" backgroundColor={customColors.softRed} overflow="hidden">
          <Image 
            src={standoutImageMobile}
            alt='egg'
            objectFit="cover"
            objectPosition="bottom"
          />
        </Flex>

        {/* Desktop Image */}
        <Flex display={["none", "none", "flex", "flex"]} justify="center" align="center" w="50%" h="100%" backgroundColor={customColors.softRed}>
          <Image 
            src={standoutImageDesktop}
            alt='egg'
            objectFit="cover"
            objectPosition="center"
          />
        </Flex>

        <Flex direction="column" justify="center" align={["center", "center", "flex-start", "flex-start"]} w={["100%", "100%", "50%", "50%"]} h="100%" p={["80px 30px", "80px 40px", "0 80px", "0 100px"]}>
          <Heading as="h2" mb={["15px", "15px", "25px", "25px"]} textAlign={["center", "center", "initial", "initial"]} fontSize={["4xl", "4xl", "2xl", "4xl"]}>
            Stand out to the right 
            <Box h="0" display={["none", "none", "none", "flex"]}><br /></Box>
            audience
          </Heading>
          <Text as="p" mb={["15px", "15px", "25px", "25px"]} textAlign={["center", "center", "initial", "initial"]} color={customColors.darkGrayishBlue}>
            Using a collaborative formula of designers, researchers, 
            <Box h="0" display={["none", "none", "none", "flex"]}><br /></Box>
            photographers, videographers, and copywriters, we'll 
            <Box h="0" display={["none", "none", "none", "flex"]}><br /></Box>
            build and extend your brand in digital places.
          </Text>
          <NextLink href="/about" passHref>
            <Button position="relative" variant="ghost" zIndex="1" as="a" textTransform="uppercase" w="100px" mb={["15px", "15px", "0", "0"]}>
              <Heading fontSize="sm" fontWeight="bold">
                learn more
              </Heading>
              <Box position="absolute" bottom={"10px"} left="0" zIndex="-1" width="100%" height="10px" backgroundColor="red.100" borderRadius="4px"></Box>
            </Button>
          </NextLink>
        </Flex>
      </Flex>
      
      {/* Section 3 */}
      <Flex direction={["column", "column", "row", "row"]} justifyContent="space-between" align="center" w="100%" h="100%">
        {/* Mobile Image */}
        <Flex position="relative" display={["flex", "flex", "none", "none"]} justify="center" align="center" w="100%" h="100%" backgroundColor={customColors.cyan} overflow="hidden">
          <Image 
            src={cherryImageMobile}
            alt='cherry'
            objectFit="cover"
            objectPosition="bottom"
          />
          <Flex direction="column" align="center" jutify="center" position="absolute" top="65%">
            <Heading  as="h2" color={customColors.darkCyan}>
              Graphic Design
            </Heading>
            <Text as="p" textAlign="center" p="20px" color={customColors.darkCyan}>
              Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential client's attention.
            </Text>
          </Flex>
        </Flex>
        {/* Desktop Image */}
        <Flex position="relative" display={["none", "none", "flex", "flex"]} justify="center" align="center" w="50%" h="100%" backgroundColor={customColors.cyan}>
          <Image 
            src={cherryImageDesktop}
            alt='cherry'
            objectFit="cover"
            objectPosition="center"
          />
          <Flex direction="column" align="center" jutify="center" position="absolute" top="65%">
            <Heading  fontSize="xl" as="h2" color={customColors.darkCyan}>
              Graphic Design
            </Heading>
            <Text as="p" fontSize="smaller" textAlign="center" p="20px 60px" color={customColors.darkCyan}>
              Great design makes you memorable. We deliver 
              <Box h="0" display={["none", "none", "none", "flex"]}><br /></Box>
              artwork that underscores your brand message 
              <Box h="0" display={["none", "none", "none", "flex"]}><br /></Box>
              and captures potential client's attention.
            </Text>
          </Flex>
        </Flex>
        
        {/* Mobile Image */}
        <Flex position="relative" display={["flex", "flex", "none", "none"]} justify="center" align="center" w="100%" h="100%" backgroundColor={customColors.brightBlue} overflow="hidden">
          <Image 
            src={orangeImageMobile}
            alt='orange'
            objectFit="cover"
            objectPosition="bottom"
          />
          <Flex direction="column" align="center" jutify="center" position="absolute" top="65%">
            <Heading  as="h2" color={customColors.darkBlue}>
              Photography
            </Heading>
            <Text as="p" textAlign="center" padding="20px" color={customColors.darkBlue}>
              Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
            </Text>
          </Flex>
        </Flex>
        {/* Desktop Image */}
        <Flex position="relative" display={["none", "none", "flex", "flex"]} justify="center" align="center" w="50%" h="100%" backgroundColor={customColors.brightBlue}>
          <Image 
            src={orangeImageDesktop}
            alt='orange'
            objectFit="cover"
            objectPosition="center"
          />
          <Flex direction="column" align="center" jutify="center" position="absolute" top="65%">
            <Heading  as="h2" fontSize="xl" color={customColors.darkBlue}>
              Photography
            </Heading>
            <Text as="p" fontSize="smaller" textAlign="center" padding="20px" color={customColors.darkBlue} p="20px 60px">
              Increase your credibility by getting the most 
              <Box h="0" display={["none", "none", "none", "flex"]}><br /></Box>
              stunning, high-quality photos that improve your 
              <Box h="0" display={["none", "none", "none", "flex"]}><br /></Box>
              business image.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
};

export default About;
