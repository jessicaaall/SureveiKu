import {Box, Text, VStack, UnorderedList, ListItem, Button, Stack} from '@chakra-ui/react';
  
const FormBuilder2 = () => {
    return (
        <VStack align='left'>
            <Text color='white' fontSize={'48px'} fontWeight='bold' paddingLeft='20px'>
                DETAIL SURVEI
            </Text>
            <Box w='auto' h='full'>
                <VStack p={5} spacing='80px'>
                    <Box w='1075px' h='190px' bg='#122543' borderRadius='25px'>
                        <Text color='white' fontSize='20px' paddingLeft={4} paddingTop={2} paddingBottom={2}>
                            Deskripsi Survei
                        </Text>
                        <Box w='1075px' h='190px' bg='white' borderRadius='25px'>
                            <Text color='#122543' fontSize='40px' fontWeight='650' paddingLeft={4} paddingBottom={2}>
                                Ceritanya Judul Survei
                            </Text>
                            <Text color='black' fontSize='20px' fontWeight='650' paddingLeft={4}> 
                                Deskripsi
                            </Text>
                            <Text color='black' fontSize='18px' paddingLeft={4} paddingRight={4}> 
                                Survei ini dibuat untuk menganalisis kaitan antara penggunaan gawai terhadap waktu jam tidur. Hipotesis yang diajukan adalah penggunaan gawai yang berlebih sebelum tidur akan mengakibatkan waktu jam tidur yang berkurang dan kualitas tidur yang tidak baik.
                            </Text>
                        </Box>
                    </Box>
                    <Box w='1075px' h='130px' bg='#122543' borderRadius='25px'>
                        <Text color='white' fontSize='20px' paddingLeft={4} paddingTop={2} paddingBottom={2}>
                            Syarat Survei
                        </Text>
                        <Box w='1075px' h='130px' bg='white' borderRadius='25px'>
                            <UnorderedList color='black' fontSize='20px' paddingLeft={4} paddingTop={2} paddingBottom={4}>
                                <ListItem>Merupakan mahasiswa</ListItem>
                                <ListItem>Berumur di bawah 25 tahun</ListItem>
                            </UnorderedList>
                            <Box paddingLeft={4}>
                                <Button bgColor='#122543' color='white' _hover={{ bg: '#375682' }} w='150px' h='30px' fontSize='14px' borderRadius='30px'>
                                    Tambah syarat baru
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box w='1075px' h='140px' bg='#122543' borderRadius='25px'>
                        <Text color='white' fontSize='20px' paddingLeft={4} paddingTop={2} paddingBottom={2}>
                            Survei Points
                        </Text>
                        <Box w='1075px' h='140px' bg='white' borderRadius='25px'>
                            <Stack paddingTop={2} paddingLeft={4} spacing='0.5px'>
                                <Text color='black' fontSize='20px'>Points per response : 10</Text>
                                <Text color='black' fontSize='20px'>Target respondents  : 100</Text>
                                <Text color='black' fontSize='20px'>Creation fee        : 1.500 points</Text>
                                <Text color='#7298B9' fontSize='20px'>Points needed     : 2.500</Text>
                            </Stack>
                        </Box>
                    </Box>
                    <Box paddingLeft='56em'>
                        <Button color='black' bgColor='#EA8238' _hover={{ bg: '#d66a1e' }} w='180px' h='55px' fontSize='20px' fontFamily='body' borderRadius='27px' borderColor='black' border='1px'>
                            SUBMIT
                        </Button>
                    </Box>
                </VStack>
            </Box>
        </VStack>
    );
};
  
export default FormBuilder2;