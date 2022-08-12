import {
    Container,
    Flex,
    VStack,
    Text,
    Input,
    InputGroup,
    InputLeftElement,
  } from '@chakra-ui/react';
  import { FormControl } from '@chakra-ui/react';
  import React from 'react';
  import { EmailIcon, AtSignIcon, ChatIcon } from '@chakra-ui/icons';
  import { Button, Spacer, Stack, Link } from '@chakra-ui/react';
  import { NavLink } from 'react-router-dom';
  
  const FeedbackBox = () => {
  
    return (
      <Container maxW='440px'>
        <Flex h='90vh' py={20}>
          <VStack
            w='full'
            h='full'
            p={10}
            alignItems='center'
            bg='#FFFFFF'
            borderRadius='10'
            boxShadow='lg'
          >
            <Spacer></Spacer>
            <Text fontSize='3em' fontWeight='bold'>
              Feedback
            </Text>
            <Spacer></Spacer>
            <Stack>
              <FormControl>
              <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<AtSignIcon />}
                  />
                  <Input
                    placeholder='your name'
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<EmailIcon />}
                  />
                  <Input
                    type='email'
                    placeholder='example@mail.com'
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<ChatIcon />}
                    />
                    <Input
                        placeholder='your feedback'
                    />
                </InputGroup>
              </FormControl>
            </Stack>
            <Spacer></Spacer>
            <NavLink to='/thankyou'>
                <Link>
                    <Button
                    bg='#49439B'
                    color='white'
                    _hover={{ background: '#1A1287' }}
                    _active={{ background: '#1A1287' }}
                    w='full'
                    >
                    Send Feedback
                    </Button>
                </Link>
            </NavLink>
            <Spacer></Spacer> 
          </VStack>
        </Flex>
      </Container>
    );
  };
  
  export default FeedbackBox;
  