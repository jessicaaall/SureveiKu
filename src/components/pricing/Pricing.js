import { HStack, Box, Text, Stack, Spacer, Button, Flex } from "@chakra-ui/react";

const Pricing = () => {
    return ( 
        <HStack mt='15vh' spacing={20}>
            <Box w='300px' h='500px' bg='white' boxShadow="0 4px 12px 0 black" borderRadius={20}>
                <Stack w='full' h='full' alignItems='center'>
                    <Spacer></Spacer>
                    <Text fontSize='2em' fontWeight='bold' color='black'>25.000pts</Text>
                    <Text>Lorem Ipsum </Text>
                    <Spacer></Spacer>
                    <Spacer></Spacer>
                    <Text fontSize='2em' fontWeight='bold'>Rp30.000,-</Text>
                    <Text>Dapatkan hingga puluhan survey!</Text>    
                    <Spacer></Spacer>
                    <Button bgColor='#0F2543' color='white' _hover={{ bg: '#375682' }} w='80%' fontWeight='bold'>BELI SEKARANG</Button>
                    <Spacer></Spacer>
                </Stack>
            </Box>
            <Box w='300px' h='500px' bg='#0F2543' boxShadow="0 4px 12px 0 black" borderRadius={20}>
                <Stack w='full' h='full' alignItems='center'>
                    <Spacer></Spacer>
                    <Text fontSize='2em' fontWeight='bold' color='white'>50.000pts</Text>
                    <Text color='white'>Lorem Ipsum </Text>
                    <Spacer></Spacer>
                    <Spacer></Spacer>
                    <Text fontSize='2em' fontWeight='bold' color='white'>Rp52.500,-</Text>
                    <Text color='white'>Dapatkan hingga puluhan survey!</Text>    
                    <Spacer></Spacer>
                    <Button bgColor='white' color='#0F2543' _hover={{ bg: '#D0CDCD' }} w='80%' fontWeight='bold'>BELI SEKARANG</Button>
                    <Spacer></Spacer>
                </Stack>
            </Box>
            <Box w='300px' h='500px' bg='white' boxShadow="0 4px 12px 0 black" borderRadius={20}>
                <Stack w='full' h='full' alignItems='center'>
                    <Spacer></Spacer>
                    <Text fontSize='2em' fontWeight='bold' color='black'>10.000pts</Text>
                    <Text>Lorem Ipsum </Text>
                    <Spacer></Spacer>
                    <Spacer></Spacer>
                    <Text fontSize='2em' fontWeight='bold'>Rp17.000,-</Text>
                    <Text>Dapatkan hingga puluhan survey!</Text>    
                    <Spacer></Spacer>
                    <Button bgColor='#0F2543' color='white' _hover={{ bg: '#375682' }} w='80%' fontWeight='bold'>BELI SEKARANG</Button>
                    <Spacer></Spacer>
                </Stack>
            </Box>
        </HStack>
     );
}
 
export default Pricing;