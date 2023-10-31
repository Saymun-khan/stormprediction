import { Box, Icon, Text } from '@chakra-ui/react'



import { Copy } from 'react-feather'






const Footer = () => {
  return (
    <div>
        
    {/*footer component*/}
    <Box
    bg='gray.700'
    h='40px'
    >
        <Text
            fontFamily='cursive'
            fontSize='md'
            textAlign='center'
            color={'whiteAlpha.600'}
        >Allrights reserved by <Icon as={Copy} mt={2} ml={3} />Saymun khan</Text>
    </Box>
    </div>
  )
}

export default Footer