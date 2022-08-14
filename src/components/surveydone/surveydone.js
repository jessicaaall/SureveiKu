import { Button, Image, Link, Spacer, Text, VStack, HStack } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';

const SurveyDone = () => {
    return (
        <VStack p="5%" textAlign="center">
            <Text fontSize={60} fontWeight='bold' color='white' letterSpacing={2}>Thanks for filling out this form!</Text>
            <Text fontSize={30} color='white' letterSpacing={2}>
                Your contribution towards this survey means a lot for us and other people.
                If you have any problems about this survey feel free to contact the surveyor.</Text>
            <HStack spacing={2.5}>
                <VStack>
                    <Image src='./PhoneIcon.png' boxSize={6}></Image>
                </VStack>
                <VStack>
                    <NavLink to='/contact'>
                        <Link textDecoration="underline" color='white' fontSize={20}>Contact Surveyor</Link>
                    </NavLink>
                </VStack>
            </HStack>
            <Spacer p="7.5%"/>
            <Text fontSize={15} color='white' letterSpacing={3}>You earn 10 points!</Text>
            <NavLink to='/dashboard'>
                <Link>
                    <Button 
                        bg='darkorange' 
                        rounded="lg"
                        border="1px"
                        color='black'
                        fontWeight='bold'
                        w='220px'
                        h='40px'
                        fontSize={18} 
                        _hover={{ bg: '#231E63' }}>BACK TO DASHBOARD</Button>
                </Link>
            </NavLink>
        </VStack>
     );
}
 
export default SurveyDone;
