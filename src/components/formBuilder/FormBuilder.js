import { Radio, RadioGroup, Checkbox, CheckboxGroup, IconButton, Flex, Spacer, Box, Text, VStack, UnorderedList, ListItem, Button, Stack, Select, HStack } from '@chakra-ui/react';
import { CloseIcon, TriangleDownIcon, createIcon} from '@chakra-ui/icons'
import FormalHeading from '../FormalHeading';

export const AddIcon = createIcon({
    displayName: 'AddIcon',
    viewBox: '3.9 4 8 8',
    path: (
        <path
        fill='currentColor'
        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
        />
    ),
})
export const PictIcon = createIcon({
    displayName: 'PictIcon',
    viewBox: '0 1 16 15',
    path: (
        <path
        fill='currentColor'
        d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"
        />
    ),
})
export const VidIcon = createIcon({
    displayName: 'VidIcon',
    viewBox: '0 1 16 15',
    path: (
        <path
        fill='currentColor'
        d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"
        />
    ),
})

const FormBuilder = () => {
    return (
<VStack align='left' h='100%'>
            <Box pb={3}>
                <FormalHeading title='Create Survey'/>
            </Box>
            <Box w='auto' h='full' overflowY={'scroll'} css={{"&::-webkit-scrollbar": {width:"8px",},"&::-webkit-scrollbar-track": {background:'#D9D9D9', borderRadius:"50px",},"&::-webkit-scrollbar-thumb": {background:'#122543', borderRadius:"50px",},}}>
                <VStack align='left' pl={3} pt={3} spacing='30px'>
                    <Box w='95.6%' h='auto' bg='#122543' borderRadius='25px'>
                        <Text color='white' fontSize='20px' pl={4} pt={2} pb={2}>
                            Deskripsi Survei
                        </Text>
                        <Box w='100%' h='auto' bg='white' borderRadius='25px' pb={3}>
                            <Text color='#122543' fontSize='40px' fontWeight='900' pl={4} pb={2}>
                                Ceritanya Judul Survei
                            </Text>
                            <Text color='black' fontSize='20px' fontWeight='900' pl={4}> 
                                Deskripsi
                            </Text>
                            <Text color='black' fontSize='17px' pl={4} pr={4}> 
                                Survei ini dibuat untuk menganalisis kaitan antara penggunaan gawai terhadap waktu jam tidur. Hipotesis yang diajukan adalah penggunaan gawai yang berlebih sebelum tidur akan mengakibatkan waktu jam tidur yang berkurang dan kualitas tidur yang tidak baik.
                            </Text>
                        </Box>
                    </Box>

                    <Box w='95.6%' h='auto' bg='#122543' borderRadius='25px'>
                        <Text color='white' fontSize='20px' pl={4} pt={2} pb={2}>
                            Syarat Survei
                        </Text>
                        <Box w='100%' h='auto' bg='white' borderRadius='25px' pb={3}>
                            <UnorderedList color='black' fontSize='20px' pl={4} pt={2} pb={4}>
                                <ListItem>Merupakan mahasiswa</ListItem>
                                <ListItem>Berumur di bawah 25 tahun</ListItem>
                            </UnorderedList>
                            <Box pl={4} pb={2}>
                                <Button bgColor='#122543' color='white' _hover={{ bg: '#375682' }} w='160px' h='30px' fontSize='14px' borderRadius='30px'>
                                    Tambah syarat baru
                                </Button>
                            </Box>
                        </Box>
                    </Box>

                    <HStack alignItems='start' w='99%'>
                    <Box w='98%' h='auto' bg='#122543' borderRadius='25px'>
                        <Box>
                          <Flex>
                            <Text color='white' fontSize='20px' pl={4} pt={2} pb={2}>
                            Pertanyaan
                            </Text>
                            <Spacer />
                            <Select
                            icon={<TriangleDownIcon />}
                            iconSize='m'
                            bgColor='white'
                            color='black'
                            _hover={{ bg: '#375682', color:'white' }}
                            w='180px'
                            h='30px'
                            fontSize='14px'
                            fontWeight={'semibold'}
                            textAlign='center'
                            borderRadius='30px'
                            pt={2} pb={2} mr={2}>
                                <option style={{color:'black'}} value='Paragraph'>Paragraph</option>
                                <option style={{color:'black'}} value='Text'>Text</option>
                                <option style={{color:'black'}} value='Checkbox'>Checkbox</option>
                                <option style={{color:'black'}} value='Radio'>Radio</option>
                            </Select>
                            <IconButton aria-label='Close' icon={<CloseIcon/>} bgColor='#122543' color='white' _hover={{ bg: 'red' }} borderRadius='100' />
                          </Flex>
                        </Box>
                        <Box w="100%" h='auto' bg='white' borderRadius='25px' pb={2} pt={2}>
                            <Text color='black' fontSize='17px' pl={4} pr={4}> 
                                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            </Text>
                        </Box>
                    </Box>
                    <VStack bg='#122543' w='auto' align={'center'} borderRadius='10px' padding={1.5}>
                            <IconButton aria-label='Add' icon={<AddIcon/>} color='#122543' bg='white' size='xs' isRound _hover={{ bg: '#122543', color:'white' }}/>
                            <IconButton aria-label='Add' icon={<PictIcon/>} color='#122543' bg='white' size='xs' isRound _hover={{ bg: '#122543', color:'white' }}/>
                            <IconButton aria-label='Add' icon={<VidIcon/>} color='#122543' bg='white' size='xs' isRound _hover={{ bg: '#122543', color:'white' }}/>
                    </VStack>
                    </HStack>
                    
                    <HStack alignItems={'start'} w='99%'>
                    <Box w='98%' h='auto' bg='#122543' borderRadius='25px'>
                        <Box>
                          <Flex>
                            <Text color='white' fontSize='20px' pl={4} pt={2} pb={2}>
                            Pertanyaan
                            </Text>
                            <Spacer />
                            <Select
                            icon={<TriangleDownIcon />}
                            iconSize='m'
                            bgColor='white'
                            color='black'
                            _hover={{ bg: '#375682', color:'white' }}
                            w='180px'
                            h='30px'
                            fontSize='14px'
                            fontWeight={'semibold'}
                            textAlign='center'
                            borderRadius='30px'
                            pt={2} pb={2} mr={2}>
                                <option style={{color:'black'}} value='Paragraph'>Paragraph</option>
                                <option style={{color:'black'}} value='Text'>Text</option>
                                <option style={{color:'black'}} value='Checkbox'>Checkbox</option>
                                <option style={{color:'black'}} value='Radio'>Radio</option>
                            </Select>
                            <IconButton aria-label='Close' icon={<CloseIcon/>} bgColor='#122543' color='white' _hover={{ bg: 'red' }} borderRadius='100' />
                          </Flex>
                        </Box>
                        <Box w="100%" h='auto' bg='white' borderRadius='25px' pb={3} pt={2}>
                            <Text color='black' fontSize='17px' pl={4} pr={4}> 
                                Survei ini dibuat untuk menganalisis kaitan antara penggunaan gawai terhadap waktu jam tidur. Hipotesis yang diajukan adalah penggunaan gawai yang berlebih sebelum tidur akan mengakibatkan waktu jam tidur yang berkurang dan kualitas tidur yang tidak baik.
                            </Text>
                        </Box>
                    </Box>
                    <VStack bg='#122543' w='auto' align={'center'} borderRadius='10px' padding={1.5}>
                            <IconButton aria-label='Add' icon={<AddIcon/>} color='#122543' bg='white' size='xs' isRound _hover={{ bg: '#122543', color:'white' }}/>
                            <IconButton aria-label='Add' icon={<PictIcon/>} color='#122543' bg='white' size='xs' isRound _hover={{ bg: '#122543', color:'white' }}/>
                            <IconButton aria-label='Add' icon={<VidIcon/>} color='#122543' bg='white' size='xs' isRound _hover={{ bg: '#122543', color:'white' }}/>
                    </VStack>
                    </HStack>

                    <HStack alignItems={'start'} w='99%'>
                    <Box w='98%' h='auto' bg='#122543' borderRadius='25px'>
                        <Box>
                          <Flex>
                            <Text color='white' fontSize='20px' pl={4} pt={2} pb={2}>
                            Pertanyaan
                            </Text>
                            <Spacer />
                            <Select
                            icon={<TriangleDownIcon />}
                            iconSize='m'
                            bgColor='white'
                            color='black'
                            _hover={{ bg: '#375682', color:'white' }}
                            w='180px'
                            h='30px'
                            fontSize='14px'
                            fontWeight={'semibold'}
                            textAlign='center'
                            borderRadius='30px'
                            pt={2} pb={2} mr={2}>
                                <option style={{color:'black'}} value='Paragraph'>Paragraph</option>
                                <option style={{color:'black'}} value='Text'>Text</option>
                                <option style={{color:'black'}} value='Checkbox'>Checkbox</option>
                                <option style={{color:'black'}} value='Radio'>Radio</option>
                            </Select>
                            <IconButton aria-label='Close' icon={<CloseIcon/>} bgColor='#122543' color='white' _hover={{ bg: 'red' }} borderRadius='100' />
                          </Flex>
                        </Box>
                        <Box w="100%" h='auto' bg='white' borderRadius='25px' pb={3} >
                            <Box pl='6' pt='3' pr='6'>
                                <Box pb={3}>
                                <CheckboxGroup colorScheme='facebook' direction={['column', 'row']} >
                                    <Stack spacing={[1, 5]} color='black'>
                                        <Checkbox borderColor={'#375682'} value='Pilihan 1'>Pilihan 1</Checkbox>
                                        <Checkbox borderColor={'#375682'} value='Pilihan 2'>Pilihan 2</Checkbox>
                                        <Checkbox borderColor={'#375682'} value='Pilihan 3'>Pilihan 3</Checkbox>
                                    </Stack>
                                </CheckboxGroup>
                                </Box>
                                <Box marginBottom='1' pt={3}>
                                    <Button bgColor='#122543' color='white' _hover={{ bg: '#375682' }} w='160px' h='30px' fontSize='14px' borderRadius='30px'>
                                        Add New Option
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <VStack bg='#122543' w='auto' align={'center'} borderRadius='10px' padding={1.5}>
                            <IconButton aria-label='Add' icon={<AddIcon/>} color='#122543' bg='white' size='xs' isRound _hover={{ bg: '#122543', color:'white' }}/>
                            <IconButton aria-label='Add' icon={<PictIcon/>} color='#122543' bg='white' size='xs' isRound _hover={{ bg: '#122543', color:'white' }}/>
                            <IconButton aria-label='Add' icon={<VidIcon/>} color='#122543' bg='white' size='xs' isRound _hover={{ bg: '#122543', color:'white' }}/>
                    </VStack>
                    </HStack>

                    <HStack alignItems={'start'} w='99%'>
                    <Box w='98%' h='auto' bg='#122543' borderRadius='25px'>
                        <Box>
                          <Flex>
                            <Text color='white' fontSize='20px' pl={4} pt={2} pb={2}>
                            Pertanyaan
                            </Text>
                            <Spacer />
                            <Select
                            icon={<TriangleDownIcon />}
                            iconSize='m'
                            bgColor='white'
                            color='black'
                            _hover={{ bg: '#375682', color:'white' }}
                            w='180px'
                            h='30px'
                            fontSize='14px'
                            fontWeight={'semibold'}
                            textAlign='center'
                            borderRadius='30px'
                            pt={2} pb={2} mr={2}>
                                <option style={{color:'black'}} value='Paragraph'>Paragraph</option>
                                <option style={{color:'black'}} value='Text'>Text</option>
                                <option style={{color:'black'}} value='Checkbox'>Checkbox</option>
                                <option style={{color:'black'}} value='Radio'>Radio</option>
                            </Select>
                            <IconButton aria-label='Close' icon={<CloseIcon/>} bgColor='#122543' color='white' _hover={{ bg: 'red' }} borderRadius='100' />
                          </Flex>
                        </Box>
                        <Box w="100%" h='auto' bg='white' borderRadius='25px' pb={3} >
                            <Box pl='6' pt='3' pr='6'>
                                <Box pb={3}>
                                    <RadioGroup colorScheme='facebook' direction={['column', 'row']} >
                                        <Stack spacing={[1, 5]} color='black'>
                                            <Radio borderColor={'#375682'} value='Pilihan 1'>Pilihan 1</Radio>
                                            <Radio borderColor={'#375682'} value='Pilihan 2'>Pilihan 2</Radio>
                                            <Radio borderColor={'#375682'} value='Pilihan 3'>Pilihan 3</Radio>
                                        </Stack>
                                    </RadioGroup>
                                </Box>
                                <Box marginBottom='1' pt={3}>
                                    <Button bgColor='#122543' color='white' _hover={{ bg: '#375682' }} w='160px' h='30px' fontSize='14px' borderRadius='30px'>
                                        Add New Option
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <VStack bg='#122543' w='auto' align={'center'} borderRadius='10px' padding={1.5}>
                            <IconButton aria-label='Add' icon={<AddIcon/>} color='#122543' bg='white' size='xs' isRound _hover={{ bg: '#122543', color:'white' }}/>
                            <IconButton aria-label='Add' icon={<PictIcon/>} color='#122543' bg='white' size='xs' isRound _hover={{ bg: '#122543', color:'white' }}/>
                            <IconButton aria-label='Add' icon={<VidIcon/>} color='#122543' bg='white' size='xs' isRound _hover={{ bg: '#122543', color:'white' }}/>
                    </VStack>
                    </HStack>


                    <Box w='95.6%' h='auto' bg='#122543' borderRadius='25px'>
                        <Text color='white' fontSize='20px' pl={4} pt={2} pb={2}>
                            Survei Points
                        </Text>
                        <Box w='100%' h='auto' bg='white' borderRadius='25px'>
                            <Stack pt={2} pl={4} pb={3} spacing='0.5px'>
                                <Text color='black' fontSize='20px'>Points per response : 10</Text>
                                <Text color='black' fontSize='20px'>Target respondents  : 100</Text>
                                <Text color='black' fontSize='20px'>Creation fee        : 1.500 points</Text>
                                <Text color='#7298B9' fontSize='20px'>Points needed     : 2.500</Text>
                            </Stack>
                        </Box>
                    </Box>
                </VStack>
            </Box>
            <Box align='right' pt={4}>
                <Button color='white' bgColor='#EA8238' _hover={{ bg: '#d66a1e' }} w='180px' h='55px' fontSize='20px' letterSpacing={1} borderRadius='27px'>
                    SUBMIT
                </Button>
            </Box>
        </VStack>
    );
};
  
export default FormBuilder;