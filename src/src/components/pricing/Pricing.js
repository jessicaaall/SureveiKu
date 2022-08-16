import { HStack, Box, Text, Stack, Spacer, Button, Image, Center} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Pricing = () => {
    return ( 
        <HStack spacing={20} textAlign='center'>
            <Center>
                <Box w='25%' h='500px' bg='white' boxShadow="0 4px 12px 0 black" borderRadius={20} padding='1vh' margin='2vh'>
                    <Stack w='100%' h='100%' alignItems='center'>
                        <Spacer></Spacer>
                        <Box boxSize='4em'>
                            <Image src='./paperwork.png'/>
                        </Box>
                        <Text fontSize='2em' fontWeight='bold' color='black'>25.000pts</Text>
                        <Text color='black'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
                        <Spacer></Spacer>
                        <Text fontSize='2em' fontWeight='bold' color='black'>Rp30.000,-</Text>
                        <Text color='black'>Dapatkan hingga puluhan survey!</Text>    
                        <Spacer></Spacer>
                        <NavLink to='/signup'>
                            <Button bgColor='#0F2543' color='white' _hover={{ bg: '#375682' }} w='full' fontWeight='bold'>BELI SEKARANG</Button>
                        </NavLink>
                        <Spacer></Spacer>
                    </Stack>
                </Box>
                <Box w='25%' h='500px' bg='#0F2543' boxShadow="0 4px 12px 0 black" borderRadius={20} padding='1%' margin='2%'>
                    <Stack w='100%' h='100%' alignItems='center'>
                        <Spacer></Spacer>
                        <Box boxSize='4em'>
                            <Image src='./w_paperwork.png'/>
                        </Box>
                        <Text fontSize='2em' fontWeight='bold' color='white'>50.000pts</Text>
                        <Text color='white'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
                        <Spacer></Spacer>
                        <Text fontSize='2em' fontWeight='bold' color='white'>Rp52.500,-</Text>
                        <Text color='white'>Dapatkan hingga puluhan survey!</Text>    
                        <Spacer></Spacer>
                        <NavLink to='/signup'>
                            <Button bgColor='white' color='#0F2543' _hover={{ bg: '#D0CDCD' }} w='full' fontWeight='bold'>BELI SEKARANG</Button>
                        </NavLink>
                        <Spacer></Spacer>
                    </Stack>
                </Box>
                <Box w='25%' h='500px' bg='white' boxShadow="0 4px 12px 0 black" borderRadius={20} padding='1%' margin='2%'>
                    <Stack w='100%' h='100%' alignItems='center'>
                        <Spacer></Spacer>
                        <Box boxSize='4em'>
                            <Image src='./paperwork.png'/>
                        </Box>
                        <Text fontSize='2em' fontWeight='bold' color='black'>10.000pts</Text>
                        <Text color='black'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
                        <Spacer></Spacer>
                        <Text fontSize='2em' fontWeight='bold' color='black'>Rp17.000,-</Text>
                        <Text color='black'>Dapatkan hingga puluhan survey!</Text>    
                        <Spacer></Spacer>
                        <NavLink to='/signup'>
                           <Button bgColor='#0F2543' color='white' _hover={{ bg: '#375682' }} w='full' fontWeight='bold'>BELI SEKARANG</Button>
                        </NavLink>
                        <Spacer></Spacer>
                    </Stack>
                </Box>
            </Center>
        </HStack>
     );
}
 
export default Pricing;