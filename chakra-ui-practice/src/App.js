import logo from './logo.svg';
import './App.css';
import { AspectRatio, Box, Button, Checkbox, Container, Divider, Flex, FormControl, FormLabel, GridItem, Heading, HStack, Image, Input, Select, SimpleGrid, Text, Textarea, VStack } from '@chakra-ui/react';
import Form from './components/Form';
import { useState } from 'react';
import YoursDetails from './components/YoursDetails';
import YourCart from './components/YourCart';

function App() {
  
  return (
    <Container maxW="container.xl"  p="20px" >
      <Flex h="full" w="90%"   >
        <YoursDetails/>
        <YourCart/>
        
      </Flex>
    </Container>
  );
}

export default App;
