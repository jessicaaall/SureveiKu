import { VStack, Spacer, Stack, Button,Flex} from "@chakra-ui/react";
import {Img, Text} from '@chakra-ui/react';
import {ArrowForwardIcon, ArrowLeftIcon} from '@chakra-ui/icons';

const sideBar = () => {
    return (
        <Flex
            pos="fixed"
            left="5"
            h="95vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 black"
            w="300px"
            flexDir="column"
            justifyContent="space-between"
            bgGradient="linear(to-b, #8FBFDB, #33426E)">
        
            <Stack alignItems='center' mt={4} spacing={4}>
                    <Img 
                    borderRadius='full'
                    objectFit='cover'
                    boxSize='7em'
                    src='/dashboard-pp.jpg'
                    alt='dashboard-pp'
                    boxShadow='0 4px 12px 0 black'/>
                    <Text color='white' fontSize='1.2em'>Sally Hermawan</Text>
                    <Spacer></Spacer>
                    <VStack align="baseline">
                        <Text color='white' fontSize='1em' >Gender: Female</Text>
                        <Text color='white' fontSize='1em' >Year of birth: 03/03/1999</Text>
                        <Text color='white' fontSize='1em' >Total points: 17.000</Text>
                    </VStack>
                    <Spacer></Spacer>
                    <VStack align='baseline'>
                        <Button color='white' variant='link' leftIcon={<ArrowForwardIcon/>}>Redeem Points</Button>
                        <Button color='white' variant='link' leftIcon={<ArrowForwardIcon/>}>Create Survey</Button>
                        <Button color='white' variant='link' leftIcon={<ArrowForwardIcon/>}>My Surveys</Button>
                        <Button color='white' variant='link' leftIcon={<ArrowForwardIcon/>}>Available Surveys</Button>
                        <Button color='white' variant='link' leftIcon={<ArrowForwardIcon/>}>Help</Button>
                        <Button color='white' variant='link' leftIcon={<ArrowForwardIcon/>}>Privacy Policy</Button>
                        <Button color='white' variant='link' leftIcon={<ArrowForwardIcon/>} >Terms of Service</Button>
                    </VStack>
                    <Spacer></Spacer>
                    <Button leftIcon={<ArrowLeftIcon/>}>Sign Out</Button>
            </Stack>
        </Flex>
    );
}
 
export default sideBar;