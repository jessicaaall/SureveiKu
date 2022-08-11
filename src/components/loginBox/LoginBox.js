import {
  Container,
  Flex,
  VStack,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { FormControl } from '@chakra-ui/react';
import React, { useState } from 'react';
import { EmailIcon, LockIcon, ViewOffIcon, ViewIcon } from '@chakra-ui/icons';
import { Checkbox, Box, Button, Link, Spacer, Stack } from '@chakra-ui/react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link as ReachLink } from 'react-router-dom';

const LoginBox = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [email, setEmail] = useState('');
  const handleChangeEmail = (e) => setEmail(e.target.value);

  const [password, setPassword] = useState('');
  const handleChangePassword = (e) => setPassword(e.target.value);

  const [invalidPrompt, setInvalidPrompt] = useState('');

  const signInAccount = async () => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        getAuth(),
        email,
        password
      );
    } catch (error) {
      console.error(error);
    }
  };

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
            Login
          </Text>
          <Spacer></Spacer>
          <Stack>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<EmailIcon />}
                />
                <Input
                  value={email}
                  onChange={handleChangeEmail}
                  type='email'
                  placeholder='example@mail.com'
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<LockIcon />}
                />
                <Input
                  value={password}
                  onChange={handleChangePassword}
                  type={show ? 'text' : 'password'}
                  placeholder='********'
                />
                <InputRightElement
                  children={show ? <ViewIcon /> : <ViewOffIcon />}
                  onClick={handleClick}
                />
              </InputGroup>
            </FormControl>
            <Checkbox>Remember me</Checkbox>
          </Stack>
          <Spacer></Spacer>
          <Button
            bg='#49439B'
            color='white'
            _hover={{ background: '#1A1287' }}
            _active={{ background: '#1A1287' }}
            onClick={signInAccount}
          >
            Login
          </Button>
          <Text>or login with</Text>
          <Box>Google Shit</Box>
          <Spacer></Spacer>
          <Text>
            Not a member?{' '}
            <Link as={ReachLink} to='/signup'>
              Create an account
            </Link>
          </Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default LoginBox;
