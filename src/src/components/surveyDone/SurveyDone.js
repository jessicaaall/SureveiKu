import { Button, Image, Link, Spacer, Text, VStack, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import FormalHeading from "../FormalHeading";

const SurveyDone = () => {
    return (
        <VStack h='full' w='full' display="flex" textAlign="center" alignContent={'center'} alignItems={'center'} align={'center'}>
            <Spacer/>
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
            <Spacer/>
            <Text fontSize={15} color='white' letterSpacing={3}>You earned 10 points!</Text>
            <NavLink to='/dashboard'>
                <Button 
                    bg="#EA8238"
                    borderRadius={20}
                    color="white"
                    fontWeight="bold"
                    fontSize={18}
                    _hover={{ bg:"#d66a1e"}}
                    w='220px'
                    h='40px'>BACK TO DASHBOARD</Button>
            </NavLink>
        </VStack>
     );
}
 
export default SurveyDone;
