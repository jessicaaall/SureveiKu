import {
    Container,
    Flex,
    VStack,
    Text,
    Input,
    InputGroup,
    InputLeftElement,
    Button, 
    Spacer, 
    Stack, 
    Link, 
    Textarea, 
    FormControl
  } from '@chakra-ui/react';
  import React from 'react';
  import { EmailIcon, AtSignIcon} from '@chakra-ui/icons';
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
            <Text fontSize='3em' fontWeight='bold' color='black'>
              Feedback
            </Text>
            <Spacer></Spacer>
            <Stack>
              <FormControl>
              <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<AtSignIcon />}
                    color='black'
                  />
                  <Input
                    placeholder='your name'
                    _placeholder={{ color: 'gray.400' }}
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<EmailIcon />}
                    color='black'
                  />
                  <Input
                    type='email'
                    placeholder='example@mail.com'
                    _placeholder={{ color: 'gray.400' }}
                  />
                </InputGroup>
              </FormControl>
              <Textarea placeholder='your feedback' maxHeight='25vh'/>
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
  