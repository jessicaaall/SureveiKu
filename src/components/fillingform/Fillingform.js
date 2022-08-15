import {  Box, Text, Stack, Button, Image, Checkbox, Link, HStack, VStack, Input, Radio, Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    RadioGroup,
    Spacer,
    Flex
} from "@chakra-ui/react";
import React from "react";
import FormalHeading from "../FormalHeading";
import { PhoneIcon } from '@chakra-ui/icons';

import "@fontsource/raleway";
import "@fontsource/krona-one";
import "./garis.css"

const FillingForm = () => {
    const [sliderValue, setSliderValue] = React.useState(50)
    const [value1, setValue1] = React.useState('1')
    const [value, setValue] = React.useState('1')

    return (
        <VStack align='left' h='100%'>   
            <FormalHeading title='JUDUL SURVEI'/>
            <HStack alignSelf={'end'} pb={2}>
                <PhoneIcon color='white' boxSize='6'/>
                <Link align="right" p={1} color='white' fontFamily='' fontSize='20px'>
                    Contact Surveyor
                </Link>
            </HStack>
            <Box bg='#7991b2' borderRadius='20px' p={6} w='auto' pr={4} overflowY={'scroll'} css={{"&::-webkit-scrollbar": {width:"8px",},"&::-webkit-scrollbar-track": {background:'#D9D9D9', borderRadius:"50px",},"&::-webkit-scrollbar-thumb": {background:'#122543', borderRadius:"50px",},}}>
                <VStack align='left' spacing='25px'>
                    <Box bg="#122543" borderRadius='25px'>
                        <Box pt={4} pb={3} pl={5} pr={5}>
                            <Text color={'white'} fontFamily='Raleway' fontSize='20px'>Pertanyaan</Text>
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
                            <Text color={'white'} fontFamily='Raleway' fontSize='20px'>Pertanyaan</Text>
                        </Box>
                        <Box bg='white' borderRadius='25px' p={2}>
                            <Stack mt={1} spacing={1} pl={4} pr={4} pb={1} fontFamily='Raleway' color='black'>
                                <Checkbox defaultChecked colorScheme="facebook">Checkbox</Checkbox>
                                <Checkbox defaultChecked colorScheme="facebook">Checkbox</Checkbox>
                                <Checkbox defaultChecked colorScheme="facebook">Checkbox</Checkbox>
                            </Stack>
                        </Box>
                    </Box>

                    <Box bg="#122543" borderRadius='25px'>
                        <Box pt={4} pb={3} pl={5} pr={5}>
                            <Text color={'white'} fontFamily='Raleway' fontSize='20px'>Pertanyaan</Text>
                        </Box>
                        <Box bg='white' borderRadius='25px' p={2}>
                            <RadioGroup onChange={setValue} value={value}>
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
                            <Text color={'white'} fontFamily='Raleway' fontSize='20px'>Pertanyaan</Text>
                        </Box>
                        <Box bg='white' pl={4} pr={14} pt={6} pb={10} borderRadius='25px'>
                            <RadioGroup onChange={setValue1} value={value1}>
                                <Stack mt={1} spacing={1} pl={4} pr={4} pb={1} fontFamily='Raleway' color='black'>
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
                <Button color='black' bgColor='#EA8238' _hover={{ bg: '#d66a1e' }} w='180px' h='55px' fontSize='18px' fontFamily='Krona One' borderRadius='27px' borderColor='black' border='1px'>
                    SUBMIT
                </Button>
            </Box>
        </VStack>
    );
}

export default FillingForm;