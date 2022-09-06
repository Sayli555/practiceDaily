import logo from './logo.svg';
import './App.css';
import { Box, Container, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import Form from './components/Form';

function App() {
  return (
    <Container >
      <Flex>
        <VStack>
          <VStack>
            <Heading>
              Yours Details
            </Heading>
            <Text></Text>
          </VStack>
        </VStack>
      </Flex>
    </Container>
  );
}

export default App;
