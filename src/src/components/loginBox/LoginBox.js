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
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { getFirestore, doc, collection, getDoc } from 'firebase/firestore';
import { Link as ReachLink } from 'react-router-dom';
import LoginGoogle from '../LoginGoogle';
import { accountExsists } from '../../firebase';
import { createNewUserData } from '../../firebase';

const LoginBox = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [email, setEmail] = useState('');
  const handleChangeEmail = (e) => setEmail(e.target.value);

  const [password, setPassword] = useState('');
  const handleChangePassword = (e) => setPassword(e.target.value);

  const [invalidPrompt, setInvalidPrompt] = useState('');

  const signInAccountEmail = async () => {
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

  const signInAccountGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const userCredentials = await signInWithPopup(getAuth(), provider);
    const user = userCredentials.user;
    const docSnap = await getDoc(doc(getFirestore(), 'Akun', user.uid));

    if (!docSnap.exists()) {
      await createNewUserData(
        user.uid,
        user.displayName,
        user.email,
        17000,
        'google'
      );
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
          <Text fontSize='3em' fontWeight='bold' color='black'>
            Login
          </Text>
          <Spacer></Spacer>
          <Stack>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<EmailIcon />}
                  color='black'
                />
                <Input
                  value={email}
                  onChange={handleChangeEmail}
                  type='email'
                  placeholder='example@mail.com'
                  _placeholder={{ color: 'gray.400' }}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<LockIcon />}
                  color='black'
                />
                <Input
                  value={password}
                  onChange={handleChangePassword}
                  type={show ? 'text' : 'password'}
                  placeholder='********'
                  color='black'
                  _placeholder={{ color: 'gray.400' }}
                />
                <InputRightElement
                  children={show ? <ViewIcon /> : <ViewOffIcon />}
                  onClick={handleClick}
                  color='black'
                />
              </InputGroup>
            </FormControl>
            <Checkbox color='black'>Remember me</Checkbox>
          </Stack>
          <Spacer></Spacer>
          <Stack alignItems='center'>
            <Button
              bg='#49439B'
              color='white'
              _hover={{ background: '#1A1287' }}
              _active={{ background: '#1A1287' }}
              onClick={signInAccountEmail}
            >
              Login
            </Button>
            <Text color='black'>or login with</Text>
            <Box _hover={{ cursor: 'pointer' }} onClick={signInAccountGoogle}>
              <LoginGoogle />
            </Box>
          </Stack>

          <Spacer></Spacer>
          <Text color='black'>
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
