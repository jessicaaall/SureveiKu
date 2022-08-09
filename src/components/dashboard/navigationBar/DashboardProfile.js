import {Img, Text} from '@chakra-ui/react';
import {Flex, VStack} from '@chakra-ui/layout';


const DashboardProfile = () => {
    return (
        <VStack>
            <Flex alignItems='center'>
                <Text fontSize='1em' mr={4}>Sally Hermawan</Text>
                <Img 
                borderRadius='full'
                objectFit='cover'
                boxSize='3em'
                src='/dashboard-pp.jpg'
                alt='dashboard-pp'/>
            </Flex>
        </VStack>
    );
}
 
export default DashboardProfile;