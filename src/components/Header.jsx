import { Box, Flex, Image, Text } from '@chakra-ui/react'

import LogoOne from '../images/logoOne.jpeg'
import LogoTwo from '../images/logoTwo.jpeg'





import Footer from './Footer'
import Main from './Main'





const Header = () => {
  return (
    <>
    {/*header component*/}
    <Box bg='gray.800' h="100px">
       <Flex>
            <Box>
                <Image src={LogoOne} boxSize="100px" />
            </Box>
            <Text color="white" m='auto' textAlign='center' fontFamily='sans-serif' fontSize='x-large' fontWeight='medium'>Weather sorting Apps</Text>
            <Box>
                <Image src={LogoTwo} boxSize="100px" />
            </Box>
       </Flex>
    </Box>
    
    {/*middler component*/}
    <Main />
    {/*footer component*/}
    <Footer />
    </>
  )
}

export default Header