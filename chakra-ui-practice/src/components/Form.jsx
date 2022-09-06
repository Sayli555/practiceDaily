import { Heading ,Box, Stack, Input, Button, PinInput, PinInputField, HStack,Text} from '@chakra-ui/react'
import React, { useState } from 'react'

const Form = () => {
    const [loading,setloading]=useState(false);
    const [pin,setPin]=useState("");
    console.log("pin",pin)
  return (
    <Box >
      <Heading>FORM</Heading>
      <Stack gap="10px">
        <Box>
            <Input type="text" placeholder='email' />
        </Box>
        <Box>
            <Input type="password" placeholder='password' />
        </Box>
        <Box>
        <HStack>
            <PinInput value={pin} onChange={(value)=>{
                setPin(value)
            }}>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
            </PinInput>
        </HStack>
        </Box>
        <Text>{pin}</Text>
        <Box>
            <Button bg={"primary1.c1"} isLoading={loading} onClick={()=>{
                setloading(true);

                setTimeout(()=>{
                    setloading(false)
                },2000)
            }}    >Submit</Button>
        </Box>
      </Stack>
    </Box>
  )
}

export default Form
