import { Button, Image, Link, Spacer, Text, VStack, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import FormalHeading from "../FormalHeading";

const SurveyDone = () => {
    return (
        <VStack p="5%" textAlign="center">
            <FormalHeading fontSize={60} fontWeight='bold' color='white' letterSpacing={2} title='Thanks for filling out this form!'/>
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
            <Spacer p="5%"/>
            <Text fontSize={15} color='white' letterSpacing={3}>You earn 10 points!</Text>
            <NavLink to='/dashboard'>
                <Link>
                    <Button 
                        bg="#EA8238"
                        borderRadius={20}
                        color="white"
                        fontWeight="bold"
                        fontSize={18}
                        _hover={{ bg:"#d66a1e"}}
                        w='220px'
                        h='40px'>BACK TO DASHBOARD</Button>
                </Link>
            </NavLink>
        </VStack>
     );
}
 
export default SurveyDone;
