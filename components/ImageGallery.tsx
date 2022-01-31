import Image from 'next/image'
import { Flex, Box } from "@chakra-ui/react";

import milkDesktop from '../assets/images/desktop/image-gallery-milkbottles.jpg'
import orangeDesktop from '../assets/images/desktop/image-gallery-orange.jpg'
import coneDesktop from '../assets/images/desktop/image-gallery-cone.jpg'
import sugarDesktop from '../assets/images/desktop/image-gallery-sugarcubes.jpg'

import milkMobile from '../assets/images/mobile/image-gallery-milkbottles.jpg'
import orangeMobile from '../assets/images/mobile/image-gallery-orange.jpg'
import coneMobile from '../assets/images/mobile/image-gallery-cone.jpg'
import sugarMobile from '../assets/images/mobile/image-gallery-sugar-cubes.jpg'

const ImageGallery = () => {
    return (
        <> 
            {/* Desktop */}
            <Flex display={["none", "none", "flex", "flex"]} wrap="wrap" justify="center" align="center">
                <Box width="25vw">
                    <Image 
                        src={milkDesktop}
                        alt='milk'
                    />
                </Box>
                <Box width="25vw">
                    <Image 
                        src={orangeDesktop}
                        alt='orange'
                    />
                </Box>
                <Box width="25vw">
                    <Image 
                        src={coneDesktop}
                        alt='cone'
                    />
                </Box>
                <Box width="25vw">
                    <Image 
                        src={sugarDesktop}
                        alt='sugar'
                    />
                </Box>
            </Flex>
            
            {/* Mobile */}
            <Flex display={["flex", "flex", "none", "none"]} direction="column" justify="center" align="center">
                <Flex>                
                    <Image 
                        src={milkMobile}
                        alt='milk'
                    />                    
                    <Image 
                        src={orangeMobile}
                        alt='orange'
                    />                    
                </Flex>
                <Flex>
                    <Image 
                        src={coneMobile}
                        alt='cone'
                    />                    
                    <Image 
                        src={sugarMobile}
                        alt='sugar'
                    />                    
                </Flex>
            </Flex>
        </>
    )
};

export default ImageGallery;
