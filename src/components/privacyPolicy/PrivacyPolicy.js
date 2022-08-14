import { HStack, Box, Text, Stack, Spacer, Button, Image, Center, Flex, VStack, Checkbox, Link } from "@chakra-ui/react";
import FormalHeading from "../FormalHeading";

const PrivacyPolicy = () => {
    return (
        <VStack>
            <FormalHeading title='Privacy Policy'/>
            <Box w='60%' h='730px' bg='white' padding='1.7%' borderRadius={30} boxShadow="4px 5px 2px 2px black">
                <VStack alignItems='baseline'>
                    <Text fontSize={20} fontWeight='bold'>Privacy Policy of SureveiKu</Text>
                    <Spacer></Spacer>
                    <Text>Etiam ac consectetur felis, pretium vehicula urna. Sed mollis congue quam sit amet porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in egestas purus. </Text>
                    <Spacer></Spacer>
                    <Text fontSize={20} fontWeight='bold'>Information Collection and Use</Text>
                    <Spacer></Spacer>
                    <Text>Etiam ac consectetur felis, pretium vehicula urna. Sed mollis congue quam sit amet porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in egestas purus. </Text>
                    <Spacer></Spacer>
                    <Text fontSize={20} fontWeight='bold'>Log Data</Text>
                    <Spacer></Spacer>
                    <Text>Etiam ac consectetur felis, pretium vehicula urna. Sed mollis congue quam sit amet porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in egestas purus. </Text>
                    <Text fontSize={20} fontWeight='bold'>Cookies</Text>
                    <Text>Etiam ac consectetur felis, pretium vehicula urna. Sed mollis congue quam sit amet porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in egestas purus. </Text>
                </VStack>
            </Box>
        </VStack>
     );
}
 
export default PrivacyPolicy;
