import { Container, Flex, VStack, Text, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import {FormControl} from '@chakra-ui/react';
import React, { useState } from "react";
import { EmailIcon, LockIcon, ViewOffIcon, ViewIcon, ChatIcon } from '@chakra-ui/icons';
import {  Box, Button, Spacer, Stack } from '@chakra-ui/react'

const SignUpBox = () => {
    const[showPassword, setShowPassword] = useState(false);
    const handleClickPassword = () => setShowPassword(!showPassword);

    const[showConfirm, setShowConfirm] = useState(false);
    const handleClickConfirm = () => setShowConfirm(!showConfirm);

    return(
        <Container maxW="440px">
            <Flex h="90vh" py={20}>
                <VStack w="full" h="full" p={10} alignItems="center" bg="#FFFFFF" borderRadius='10' boxShadow='lg'>
                    <Spacer></Spacer>
                    <Text fontSize="3em" fontWeight="bold">Signup</Text>
                    <Spacer></Spacer>
                    <Stack>
                    <FormControl>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none' children={<ChatIcon/>}/>
                            <Input placeholder="full name" />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none' children={<EmailIcon/>}/>
                            <Input type='email' placeholder="example@mail.com" />
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none' children={<LockIcon/>}/>
                            <Input type={showPassword ? 'text' : 'password'} placeholder="your password" />
                            <InputRightElement children={showPassword ? <ViewIcon/> : <ViewOffIcon/>} onClick={handleClickPassword} />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none' children={<LockIcon/>}/>
                            <Input type={showConfirm ? 'text' : 'password'} placeholder="confirm password" />
                            <InputRightElement children={showConfirm ? <ViewIcon/> : <ViewOffIcon/>} onClick={handleClickConfirm} />
                        </InputGroup>
                    </FormControl>
                    </Stack>
                    <Spacer></Spacer>
                    <Button bg='#49439B' color='white' _hover={{background: "#1A1287"}} _active={{background: "#1A1287"}}>Register</Button>
                    <Text>or register with</Text>
                    <Spacer></Spacer>
                    <Box>Google Shit</Box>
                    <Spacer></Spacer>
                </VStack>
            </Flex>
        </Container>
    );
}
 
export default SignUpBox;