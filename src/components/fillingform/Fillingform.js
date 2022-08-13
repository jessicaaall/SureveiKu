import {  Box, Text, Stack, Spacer, Button, Image,  Flex, Checkbox, Link, Heading,Input, Radio, Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
 } from "@chakra-ui/react";
 import React from "react";

const FillingForm = () => {
    const [sliderValue, setSliderValue] = React.useState(50)
    return (
        <Flex
            align="center"
            direction="column"
            m="0 auto"
            maxW={{ xl: "1200px" }}
        >   
            <Box bg='#FFFFFF' borderRadius={'md'} bgOpacity="25%" p={4}>
                <Flex>   
                    <Heading pl={2}>
                        Judul Survei
                    </Heading>
                    <Spacer></Spacer>
                    <Link align="right" p={2}>
                        Contact Surveyor
                    </Link>
                </Flex> 
                <Box bg="#122543" borderRadius={'md'} p={2} m={2}>
                    <Box p={2}>
                        <Text color={'white'}>Pertanyaan</Text>
                    </Box>
                    <Box p={2}>
                        <Image src="https://www.jcceramictiles.com/Content/upload/2017249249/201711241527057755410.jpg"></Image>
                    </Box>
                    <Box p={2} borderRadius={'md'} bg='white'>
                        <Input placeholder='Basic usage' />
                    </Box>
                </Box>
                <Box bg="#122543" borderRadius={'md'} p={2} m={2}>
                    <Box p={2}>
                        <Text color={'white'}>Pertanyaan</Text>
                    </Box>
                    <Box bg='white' borderRadius={'md'} p={2}>
                        <Stack  mt={1} spacing={1}>
                            <Checkbox defaultChecked>Checkbox</Checkbox>
                            <Checkbox defaultChecked>Checkbox</Checkbox>
                            <Checkbox defaultChecked>Checkbox</Checkbox>
                        </Stack>
                    </Box>
                </Box>
                <Box bg='#122543' borderRadius={'md'} p={2} m={2}>
                    <Box p={2}>
                        <Text color='white'>Pertanyaan</Text>
                    </Box>
                    <Box bg='white' borderRadius={'md'} p={2}>
                        <Stack mt={1} spacing={1}>
                            <Radio value='1'>First</Radio>
                            <Radio value='2'>Second</Radio>
                            <Radio value='3'>Third</Radio>
                        </Stack>
                    </Box>
                </Box>
                <Box bg='#122543' borderRadius={'md'} p={2} m={2}>
                    <Box p={2}>
                        <Text color='white'>Pertanyaan</Text>
                    </Box>
                    <Box bg='white' p={2} borderRadius={'md'}>
                        <Slider oncChange={(val)=> setSliderValue(val)}>
                            <SliderMark value={0}>
                                0%
                            </SliderMark>
                            <SliderMark value={25}>
                                25%
                            </SliderMark>
                            <SliderMark value={50}>
                                50%
                            </SliderMark>
                            <SliderMark value={75}>
                                75%
                            </SliderMark>
                            <SliderMark value={100}>
                                100%
                            </SliderMark>
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                            <SliderThumb />
                        </Slider>
                    </Box>
                </Box>
                <Box align="right" pr={2}>
                    <Button bg='#EA8238'>Submit</Button>
                </Box>
            </Box>
        </Flex>
    );
}

export default FillingForm;