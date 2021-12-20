import { useState } from 'react'
import { Flex, Box, Button, Input, Text } from '@chakra-ui/core'
import axios from 'axios'
import { Center } from '@chakra-ui/react'

export default function Home() {
    const [ email, setEmail ] = useState()

    function handleSingUp() {
        axios.post('/api/login', { email: 'anny.confessor@gmail.com' })
    }

    return(
        <Flex
            className='login-container'
            color='#7393B3'
            height='100vh'
            justifyContent='center'
            alignItems='center'
            backgroundColor='#202124'
        >
            <Box className='input-container'>
                <Center bg='pink.300' h='100px' color='pink.100'>
                    Login
                    <Input variant='outline' placeholder='Senha' />
                    <Button color='#0BC5EA'>Button</Button>
                </Center>
            </Box>
        </Flex>
    )
 }