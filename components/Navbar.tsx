import NextLink from 'next/link'
import Image from 'next/image'
import { Flex, Button, Menu, MenuButton, MenuList, MenuItem, IconButton, Heading, Box } from "@chakra-ui/react"
import { FcMenu } from 'react-icons/fc'

import customTheme from "../styles/theme";

import logo from '../assets/images/logo.svg'

const Navbar = () => {
    const customColors = customTheme.colors.brand

    return (
        <Flex justify="space-between" align="center" backgroundColor={customColors.brightBlue} p="30px 20px" h="10vh">
            <Flex cursor="pointer">
                <Image
                    as="a"
                    src={logo}
                    alt="sunnyside logo"
                />
            </Flex>
            <Flex display={["flex", "none", "none", "none"]}>
                <Menu>
                    <MenuButton display="flex" justifyContent="center" as={IconButton} icon={<FcMenu />} variant="unstyled" size="lg"  />
                    <MenuList borderRadius="0px">
                        <NextLink href="/about" passHref>
                            <MenuItem justifyContent="center" color={customColors.darkGrayishBlue}>About</MenuItem>
                        </NextLink>
                        <NextLink href="/services" passHref>
                            <MenuItem justifyContent="center" color={customColors.darkGrayishBlue}>Services</MenuItem>
                        </NextLink>
                        <NextLink href="/projects" passHref>
                            <MenuItem justifyContent="center" color={customColors.darkGrayishBlue}>Projects</MenuItem>
                        </NextLink>
                        <NextLink href="/contact" passHref>
                            <MenuItem justifyContent="center">
                                <Box as="a" backgroundColor={customColors.yellow} borderRadius="50px" p="10px 25px"> 
                                    <Heading fontSize="sm">
                                        CONTACT
                                    </Heading>
                                </Box>
                            </MenuItem>
                        </NextLink>
                    </MenuList>
                </Menu>
            </Flex>
            <Flex display={["none", "flex", "flex", "flex"]}>
                <NextLink href="/about" passHref>
                    <Button as="a" variant="ghost" aria-label="About" color="white" fontWeight="normal" fontSize={[15]} borderRadius= "50px" _hover={{backgroundColor: customColors.brighterBlue}}>
                        About
                    </Button>
                </NextLink>
                <NextLink href="/services" passHref>
                    <Button as="a" variant="ghost" aria-label="Services" color="white" fontWeight="normal" fontSize={[15]} borderRadius= "50px" _hover={{backgroundColor: customColors.brighterBlue}}>
                        Services
                    </Button>
                </NextLink>
                <NextLink href="/projects" passHref>
                    <Button as="a" variant="ghost" aria-label="Projects" color="white" fontWeight="normal" fontSize={[15]} borderRadius= "50px" _hover={{backgroundColor: customColors.brighterBlue}}>
                        Projects
                    </Button>
                </NextLink>
                <NextLink href="/contact" passHref>
                    <Button as="a" variant="solid" borderRadius="50px" p="10px 25px" fontSize="sm" _hover={{backgroundColor: customColors.yellow}}>
                        <Heading fontSize="smaller">
                            CONTACT
                        </Heading>
                    </Button>
                </NextLink>
            </Flex>
        </Flex>
    )
};

export default Navbar;
