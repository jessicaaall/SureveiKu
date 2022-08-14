import {Box, Text, VStack, UnorderedList, ListItem, Button, Stack} from '@chakra-ui/react';
import "@fontsource/raleway"
import "@fontsource/krona-one"
  
const FormBuilder2 = () => {
    return (
        <VStack align='left'>
            <Text color='white' fontSize={'48px'} fontWeight='bold' pl='20px'>
                DETAIL SURVEI
            </Text>
            <Box w='auto' h='full' css={{"&::-webkit-scrollbar": {width:"8px",},"&::-webkit-scrollbar-track": {background:'#D9D9D9', borderRadius:"50px",},"&::-webkit-scrollbar-thumb": {background:'#122543', borderRadius:"50px",},}} overflowX="auto" maxHeight="460px">
                <VStack p={5} spacing='80px'>
                    <Box w='1075px' h='190px' bg='#122543' borderRadius='25px'>
                        <Text color='white' fontSize='20px' pl={4} pt={2} pb={2} fontFamily='Raleway'>
                            Deskripsi Survei
                        </Text>
                        <Box w='1075px' h='190px' bg='white' borderRadius='25px'>
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
                    <Box w='1075px' h='130px' bg='#122543' borderRadius='25px'>
                        <Text color='white' fontSize='20px' pl={4} pt={2} pb={2} fontFamily='Raleway'>
                            Syarat Survei
                        </Text>
                        <Box w='1075px' h='130px' bg='white' borderRadius='25px'>
                            <UnorderedList color='black' fontSize='20px' pl={4} pt={2} pb={4} fontFamily='Raleway'>
                                <ListItem>Merupakan mahasiswa</ListItem>
                                <ListItem>Berumur di bawah 25 tahun</ListItem>
                            </UnorderedList>
                            <Box paddingLeft={4}>
                                <Button bgColor='#122543' color='white' _hover={{ bg: '#375682' }} w='160px' h='30px' fontSize='14px' borderRadius='30px' fontFamily='Raleway'>
                                    Tambah syarat baru
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box w='1075px' h='140px' bg='#122543' borderRadius='25px'>
                        <Text color='white' fontSize='20px' pl={4} pt={2} pb={2} fontFamily='Raleway'>
                            Survei Points
                        </Text>
                        <Box w='1075px' h='140px' bg='white' borderRadius='25px'>
                            <Stack pt={2} pl={4} spacing='0.5px'>
                                <Text color='black' fontSize='20px' fontFamily='Raleway'>Points per response : 10</Text>
                                <Text color='black' fontSize='20px' fontFamily='Raleway'>Target respondents  : 100</Text>
                                <Text color='black' fontSize='20px' fontFamily='Raleway'>Creation fee        : 1.500 points</Text>
                                <Text color='#7298B9' fontSize='20px' fontFamily='Raleway'>Points needed     : 2.500</Text>
                            </Stack>
                        </Box>
                    </Box>
                    <Box paddingLeft='56em'>
                        <Button color='black' bgColor='#EA8238' _hover={{ bg: '#d66a1e' }} w='180px' h='55px' fontSize='18px' fontFamily='Krona One' borderRadius='27px' borderColor='black' border='1px'>
                            SUBMIT
                        </Button>
                    </Box>
                </VStack>
            </Box>
        </VStack>
    );
};
  
export default FormBuilder2;