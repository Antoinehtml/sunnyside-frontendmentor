import NextLink from 'next/link'
import Image from 'next/image'
import { Flex, Heading, Box, Text } from '@chakra-ui/react'

import facebook from '../assets/images/icon-facebook.svg'
import instagram from '../assets/images/icon-instagram.svg'
import twitter from '../assets/images/icon-twitter.svg'
import pinterest from '../assets/images/icon-pinterest.svg'

import customTheme from '../styles/theme'

const Footer = () => {
    const customColors = customTheme.colors.brand

    return (
        <Flex direction="column" justify="center" align="center" p="30px" backgroundColor={customColors.cyan}>
            <Heading fontSize={["2xl", "2xl", "xl", "xl"]} color={customColors.darkCyan} mb="30px">
                sunnyside
            </Heading>
            <Flex mb="60px">
                
                    <NextLink href="/about" passHref>
                        <Text fontSize={["15px", "15px", "10px", "10px"]} color={customColors.darkMediumCyan} mr="30px">
                            About 
                        </Text>
                    </NextLink>
                
                
                    <NextLink href="/services" passHref>
                        <Text fontSize={["15px", "15px", "10px", "10px"]} color={customColors.darkMediumCyan} mr="30px">
                            Services
                        </Text>
                    </NextLink>
                
                
                    <NextLink href="/projects" passHref>
                        <Text fontSize={["15px", "15px", "10px", "10px"]} color={customColors.darkMediumCyan}>
                            Projects
                        </Text>
                    </NextLink>
            </Flex>
            <Flex >
                <NextLink href="/" passHref>
                    <Box mr="15px">                
                        <Image 
                            src={facebook}
                            alt="facebook icon"
                            width="15px"
                            height="15px"
                        />
                    </Box>
                </NextLink>
                <NextLink href="/" passHref>
                    <Box mr="15px">
                        <Image 
                            src={instagram}
                            alt="instagram icon"
                            width="15px"
                            height="15px"
                        />
                    </Box>
                </NextLink>
                <NextLink href="/" passHref>
                    <Box mr="15px">
                        <Image 
                            src={twitter}
                            alt="twitter icon"
                            width="15px"
                            height="15px"
                            />
                    </Box>
                </NextLink>
                <NextLink href="/" passHref>
                    <Box>
                        <Image 
                            src={pinterest}
                            alt="pinterest icon"
                            width="15px"
                            height="15px"
                            />            
                    </Box>
                </NextLink>
            </Flex>
        </Flex>
    )
};

export default Footer;
