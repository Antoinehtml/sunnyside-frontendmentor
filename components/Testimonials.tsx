import Image from 'next/image'
import { Flex, Heading, Box, Text } from "@chakra-ui/react"

import customTheme from '../styles/theme'
import style from '../styles/BorderRadius.module.css'

import emilyAvatar from '../assets/images/image-emily.jpg'
import thomasAvatar from '../assets/images/image-thomas.jpg'
import jennieAvatar from '../assets/images/image-jennie.jpg'

const Testimonials = () => {
    const customColors = customTheme.colors.brand

    return (
        <Flex direction="column" justify="center" align="center" p={["0", "0", "100px 80px", "100px 80px"]}>
            <Heading as="h1" mt={["100px", "100px", "0", "0"]} mb="60px" textTransform="uppercase" fontSize="sm" color={customColors.darkGrayishBlue} letterSpacing="5px">
                client testimonials
            </Heading>
            <Flex direction={["column", "column", "row", "row"]}>
                <Flex direction="column" justify="center" align="center">
                    <Flex mb={["30px", "30px", "40px", "40px"]}>
                        <div className={style.borderRadius}>
                            <Image 
                                src={emilyAvatar}
                                alt='avatar'
                                width="50px"
                                height="50px"
                            />
                        </div>
                    </Flex>
                    <Flex>
                        <Text textAlign="center" mb={["30px", "30px", "40px", "40px"]} p="0 30px" fontSize="sm" color={customColors.veryDarkGrayishBlue} lineHeight="25px">
                            We put our trust in Sunnyside and they delivered, making sure our need were met and deadlines were always hit
                        </Text>
                    </Flex>
                    <Flex direction="column" align="center" mb="60px">
                        <Heading as="h3" mb="10px" fontSize="sm" fontWeight="xl">
                            Emily R.
                        </Heading>
                        <Text color={customColors.darkGrayishBlue} fontSize="sm" textAlign="center">
                            Marketing Director
                        </Text>
                    </Flex>
                </Flex>
                <Flex direction="column" justify="center" align="center">
                    <Flex mb={["30px", "30px", "40px", "40px"]}>
                        <div className={style.borderRadius}>   
                            <Image 
                                src={thomasAvatar}
                                alt="avatar"
                                width="50px"
                                height="50px"
                            />
                        </div>
                    </Flex>
                    <Flex>
                        <Text textAlign="center" mb={["30px", "30px", "40px", "40px"]} p="0 30px" fontSize="sm" color={customColors.veryDarkGrayishBlue} lineHeight="25px">
                            Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.
                        </Text>
                    </Flex>
                    <Flex direction="column" align="center" mb="60px">
                        <Heading as="h3" mb="10px" fontSize="sm" fontWeight="xl">
                            Thomas S.
                        </Heading>
                        <Text color={customColors.darkGrayishBlue} fontSize="sm" textAlign="center">
                            Chief Operating Officer
                        </Text>
                    </Flex>
                </Flex>
                <Flex direction="column" justify="center" align="center">
                    <Flex mb={["30px", "30px", "40px", "40px"]}>
                        <div className={style.borderRadius}>
                            <Image 
                                src={jennieAvatar}
                                alt='avatar'
                                width="50px"
                                height="50px"
                            />
                        </div>
                    </Flex>
                    <Flex>
                        <Text textAlign="center" mb={["30px", "30px", "40px", "40px"]} p="0 30px" fontSize="sm" color={customColors.veryDarkGrayishBlue} lineHeight="25px">
                            Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended
                        </Text>
                    </Flex>
                    <Flex direction="column" align="center" mb="60px">
                        <Heading as="h3" mb="10px" fontSize="sm" fontWeight="xl">
                            Jennie F.
                        </Heading>
                        <Text color={customColors.darkGrayishBlue} fontSize="sm" textAlign="center">
                            Business Owner
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
};

export default Testimonials;
