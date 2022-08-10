import './NavigationBar.css';
import { VStack, Flex, Spacer, Button, Stack, Link} from '@chakra-ui/react';
import { Box } from '@chakra-ui/layout'
import Logo from '../../components/Logo';

const NavigationBar = () => {
    return (
        <div className="NavBar">
            <Box bg='whiteAlpha.300'>
                <VStack p={5} w='full'>
                    <Flex w="100%">
                        <Stack direction='row' spacing={10} align='center'>
                            <Logo/>
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