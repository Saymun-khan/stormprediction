import { Box, Flex, Icon, Image, Input, Text } from '@chakra-ui/react'
//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
import LogoThree from '../images/logothree.png'

import BackgroundImage from '../images/bg.jpg'

import { Search } from 'react-feather'

import Card from './card'


import axios from 'axios'
import { useState } from 'react'
import Air from '../images/airOne.png'
import Humidity from '../images/humidityOne.png'
import Visibility from '../images/visibilityOne.png'
import Wind from '../images/windOne.png'

//ca031fe675dec599ebd4e6b8e0fecdc6
//https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}


const Main = () => {
    {/*state*/}
    const [text,setText] = useState('')
    const [city,setCity] = useState('')
    const [data,setData] = useState('')

    {/*function*/}
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleClick = async() => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=Metric&appid=ca031fe675dec599ebd4e6b8e0fecdc6`)

        setData(response.data ? response.data :'City not found')

        setCity(text)

        console.log(data)
    }


  return (
    <div>
          <Box
        backgroundImage={`url(${BackgroundImage})`}
        backgroundSize='cover'
        width='full'
        height='600px'
        pt="70px"
    >
        <Box 
            w='40%'
            h='93%'
            bg='blackAlpha.500'
            m='auto'
        >
           <Box>
           <Input 
                w='80%'
                textColor='whiteAlpha.500'
                placeholder='Search what you know'
                color='whiteAlpha.700'
                fontSize='md'
                fontFamily='revert'
                value={text}
                onChange={handleChange}
                ml='10px'                variant='flushed'
                borderColor='teal.500'
            />
            <Icon as={Search} color='blue.600' ml={10} bg='green.800' h={10} w={50} rounded='lg' onClick={handleClick} cursor='pointer' />
           </Box>
           <Box m='auto' textAlign='center' p={10}>
            <Text color='teal.400' fontSize='x-large' fontWeight='bold'>{city.length > '0' ? city : 'Dhaka'}</Text>

            <Text color='gray.400' fontSize='xl' fontWeight='hairline' pt={3}>{city.length > '0' ? data.sys.country : 'BD'}</Text>

            <Text>
                <Image src={LogoThree} w={50} m='auto' textAlign='center' pt={2}/>
            </Text>

            <Text color='gray.400' fontSize='5xl' fontWeight='hairline' pt={3} >{city.length > '0' ? data.main.temp : '32.05'}C</Text>
        </Box>

        <Box>
            <Flex>
                <Card 
                    Logo={Humidity} TextOne='Humidity Rate' TextTwo={`${city.length > '0' ? data.main.humidity : '70'} %`} 
                    />
                <Card 
                    Logo={Wind} TextOne='Wind speed' 
                    TextTwo={`${city.length > '0' ? data.wind.speed : '2.03'} km/h`}
                    />
            </Flex>
            <Flex>
                <Card 
                    Logo={Air} TextOne='Pressure'
                    TextTwo={`${city.length > '0' ? data.main.pressure : '1005'} mmgh`}
                />
                <Card 
                    Logo={Visibility} TextOne='Visibility' TextTwo={`${city.length > '0' ? data.visibility : '1000'}`}
                    />
            </Flex>
        </Box>
        </Box>
    </Box>
    </div>
  )
}

export default Main