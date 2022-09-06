import React,{useState} from 'react';
import { AspectRatio, Box, Button, Checkbox, Container, Divider, Flex, FormControl, FormLabel, GridItem, Heading, HStack, Image, Input, Select, SimpleGrid, Text, Textarea, VStack } from '@chakra-ui/react';


const YoursDetails = () => {
    const [check,setcheck]=useState(false);
  console.log(check)
  return (
    <VStack h="full" w="full" p={10} boxShadow="xl" spacing={10} >
          <VStack align="flex-start">
            <Heading>
              Yours Details
            </Heading>
            <Text>If you have already login , please click hear.</Text>
            <SimpleGrid columns={2} columnGap={3} rowGap={2}  >
              <GridItem colSpan={1} rowSpan={1}>
                  <FormControl>
                    <FormLabel>First Name</FormLabel>
                    <Input placeholder='write first name' type="text" />
                  </FormControl>
              </GridItem>
              <GridItem colSpan={1} rowSpan={1}>
                  <FormControl>
                    <FormLabel>First Name</FormLabel>
                    <Input placeholder='write first name' />
                  </FormControl>
              </GridItem>
              <GridItem colSpan={2} rowSpan={1}>
                  <FormControl>
                    <FormLabel>Address</FormLabel>
                    <Textarea placeholder='write your address' />
                  </FormControl>
              </GridItem>
              <GridItem colSpan={1} rowSpan={1}>
                  <FormControl>
                    <FormLabel>City</FormLabel>
                    <Input placeholder='write your city' />
                  </FormControl>
              </GridItem>
              <GridItem colSpan={1} rowSpan={1}>
                  <FormControl>
                    <FormLabel>Country</FormLabel>
                    <Select placeholder='write your city' >
                      <option>India</option>
                    </Select>  
                  </FormControl>
              </GridItem>
              <GridItem colSpan={2} rowSpan={1}>
                  <FormControl>
                   
                    <Checkbox value={check} onChange={()=>{
                      setcheck(!check)
                    }} >Skip to the billing Adress</Checkbox>
                  </FormControl>
              </GridItem>
              <GridItem colSpan={2} rowSpan={1}>         
                    <Button w="100%" bg="green.400" >place your order</Button>
              </GridItem>
            </SimpleGrid>
          </VStack>

        </VStack>
  )
}

export default YoursDetails
