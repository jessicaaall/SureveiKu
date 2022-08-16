import {  
    Box, 
    Text, 
    Stack, 
    Button, 
    Image, 
    Checkbox, 
    Link, 
    HStack, 
    VStack, 
    Radio,
    RadioGroup,
    Spacer,
    Flex
} from "@chakra-ui/react";
import React from "react";
import FormalHeading from "../FormalHeading";
import { NavLink } from "react-router-dom";
import {BsTelephone} from "react-icons/bs";

import QuestionInputBox from "./QuestionInputBox";
import QuestionNonInputBox from "./QuestionNonInput";

import "./garis.css"


const FillingForm = () => {
    const [value1, setValue1] = React.useState('1')
    const [value, setValue] = React.useState('1')

    return (
        <VStack align='left' h='100%'>   
            <FormalHeading title='Judul Survei'/>

            <HStack alignSelf={'end'} pb={2}>
                <NavLink to='/dashboard'>
                    <Link>
                        <Button
                        color='white'
                        variant='link'
                        fontSize='2em'
                        leftIcon={<BsTelephone/>}>
                        <Text>Contact Surveyor</Text>
                        </Button>
                    </Link>
                </NavLink>
            </HStack>

            <Box borderRadius='20px' p={6} w='auto' pr={4} overflowY={'scroll'} css={{"&::-webkit-scrollbar": {width:"8px",},"&::-webkit-scrollbar-track": {background:'#D9D9D9', borderRadius:"50px",},"&::-webkit-scrollbar-thumb": {background:'#122543', borderRadius:"50px",},}}>
                <VStack align='left' spacing='25px'>
                    <QuestionInputBox judulPertanyaan='Contoh Pertanyaan Input' inputPlaceholder='Masukkan contoh jawaban' imageSrc='https://www.jcceramictiles.com/Content/upload/2017249249/201711241527057755410.jpg'>
                        <Text color='white'>Bisa jadi deskripsi gambar ato yang lain</Text>
                    </QuestionInputBox>

                    <QuestionNonInputBox judulPertanyaan='Contoh Pertanyaan Checkbox'>
                        <Stack mt={1} spacing={1} pl={4} pr={4} pb={1} color='black'>
                            <Checkbox defaultChecked colorScheme="facebook">Checkbox</Checkbox>
                            <Checkbox defaultChecked colorScheme="facebook">Checkbox</Checkbox>
                            <Checkbox defaultChecked colorScheme="facebook">Checkbox</Checkbox>
                        </Stack>
                    </QuestionNonInputBox>

                    <QuestionNonInputBox judulPertanyaan='Contoh Radio Horizontal' imageSrc='https://coolthemestores.com/wp-content/uploads/2021/06/valorant-wallpaper-background.jpg'>
                        <RadioGroup onChange={setValue} value={value} align='center' p={2}>
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
                    </QuestionNonInputBox>

                    <QuestionNonInputBox judulPertanyaan='Contoh Radio Vertikal'>
                        <RadioGroup onChange={setValue1} value={value1}>
                            <Stack mt={1} spacing={1} pl={4} pr={4} pb={1} color='black'>
                                <Radio bg="#385898" value='1' colorScheme="facebook">First</Radio>
                                <Radio bg="#385898" value='2' colorScheme="facebook">Second</Radio>
                                <Radio bg="#385898" value='3' colorScheme="facebook">Third</Radio>
                            </Stack>
                        </RadioGroup>
                    </QuestionNonInputBox>
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
