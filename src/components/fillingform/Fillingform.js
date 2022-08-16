import {  Box, Text, Stack, Button, Image, Checkbox, Link, HStack, VStack, Input, Radio,
    RadioGroup,
    Spacer,
    Flex
} from "@chakra-ui/react";
import React from "react";
import FormalHeading from "../FormalHeading";
import { NavLink } from "react-router-dom";

import "@fontsource/nunito";
import "./garis.css"

const FillingForm = () => {
    const [value1, setValue1] = React.useState('1')
    const [value, setValue] = React.useState('1')

    return (
        <VStack align='left' h='100%'>   
            <FormalHeading title='Judul Survei'/>
            <HStack alignSelf={'end'} pb={2}>
                <Image src='./PhoneIcon.png' boxSize={6}></Image>
                <Link align="right" p={1} color='white' fontSize='20px'>
                    Contact Surveyor
                </Link>
            </HStack>
            <Box borderRadius='20px' p={6} w='auto' pr={4} overflowY={'scroll'} css={{"&::-webkit-scrollbar": {width:"8px",},"&::-webkit-scrollbar-track": {background:'#D9D9D9', borderRadius:"50px",},"&::-webkit-scrollbar-thumb": {background:'#122543', borderRadius:"50px",},}}>
                <VStack align='left' spacing='25px'>
                    <Box bg="#122543" borderRadius='25px'>
                        <Box pt={4} pb={3} pl={5} pr={5}>
                            <Text color={'white'} fontSize='20px'>Pertanyaan</Text>
                        </Box>
                        <Box pb={5} pl={5} pr={5}>
                            <Image boxSize='100%' src="https://www.jcceramictiles.com/Content/upload/2017249249/201711241527057755410.jpg"></Image>
                        </Box>
                        <Box borderRadius='25px' bg='white' w='100%' h='full'>
                            <Input placeholder='Basic usage' />
                        </Box>
                    </Box>
                    <Box bg="#122543" borderRadius='25px'>
                        <Box pt={4} pb={3} pl={5} pr={5}>
                            <Text color={'white'} fontSize='20px'>Pertanyaan</Text>
                        </Box>
                        <Box bg='white' borderRadius='25px' p={2}>
                            <Stack mt={1} spacing={1} pl={4} pr={4} pb={1} color='black'>
                                <Checkbox defaultChecked colorScheme="facebook">Checkbox</Checkbox>
                                <Checkbox defaultChecked colorScheme="facebook">Checkbox</Checkbox>
                                <Checkbox defaultChecked colorScheme="facebook">Checkbox</Checkbox>
                            </Stack>
                        </Box>
                    </Box>

                    <Box bg="#122543" borderRadius='25px'>
                        <Box pt={4} pb={3} pl={5} pr={5}>
                            <Text color={'white'} fontSize='20px'>Pertanyaan</Text>
                        </Box>
                        <Box bg='white' borderRadius='25px' p={6}>
                            <RadioGroup onChange={setValue} value={value} align='center'>
                                <div className="gray-bar">
                                <Flex>
                                    <VStack mt={0} spacing={0}>
                                        <Radio bg="#385898" value='1' colorScheme="facebook"></Radio>
                                        <Text color="#23395B">First</Text>
                                    </VStack>
                                    <Spacer></Spacer>
                                    <VStack spacing={0}>
                                        <Radio bg="#385898" value='2' colorScheme="facebook"></Radio><Text color="#23395B">Second</Text>
                                    </VStack>
                                    <Spacer></Spacer>
                                    <VStack spacing={0}>
                                        <Radio bg="#385898" value='3' colorScheme="facebook"></Radio><Text color="#23395B">Third</Text>
                                    </VStack>
                                    <Spacer></Spacer>
                                    <VStack spacing={0}>
                                        <Radio bg="#385898" value='4' colorScheme="facebook"></Radio><Text color="#23395B">Fourth</Text>
                                    </VStack>
                                    <Spacer></Spacer>
                                    <VStack spacing={0}>
                                        <Radio bg="#385898" value='5' colorScheme="facebook"></Radio><Text color="#23395B">Sangat Memuaskan</Text>
                                    </VStack>
                                </Flex>
                                </div>
                            </RadioGroup>
                        </Box>
                    </Box>
                    <Box bg="#122543" borderRadius='25px'>
                        <Box pt={4} pb={3} pl={5} pr={5}>
                            <Text color={'white'} fontSize='20px'>Pertanyaan</Text>
                        </Box>
                        <Box bg='white' borderRadius='25px' pl={2} pb={4} pt={4}>
                            <RadioGroup onChange={setValue1} value={value1}>
                                <Stack mt={1} spacing={1} pl={4} pr={4} pb={1} color='black'>
                                <HStack><Radio bg="#385898" value='1' colorScheme="facebook"></Radio>
                                <Text color="#23395B">First</Text></HStack>
                                <HStack><Radio bg="#385898" value='2' colorScheme="facebook"></Radio><Text color="#23395B">Second</Text></HStack> 
                                <HStack><Radio bg="#385898" value='3' colorScheme="facebook"></Radio><Text color="#23395B">Third</Text></HStack>
                                <HStack><Radio bg="#385898" value='4' colorScheme="facebook"></Radio><Text color="#23395B">Fourth</Text></HStack>
                                <HStack><Radio bg="#385898" value='5' colorScheme="facebook"></Radio><Text color="#23395B">Sangat Memuaskan</Text></HStack>
                            </Stack>
                            </RadioGroup>
                        </Box>
                    </Box>
                </VStack>
            </Box>
            <Box align='right' pt={4}>
                <NavLink to='/survey-done'>
                    <Button color='white' bgColor='#EA8238' _hover={{ bg: '#d66a1e' }} w='180px' h='55px' fontSize='20px' letterSpacing={1} fontFamily='Nunito' borderRadius='27px'>
                        SUBMIT
                    </Button>
                </NavLink>
            </Box>
        </VStack>
    );
}

export default FillingForm;