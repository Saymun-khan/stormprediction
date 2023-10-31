import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'



const card = ({Logo,TextOne,TextTwo}) => {
  return (
    <Box p={2} ml={2} w='45%' h='60px' boxShadow='dark-lg' m='auto'
    textAlign='center' mb='7px'>
        <Flex>
        <Image src={Logo} w={50}/>
        <Box ml={3}>
            <Text color='gray.50'>
                {TextOne}
            </Text>
            <Text color='gray.100'>
                {TextTwo}
            </Text>
        </Box>
        </Flex>
    </Box>
  )
}

export default card