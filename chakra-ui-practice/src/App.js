import logo from './logo.svg';
import './App.css';
import { Box, Button, Checkbox, Container, Flex, FormControl, FormLabel, GridItem, Heading, Input, Select, SimpleGrid, Text, Textarea, VStack } from '@chakra-ui/react';
import Form from './components/Form';

function App() {
  return (
    <Container maxW="container.lg"  p="20px" >
      <Flex h="500px" w="90%"  border="1px solid black" >
        <VStack h="full" w="full" p={10} boxShadow="xl" >
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
                   
                    <Checkbox>Skip to the billing Adress</Checkbox>
                  </FormControl>
              </GridItem>
              <GridItem colSpan={2} rowSpan={1}>
                  
               
                    <Button w="100%" bg="green.400" >place your order</Button>
                 
              </GridItem>
            </SimpleGrid>
          </VStack>

        </VStack>
        <VStack h="full" w="full" p={10} >
          <VStack textAlign="flex-start">
            <Heading>
              Yours Details
            </Heading>
            <Text>If you have already login , please click hear.</Text>
          </VStack>

        </VStack>
      </Flex>
    </Container>
  );
}

export default App;
