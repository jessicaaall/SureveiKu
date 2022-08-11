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
import {
  EmailIcon,
  LockIcon,
  ViewOffIcon,
  ViewIcon,
  ChatIcon,
} from '@chakra-ui/icons';
import { Box, Button, Spacer, Stack } from '@chakra-ui/react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { createNewUserData } from '../../firebase';

const SignUpBox = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickPassword = () => setShowPassword(!showPassword);

  const [showConfirm, setShowConfirm] = useState(false);
  const handleClickConfirm = () => setShowConfirm(!showConfirm);

  const [fullName, setFullName] = useState('');
  const handleChangeFullName = (e) => setFullName(e.target.value);

  const [email, setEmail] = useState('');
  const handleChangeEmail = (e) => setEmail(e.target.value);

  const [password, setPassword] = useState('');
  const handleChangePassword = (e) => setPassword(e.target.value);

  const [confirm, setConfirm] = useState('');
  const handleChangeConfirm = (e) => setConfirm(e.target.value);

  const [invalidPrompt, setInvalidPrompt] = useState('');

  const signUpAccount = async () => {
    if (fullName === '' || email === '' || password === '' || confirm === '') {
      setInvalidPrompt('Invalid Credentials');
    } else if (password !== confirm) {
      setInvalidPrompt("Passwords doesn't match");
    } else {
      try {
        const userCredentials = await createUserWithEmailAndPassword(
          getAuth(),
          email,
          password
        );
        const user = userCredentials.user;

        createNewUserData(user.uid, fullName, email, 17000);
      } catch (error) {
        console.error(error);
      }
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
            Signup
          </Text>
          <Spacer></Spacer>
          <Stack>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<ChatIcon />}
                />
                <Input
                  value={fullName}
                  onChange={handleChangeFullName}
                  placeholder='full name'
                />
              </InputGroup>
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
                  type={showPassword ? 'text' : 'password'}
                  placeholder='your password'
                />
                <InputRightElement
                  children={showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  onClick={handleClickPassword}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  children={<LockIcon />}
                />
                <Input
                  value={confirm}
                  onChange={handleChangeConfirm}
                  type={showConfirm ? 'text' : 'password'}
                  placeholder='confirm password'
                />
                <InputRightElement
                  children={showConfirm ? <ViewIcon /> : <ViewOffIcon />}
                  onClick={handleClickConfirm}
                />
              </InputGroup>
            </FormControl>
          </Stack>
          <Spacer></Spacer>
          <Button
            onClick={signUpAccount}
            bg='#49439B'
            color='white'
            _hover={{ background: '#1A1287' }}
            _active={{ background: '#1A1287' }}
          >
            Register
          </Button>
          <Text>or register with</Text>
          <Spacer></Spacer>
          <Box>Google Shit</Box>
          <Spacer></Spacer>
        </VStack>
      </Flex>
    </Container>
  );
};

export default SignUpBox;
