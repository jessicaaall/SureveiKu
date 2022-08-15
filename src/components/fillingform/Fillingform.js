import {  Box, Text, Stack, Spacer, Button, Image,  Flex, Checkbox, Link, HStack, VStack, Input, Radio, Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
} from "@chakra-ui/react";
import React from "react";
import FormalHeading from "../FormalHeading";
import { PhoneIcon } from '@chakra-ui/icons';
import "@fontsource/nunito";
import "@fontsource/raleway";
import "@fontsource/krona-one";


const FillingForm = () => {
    const [sliderValue, setSliderValue] = React.useState(50)
    return (
        <VStack align='left' direction="column" h='100%'>   
            <FormalHeading title='JUDUL SURVEI'/>
            <HStack alignSelf={'end'} pb={2}>
                <PhoneIcon color='white' boxSize='6'/>
                <Link align="right" p={1} color='white' fontFamily='Nunito' fontSize='20px'>
                    Contact Surveyor
                </Link>
            </HStack>
            <Box bg='#7991b2' borderRadius='20px' p={6} w='100%'>
                <VStack pr={4} align='left' spacing='25px' overflowY={'scroll'} maxHeight='330px' css={{"&::-webkit-scrollbar": {width:"8px",},"&::-webkit-scrollbar-track": {background:'#D9D9D9', borderRadius:"50px",},"&::-webkit-scrollbar-thumb": {background:'#122543', borderRadius:"50px",},}}>
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
                                <Checkbox defaultChecked>Checkbox</Checkbox>
                                <Checkbox defaultChecked>Checkbox</Checkbox>
                                <Checkbox defaultChecked>Checkbox</Checkbox>
                            </Stack>
                        </Box>
                    </Box>
                    <Box bg="#122543" borderRadius='25px'>
                        <Box pt={4} pb={3} pl={5} pr={5}>
                            <Text color={'white'} fontFamily='Raleway' fontSize='20px'>Pertanyaan</Text>
                        </Box>
                        <Box bg='white' borderRadius='25px' p={2}>
                            <Stack mt={1} spacing={1} pl={4} pr={4} pb={1} fontFamily='Raleway' color='black'>
                                <Radio value='1'>First</Radio>
                                <Radio value='2'>Second</Radio>
                                <Radio value='3'>Third</Radio>
                            </Stack>
                        </Box>
                    </Box>
                    <Box bg="#122543" borderRadius='25px'>
                        <Box pt={4} pb={3} pl={5} pr={5}>
                            <Text color={'white'} fontFamily='Raleway' fontSize='20px'>Pertanyaan</Text>
                        </Box>
                        <Box bg='white' pl={14} pr={14} pt={6} pb={10} borderRadius='25px'>
                            <Slider oncChange={(val)=> setSliderValue(val)}>
                                <SliderMark value={0} color='black'>
                                    0%
                                </SliderMark>
                                <SliderMark value={25} color='black'>
                                    25%
                                </SliderMark>
                                <SliderMark value={50} color='black'>
                                    50%
                                </SliderMark>
                                <SliderMark value={75} color='black'>
                                    75%
                                </SliderMark>
                                <SliderMark value={100} color='black'>
                                    100%
                                </SliderMark>
                                <SliderTrack>
                                    <SliderFilledTrack />
                                </SliderTrack>
                                <SliderThumb/>
                            </Slider>
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