import { useState } from 'react'
import { Flex, Image, Button, Text } from '@chakra-ui/core'
import axios from 'axios'

export default function Home() {
    const [ email, setEmail ] = useState()

    function handleSingUp() {
        axios.post('/api/login', { email: 'anny.confessor@gmail.com' })
    }

    return(
        <div>Oi, eu sou a homepage</div>
    )
 }