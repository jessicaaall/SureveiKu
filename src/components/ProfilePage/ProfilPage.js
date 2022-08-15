import {Box, Button, Flex, HStack, Input, SimpleGrid, Text, VStack} from '@chakra-ui/react'
import FormalHeading from '../FormalHeading'
import "@fontsource/krona-one"



const ProfilePage = () => {
    return (
        <VStack align="left" w="full" h="full">
            <FormalHeading title="PROFILE"/>
            <SimpleGrid rows={8} spacingY={5} w="auto" h="full">
                <Box w="100%" bg="#0F2543" boxShadow="dark-lg" borderRadius={20}>
                    <HStack>
                        <Text pl="1.5%" w="150px" color="white" fontFamily="raleway" fontSize="lg" align="left">Nama</Text>
                        <Box w="full" h="full" bg="white" borderRadius={20}>
                            <Input size="lg" fontFamily="raleway" fontSize="lg" fontWeight="bold" color="black" placeholder="Sally Hermawan" textAlign="right" borderRadius={20}></Input>
                        </Box>
                    </HStack>
                </Box>
                <Box w="100%" bg="#0F2543" boxShadow="dark-lg" borderRadius={20}>
                    <HStack>
                        <Text pl="1.5%" w="150px" color="white" fontFamily="raleway" fontSize="lg" align="left">No. Telp</Text>
                        <Box w="full" h="full" bg="white" borderRadius={20}>
                            <Input size="lg" fontFamily="raleway" fontSize="lg" fontWeight="bold" color="black" placeholder="08123456789" textAlign="right" borderRadius={20}></Input>
                        </Box>
                    </HStack>
                </Box>
                <Box w="100%" bg="#0F2543" boxShadow="dark-lg" borderRadius={20}>
                    <HStack>
                        <Text pl="1.5%" w="150px" color="white" fontFamily="raleway" fontSize="lg" align="left">Email</Text>
                        <Box w="full" h="full" bg="white" borderRadius={20}>
                            <Input size="lg" fontFamily="raleway" fontSize="lg" fontWeight="bold" color="black" placeholder="akuganteng@sally.com" textAlign="right" borderRadius={20}></Input>
                        </Box>
                    </HStack>
                </Box>
                <Box w="100%" bg="#0F2543" boxShadow="dark-lg" borderRadius={20}>
                    <HStack>
                        <Text pl="1.5%" w="150px" color="white" fontFamily="raleway" fontSize="lg" align="left">Alamat</Text>
                        <Box w="full" h="full" bg="white" borderRadius={20}>
                            <Input size="lg" fontFamily="raleway" fontSize="lg" fontWeight="bold" color="black" placeholder="JL. Tubagus Upin IX No. 23, Sekrelawak, Bondang, Jawa Atas 14335" textAlign="right" borderRadius={20}></Input>
                        </Box>
                    </HStack>
                </Box>
                <Box w="100%" bg="#0F2543" boxShadow="dark-lg" borderRadius={20}>
                    <HStack>
                        <Text pl="1.5%" w="150px" color="white" fontFamily="raleway" fontSize="lg" align="left">Tanggal Lahir</Text>
                        <Box w="full" h="full" bg="white" borderRadius={20}>
                            <Input size="lg" fontFamily="raleway" fontSize="lg" fontWeight="bold" color="black" type="date-local" placeholder="7/03/1970" textAlign="right" borderRadius={20}></Input>
                        </Box>
                    </HStack>
                </Box>
                <Box w="100%" bg="#0F2543" boxShadow="dark-lg" borderRadius={20}>
                    <HStack>
                        <Text pl="1.5%" w="150px" color="white" fontFamily="raleway" fontSize="lg" align="left">Pekerjaan</Text>
                        <Box w="full" h="full" bg="white" borderRadius={20}>
                            <Input size="lg" fontFamily="raleway" fontSize="lg" fontWeight="bold" color="black" placeholder="Psikolog" textAlign="right" borderRadius={20}></Input>
                        </Box>
                    </HStack>
                </Box>
                <Box w="100%" bg="#0F2543" boxShadow="dark-lg" borderRadius={20}>
                    <HStack>
                        <Text pl="1.5%" w="150px" color="white" fontFamily="raleway" fontSize="lg" align="left">Gender</Text>
                        <Box w="full" h="full" bg="white" borderRadius={20}>
                            <Input size="lg" fontFamily="raleway" fontSize="lg" fontWeight="bold" color="black" placeholder="Perempuan" textAlign="right" borderRadius={20}></Input>
                        </Box>
                    </HStack>
                </Box>
                <Box w="100%" bg="#0F2543" boxShadow="dark-lg" borderRadius={20}>
                    <HStack>
                        <Text pl="1.5%" w="150px" color="white" fontFamily="raleway" fontSize="lg" align="left">Hobi</Text>
                        <Box w="full" h="full" bg="white" borderRadius={20}>
                            <Input size="lg" fontFamily="raleway" fontSize="lg" fontWeight="bold" color="black" placeholder="Minum Kopi" textAlign="right" borderRadius={20}></Input>
                        </Box>
                    </HStack>
                </Box>
            </SimpleGrid>
            <Flex pl="85%" py="1.5%">
                <Button 
                    bg='darkorange' 
                    borderRadius={20}
                    border="1px"
                    color='black'
                    fontWeight='bold'
                    w='100%'
                    fontSize={18} 
                    _hover={{ bg: '#231E63' }}>EDIT PROFILE</Button>
            </Flex>
        </VStack>
    )
}

export default ProfilePage;