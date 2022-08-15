import { Box, Button, Center, HStack, Spacer, Stack, Text } from "@chakra-ui/react"
import { HiOutlineDocumentAdd } from "react-icons/hi"
import { HiOutlineDocumentSearch } from "react-icons/hi"
import { HiOutlineDocumentText } from "react-icons/hi"

const Service = () => {
    return(
        <HStack spacing={20} textAlign='center'>
            <Center>
                <Box w='25%' h='500px' bg='white' boxShadow="0 4px 12px 0 black" rounded="md" mr="2.5%">
                    <Stack w='100%' h='100%' alignItems='center'>
                        <Center w="full" h="100px" rounded="md" bg="#0F2543">
                            <Text fontSize="4xl" fontWeight="bold" color="white">
                                Build Surveys</Text>
                        </Center>
                        <Spacer/>
                        <Box>
                            <HiOutlineDocumentAdd color="#0F2543" size="125px"/>
                        </Box>
                        <Text color='black'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
                        <Spacer/>
                        <Button bgColor='#0F2543' color='white' _hover={{ bg: '#375682' }} w='80%' fontWeight='bold'>TRY NOW</Button>
                        <Spacer/>
                    </Stack>
                </Box>
                <Box w='25%' h='500px' bg='#0F2543' boxShadow="0 4px 12px 0 black" rounded="md" mx="2.5%">
                    <Stack w='100%' h='100%' alignItems='center'>
                        <Center w="full" h="100px" rounded="md" bg="white">
                            <Text fontSize="4xl" fontWeight="bold" color="#0F2543">
                                Real Time Analysis</Text>
                        </Center>
                        <Spacer/>
                        <Box>
                            <HiOutlineDocumentSearch color="white" size="125px"/>
                        </Box>
                        <Text color='white'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
                        <Spacer/>
                        <Button bgColor='white' color='#0F2543' _hover={{ bg: '#D0CDCD' }} w='80%' fontWeight='bold'>TRY NOW</Button>
                        <Spacer/>
                    </Stack>
                </Box>
                <Box w='25%' h='500px' bg='white' boxShadow="0 4px 12px 0 black" rounded="md" ml="2.5%">
                    <Stack w='100%' h='100%' alignItems='center'>
                        <Center w="full" h="100px" rounded="md" bg="#0F2543">
                            <Text fontSize="4xl" fontWeight="bold" color="white">
                                Fill in Surveys</Text>
                        </Center>
                        <Spacer/>
                        <Box>
                            <HiOutlineDocumentText color="#0F2543" size="125px"/>
                        </Box>
                        <Text color='black'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
                        <Spacer/>
                        <Button bgColor='#0F2543' color='white' _hover={{ bg: '#375682' }} w='80%' fontWeight='bold'>TRY NOW</Button>
                        <Spacer/>
                    </Stack>
                </Box>
            </Center>
        </HStack>
    );
}

export default Service;
