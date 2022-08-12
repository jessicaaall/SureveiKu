import {Box, Text, HStack, Image, Spacer, Stack, Button, Center, VStack, Flex, UnorderedList, ListItem, Tab} from "@chakra-ui/react";

const AvailableSurveys = () => {
    return ( 
        <VStack align='right'>
            <Box>
                <Text color='white' fontSize={'3em'} fontWeight='bold'>AVAILABLE SURVEYS</Text>
            </Box>
            <HStack spacing={20} marginTop={'10%'}>
                <Box w='25%' h='700px' bg='white' boxShadow="0 4px 12px 0 black" borderRadius={40} padding='1%' margin='2%'>
                    <Stack w='100%' h='100%'>
                        <Spacer></Spacer>
                        <Box boxSize={'15em'} w='100%'>
                            <Spacer></Spacer>
                            <Image src='./AvailableSurveys.png'/>
                        </Box>
                        <Text fontSize='1em' fontWeight='bold' color='black' align='left'>Judul</Text>
                        <Text align='left'>Kaitan Gawai dan Jam Tidur</Text>
                        <Text fontSize='1em' fontWeight='bold' color='black' align='left'>Deskripsi</Text>
                        <Text align='left'>Survei ini dibuat untuk menganalisis kaitan antara penggunaan gawai terhadap waktu jam tidur. Hipotesis yang diajukan adalah penggunaan gawai yang berlebih sebelum tidur akan mengakibatkan waktu jam tidur yang berkurang dan kualitas tidur yang tidak baik</Text>
                        <Text fontSize='1em' fontWeight='bold' color='black' align='left'>Syarat Khusus</Text>
                        <Flex paddingLeft='10px'>
                            <UnorderedList>
                                <ListItem align='left'>Merupakan mahasiswa</ListItem>
                                <ListItem align='left'>Berumur di bawah 25 tahun</ListItem>
                            </UnorderedList>
                        </Flex>
                        <Spacer></Spacer>
                        <Spacer></Spacer>
                        <Text align='center'>Redeemable Points: 10</Text>
                        <Box align='center'>
                            <Button bgColor='#EA8238' color='white' _hover={{ bg: '#d66a1e' }} w='80%' fontWeight='bold' borderRadius={20}>PARTICIPATE</Button>
                        </Box>
                        <Spacer></Spacer>
                    </Stack>
                </Box>
                <Box w='25%' h='700px' bg='white' boxShadow="0 4px 12px 0 black" borderRadius={40} padding='1%' margin='2%'>
                    <Stack w='100%' h='100%'>
                        <Spacer></Spacer>
                        <Box boxSize={'15em'} w='100%'>
                            <Spacer></Spacer>
                            <Image src='./AvailableSurveys.png'/>
                        </Box>
                        <Text fontSize='1em' fontWeight='bold' color='black' align='left'>Judul</Text>
                        <Text align='left'>Kaitan Gawai dan Jam Tidur</Text>
                        <Text fontSize='1em' fontWeight='bold' color='black' align='left'>Deskripsi</Text>
                        <Text align='left'>Survei ini dibuat untuk menganalisis kaitan antara penggunaan gawai terhadap waktu jam tidur. Hipotesis yang diajukan adalah penggunaan gawai yang berlebih sebelum tidur akan mengakibatkan waktu jam tidur yang berkurang dan kualitas tidur yang tidak baik</Text>
                        <Text fontSize='1em' fontWeight='bold' color='black' align='left'>Syarat Khusus</Text>
                        <Flex paddingLeft='10px'>
                            <UnorderedList>
                                <ListItem align='left'>Merupakan mahasiswa</ListItem>
                                <ListItem align='left'>Berumur di bawah 25 tahun</ListItem>
                            </UnorderedList>
                        </Flex>
                        <Spacer></Spacer>
                        <Spacer></Spacer>
                        <Text align='center'>Redeemable Points: 10</Text>
                        <Box align='center'>
                            <Button bgColor='#EA8238' color='white' _hover={{ bg: '#d66a1e' }} w='80%' fontWeight='bold' borderRadius={20}>PARTICIPATE</Button>
                        </Box>
                        <Spacer></Spacer>
                    </Stack>
                </Box>
                <Box w='25%' h='700px' bg='white' boxShadow="0 4px 12px 0 black" borderRadius={40} padding='1%' margin='2%'>
                    <Stack w='100%' h='100%'>
                        <Spacer></Spacer>
                        <Box boxSize={'15em'} w='100%'>
                            <Spacer></Spacer>
                            <Image src='./AvailableSurveys.png'/>
                        </Box>
                        <Text fontSize='1em' fontWeight='bold' color='black' align='left'>Judul</Text>
                        <Text align='left'>Kaitan Gawai dan Jam Tidur</Text>
                        <Text fontSize='1em' fontWeight='bold' color='black' align='left'>Deskripsi</Text>
                        <Text align='left'>Survei ini dibuat untuk menganalisis kaitan antara penggunaan gawai terhadap waktu jam tidur. Hipotesis yang diajukan adalah penggunaan gawai yang berlebih sebelum tidur akan mengakibatkan waktu jam tidur yang berkurang dan kualitas tidur yang tidak baik</Text>
                        <Text fontSize='1em' fontWeight='bold' color='black' align='left'>Syarat Khusus</Text>
                        <Flex paddingLeft='10px'>
                            <UnorderedList>
                                <ListItem align='left'>Merupakan mahasiswa</ListItem>
                                <ListItem align='left'>Berumur di bawah 25 tahun</ListItem>
                            </UnorderedList>
                        </Flex>
                        <Spacer></Spacer>
                        <Spacer></Spacer>
                        <Text align='center'>Redeemable Points: 10</Text>
                        <Box align='center'>
                            <Button bgColor='#EA8238' color='white' _hover={{ bg: '#d66a1e' }} w='80%' fontWeight='bold' borderRadius={20}>PARTICIPATE</Button>
                        </Box>
                        <Spacer></Spacer>
                    </Stack>
                </Box>
        </HStack>
    </VStack>
     );
}
 
export default AvailableSurveys;