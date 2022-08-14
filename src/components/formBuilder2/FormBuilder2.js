import { Radio, RadioGroup, Checkbox, CheckboxGroup, IconButton, Flex, Spacer, MenuItem, MenuList, Box, Text, VStack, UnorderedList, ListItem, Button, Stack, Menu, MenuButton } from '@chakra-ui/react';
import { ChevronDownIcon, CloseIcon} from '@chakra-ui/icons'
import FormalHeading from '../FormalHeading';
import "@fontsource/raleway";
import "@fontsource/krona-one";


const FormBuilder2 = () => {
    return (
        <VStack align='left' h='100%'>
            <Box pb={3}>
                <FormalHeading title='CREATE SURVEY'/>
            </Box>
            <Box w='auto' h='full' overflowY={'scroll'} css={{"&::-webkit-scrollbar": {width:"8px",},"&::-webkit-scrollbar-track": {background:'#D9D9D9', borderRadius:"50px",},"&::-webkit-scrollbar-thumb": {background:'#122543', borderRadius:"50px",},}}>
                <VStack align='left' pl={3} pt={3} spacing='30px'>
                    <Box w='98%' h='auto' bg='#122543' borderRadius='25px'>
                        <Text color='white' fontSize='20px' pl={4} pt={2} pb={2} fontFamily='Raleway'>
                            Deskripsi Survei
                        </Text>
                        <Box w='100%' h='auto' bg='white' borderRadius='25px' pb={3}>
                            <Text color='#122543' fontSize='40px' fontWeight='900' pl={4} pb={2} fontFamily='Raleway'>
                                Ceritanya Judul Survei
                            </Text>
                            <Text color='black' fontSize='20px' fontWeight='900' pl={4} fontFamily='Raleway'> 
                                Deskripsi
                            </Text>
                            <Text color='black' fontSize='17px' pl={4} pr={4} fontFamily='Raleway'> 
                                Survei ini dibuat untuk menganalisis kaitan antara penggunaan gawai terhadap waktu jam tidur. Hipotesis yang diajukan adalah penggunaan gawai yang berlebih sebelum tidur akan mengakibatkan waktu jam tidur yang berkurang dan kualitas tidur yang tidak baik.
                            </Text>
                        </Box>
                    </Box>

                    <Box w='98%' h='auto' bg='#122543' borderRadius='25px'>
                        <Text color='white' fontSize='20px' pl={4} pt={2} pb={2} fontFamily='Raleway'>
                            Syarat Survei
                        </Text>
                        <Box w='100%' h='auto' bg='white' borderRadius='25px' pb={3}>
                            <UnorderedList color='black' fontSize='20px' pl={4} pt={2} pb={4} fontFamily='Raleway'>
                                <ListItem>Merupakan mahasiswa</ListItem>
                                <ListItem>Berumur di bawah 25 tahun</ListItem>
                            </UnorderedList>
                            <Box pl={4} pb={2}>
                                <Button bgColor='#122543' color='white' _hover={{ bg: '#375682' }} w='160px' h='30px' fontSize='14px' borderRadius='30px' fontFamily='Raleway'>
                                    Tambah syarat baru
                                </Button>
                            </Box>
                        </Box>
                    </Box>

                    <Box w='98%' h='auto' bg='#122543' borderRadius='25px'>
                        <Box>
                          <Flex>
                            <Text color='white' fontSize='20px' pl={4} pt={2} pb={2} fontFamily='Raleway'>
                            Pertanyaan
                            </Text>
                            <Spacer />
                              <Box marginTop='2' marginRight='2'>
                                <Menu>
                                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bgColor='white' color='black' _hover={{ bg: '#375682' }} w='160px' h='30px' fontSize='14px' borderRadius='30px' fontFamily='Raleway' pl={4} pt={2} pb={2}>
                                        Paragraph
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>Text</MenuItem>
                                        <MenuItem>Checkbox</MenuItem>
                                        <MenuItem>Radio</MenuItem>
                                    </MenuList>
                                </Menu>
                              </Box>
                                <IconButton aria-label='Close' icon={<CloseIcon/>} bgColor='#122543' color='white' _hover={{ bg: 'red' }} borderRadius='100' />
                          </Flex>
                        </Box>

                        <Box w="100%" h='auto' bg='white' borderRadius='25px' pb={3}>
                            <Text color='black' fontSize='20px' fontWeight='900' pl={4} fontFamily='Raleway'> 
                                Deskripsi
                            </Text>
                            <Text color='black' fontSize='17px' pl={4} pr={4} fontFamily='Raleway'> 
                                Survei ini dibuat untuk menganalisis kaitan antara penggunaan gawai terhadap waktu jam tidur. Hipotesis yang diajukan adalah penggunaan gawai yang berlebih sebelum tidur akan mengakibatkan waktu jam tidur yang berkurang dan kualitas tidur yang tidak baik.
                            </Text>
                        </Box>
                    </Box>
                    <Box w='98%' h='auto' bg='#122543' borderRadius='25px'>
                        <Box>
                          <Flex>
                            <Text color='white' fontSize='20px' pl={4} pt={2} pb={2} fontFamily='Raleway'>
                            Pertanyaan
                            </Text>
                            <Spacer />
                              <Box marginTop='2' marginRight='2'>
                                <Menu>
                                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bgColor='white' color='black' _hover={{ bg: '#375682' }} w='160px' h='30px' fontSize='14px' borderRadius='30px' fontFamily='Raleway' pl={4} pt={2} pb={2}>
                                        Text
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>Paragraph</MenuItem>
                                        <MenuItem>Checkbox</MenuItem>
                                        <MenuItem>Radio</MenuItem>
                                    </MenuList>
                                </Menu>
                              </Box>
                                <IconButton aria-label='Close' icon={<CloseIcon/>} bgColor='#122543' color='white' _hover={{ bg: 'red' }} borderRadius='100' />
                          </Flex>
                        </Box>
                        <Box w="100%" h='auto' bg='white' borderRadius='25px' pb={3}>
                            <Text color='black' fontSize='17px' pl={4} pr={4} fontFamily='Raleway'> 
                                Survei ini dibuat untuk menganalisis kaitan antara penggunaan gawai terhadap waktu jam tidur. Hipotesis yang diajukan adalah penggunaan gawai yang berlebih sebelum tidur akan mengakibatkan waktu jam tidur yang berkurang dan kualitas tidur yang tidak baik.
                            </Text>
                        </Box>
                    </Box>

                    <Box w='98%' h='auto' bg='#122543' borderRadius='25px'>
                        <Box>
                          <Flex>
                            <Text color='white' fontSize='20px' pl={4} pt={2} pb={2} fontFamily='Raleway'>
                            Pertanyaan
                            </Text>
                            <Spacer />
                              <Box marginTop='2' marginRight='2'>  
                                <Menu>
                                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bgColor='white' color='black' _hover={{ bg: '#375682' }} w='160px' h='30px' fontSize='14px' borderRadius='30px' fontFamily='Raleway' pl={4} pt={2} pb={2}>
                                        Checkbox
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>Paragraph</MenuItem>
                                        <MenuItem>Text</MenuItem>
                                        <MenuItem>Radio</MenuItem>
                                    </MenuList>
                                </Menu>
                              </Box>
                            <IconButton aria-label='Close' icon={<CloseIcon/>} bgColor='#122543' color='white' _hover={{ bg: 'red' }} borderRadius='100' />
                          </Flex>
                        </Box>

                        <Box w="100%" h='auto' bg='white' borderRadius='25px' pb={3} >
                            <Box pl='6' pt='3' pr='6'>
                                <Box pb={3}>
                                <CheckboxGroup colorScheme='facebook' direction={['column', 'row']} >
                                    <Stack spacing={[1, 5]}>
                                        <Checkbox fontFamily='Raleway' value='Pilihan 1'>Pilihan 1</Checkbox>
                                        <Checkbox fontFamily='Raleway' value='Pilihan 2'>Pilihan 2</Checkbox>
                                        <Checkbox fontFamily='Raleway' value='Pilihan 3'>Pilihan 3</Checkbox>
                                    </Stack>
                                </CheckboxGroup>
                                </Box>
                                <Box marginBottom='1' pt={3}>
                                    <Button bgColor='#122543' color='white' _hover={{ bg: '#375682' }} w='160px' h='30px' fontSize='14px' borderRadius='30px' fontFamily='Raleway'>
                                        Add New Option
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box w='98%' h='auto' bg='#122543' borderRadius='25px'>
                        <Box>
                          <Flex>
                            <Text color='white' fontSize='20px' pl={4} pt={2} pb={2} fontFamily='Raleway'>
                            Pertanyaan
                            </Text>
                            <Spacer />
                              <Box marginTop='2' marginRight='2'>
                                <Menu>
                                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bgColor='white' color='black' _hover={{ bg: '#375682' }} w='160px' h='30px' fontSize='14px' borderRadius='30px' fontFamily='Raleway' pl={4} pt={2} pb={2}>
                                        Radio
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>Paragraph</MenuItem>
                                        <MenuItem>Text</MenuItem>
                                        <MenuItem>Checkbox</MenuItem>
                                    </MenuList>
                                </Menu>
                              </Box>
                            <IconButton aria-label='Close' icon={<CloseIcon/>} bgColor='#122543' color='white' _hover={{ bg: 'red' }} borderRadius='100' />
                          </Flex>
                        </Box>
                        <Box w="100%" h='auto' bg='white' borderRadius='25px' pb={3} >
                            <Box pl='6' pt='3' pr='6'>
                                <Box pb={3}>
                                    <RadioGroup colorScheme='facebook' direction={['column', 'row']} >
                                        <Stack spacing={[1, 5]}>
                                            <Radio fontFamily='Raleway' value='Pilihan 1'>Pilihan 1</Radio>
                                            <Radio fontFamily='Raleway' value='Pilihan 2'>Pilihan 2</Radio>
                                            <Radio fontFamily='Raleway' value='Pilihan 3'>Pilihan 3</Radio>
                                        </Stack>
                                    </RadioGroup>
                                </Box>
                                <Box marginBottom='1' pt={3}>
                                    <Button bgColor='#122543' color='white' _hover={{ bg: '#375682' }} w='160px' h='30px' fontSize='14px' borderRadius='30px' fontFamily='Raleway'>
                                        Add New Option
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>


                    <Box w='98%' h='auto' bg='#122543' borderRadius='25px'>
                        <Text color='white' fontSize='20px' pl={4} pt={2} pb={2} fontFamily='Raleway'>
                            Survei Points
                        </Text>
                        <Box w='100%' h='auto' bg='white' borderRadius='25px'>
                            <Stack pt={2} pl={4} pb={3} spacing='0.5px'>
                                <Text color='black' fontSize='20px' fontFamily='Raleway'>Points per response : 10</Text>
                                <Text color='black' fontSize='20px' fontFamily='Raleway'>Target respondents  : 100</Text>
                                <Text color='black' fontSize='20px' fontFamily='Raleway'>Creation fee        : 1.500 points</Text>
                                <Text color='#7298B9' fontSize='20px' fontFamily='Raleway'>Points needed     : 2.500</Text>
                            </Stack>
                        </Box>
                    </Box>
                </VStack>
            </Box>
            <Box align='right' pt={6}>
                <Button color='black' bgColor='#EA8238' _hover={{ bg: '#d66a1e' }} w='180px' h='55px' fontSize='18px' fontFamily='Krona One' borderRadius='27px' borderColor='black' border='1px'>
                    SUBMIT
                </Button>
            </Box>
        </VStack>
    );
};
  
export default FormBuilder2;