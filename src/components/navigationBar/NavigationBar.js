import './NavigationBar.css';
import { Text, VStack, Flex, Spacer, Button, Stack, Link} from '@chakra-ui/react';
import { Box } from '@chakra-ui/layout'

const NavigationBar = () => {
    return (
        <div className="NavBar">
            <Box bg='whiteAlpha.300'>
                <VStack p={5} w='full'>
                    <Flex w="100%">
                        <Stack direction='row' spacing={10} align='center'>
                            <Text ml="8" fontSize="4xl" fontWeight="bold" bgGradient='linear(to-l, blue.900, orange.300)' href="#" bgClip='text'>SureveiKu</Text>
                            <Link href="#" color='white' fontSize='16pt'>Home</Link>
                            <Link href="#" color='white' fontSize='16pt'>Pricing</Link>
                            <Link href="#" color='white' fontSize='16pt'>Service</Link>
                            <Link href="#" color='white' fontSize='16pt'>Contact</Link>
                            <Link href="#" color='white' fontSize='16pt'>Feedback</Link>
                        </Stack>
                    <Spacer></Spacer>
                    <Stack direction='row' spacing={4} align='center'>
                        <Button colorScheme='orange' size='md'>Login</Button>
                        <Button colorScheme='orange' size='md'>Sign Up</Button>
                    </Stack>
                    </Flex>
                </VStack>
            </Box>
        </div>

    );
}
 

export default NavigationBar;