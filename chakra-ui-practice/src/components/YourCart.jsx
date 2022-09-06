import React from 'react';
import { AspectRatio, Box, Button, Checkbox, Container, Divider, Flex, FormControl, FormLabel, GridItem, Heading, HStack, Image, Input, Select, SimpleGrid, Text, Textarea, VStack } from '@chakra-ui/react';


const YourCart = () => {
  return (
    <VStack h="full" w="full" p={10} boxShadow="xl" spacing={10} align='flex-start' >
          <VStack  align="flex-start" spacing={3} >
            <Heading>
              Your cart
            </Heading>
            <Text>if the price is too hard on your eyes</Text>
            <Button variant='outline'>Try changing the theme</Button>
          </VStack>
          <HStack spacing={6} alignItems="center" w="full">
            <AspectRatio ratio={1} w="24">
              <Image
              src="https://bit.ly/dan-abramov"
              alt=""
              />
            </AspectRatio>
            <VStack w="full" align="flex-start" >
              <Heading size="md">Penny board</Heading>
              <Text>PNVCOMP27541</Text>
            </VStack>
            <Heading size="md">$119.00</Heading>
          </HStack>
          <VStack w="full" spacing={4}>
              <HStack w="full" justifyContent="space-between">
                    <Text>
                      SubTotal
                    </Text>
                    <Heading size="sm">
                      $119.00
                    </Heading>
              </HStack>
              <HStack w="full" justifyContent="space-between">
                    <Text>
                      Shipping
                    </Text>
                    <Heading size="sm">
                      $19.99
                    </Heading>
              </HStack>
              <HStack w="full" justifyContent="space-between">
                    <Text>
                      Taxes(estimated)
                    </Text>
                    <Heading size="sm">
                      $23.00
                    </Heading>
              </HStack>
              <Divider />
              <HStack w="full" justifyContent="space-between">
                    <Text>
                      Total
                    </Text>
                    <Heading size="sm">
                      $162.79
                    </Heading>
              </HStack>
          </VStack>

        </VStack>
  )
}

export default YourCart
