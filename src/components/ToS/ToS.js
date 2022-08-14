import { HStack, Box, Text,Spacer, Button, VStack, Checkbox, Link } from "@chakra-ui/react";

const ToS = () => {
    return (
        <VStack>
            <Text fontSize={70} color='white' fontWeight='bold'>TERMS OF SERVICE</Text>
            <Box w='60%' h='full' bg='white' padding={10} borderRadius={20} boxShadow="lg">
                <VStack alignItems='baseline'>
                    <Text fontSize={20} fontWeight='bold'>XXXXXX</Text>
                    <Spacer></Spacer>
                    <Text>Etiam ac consectetur felis, pretium vehicula urna. Sed mollis congue quam sit amet porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in egestas purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ultrices viverra leo eget pulvinar. Fusce malesuada scelerisque nisl, ut viverra mi convallis vitae. Vivamus nec quam sed mi sollicitudin faucibus quis sed arcu. Aliquam in bibendum massa, quis rutrum diam. Duis et rhoncus mi, id viverra mauris. Nunc gravida malesuada odio, non fermentum massa porta eget. Donec lorem lectus, maximus at sollicitudin at, suscipit dictum quam. Donec porttitor nisl libero, cursus volutpat purus consequat eu. Nullam sed iaculis ante. Pellentesque urna sapien, vehicula non elit quis, accumsan fringilla metus. Phasellus odio ipsum, tincidunt id fringilla sed, condimentum vel magna.</Text>
                    <Spacer></Spacer>
                    <Text fontSize={20} fontWeight='bold'>XXXXXX</Text>
                    <Spacer></Spacer>
                    <Text>Etiam ac consectetur felis, pretium vehicula urna. Sed mollis congue quam sit amet porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in egestas purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ultrices viverra leo eget pulvinar. Fusce malesuada scelerisque nisl, ut viverra mi convallis vitae. Vivamus nec quam sed mi sollicitudin faucibus quis sed arcu. Aliquam in bibendum massa, quis rutrum diam. Duis et rhoncus mi, id viverra mauris. Nunc gravida malesuada odio, non fermentum massa porta eget. Donec lorem lectus, maximus at sollicitudin at, suscipit dictum quam. Donec porttitor nisl libero, cursus volutpat purus consequat eu. Nullam sed iaculis ante. Pellentesque urna sapien, vehicula non elit quis, accumsan fringilla metus. Phasellus odio ipsum, tincidunt id fringilla sed, condimentum vel magna.</Text>
                    <Spacer></Spacer>
                    <Text fontSize={20} fontWeight='bold'>XXXXXX</Text>
                    <Spacer></Spacer>
                    <Text>Etiam ac consectetur felis, pretium vehicula urna. Sed mollis congue quam sit amet porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in egestas purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ultrices viverra leo eget pulvinar. Fusce malesuada scelerisque nisl, ut viverra mi convallis vitae. Vivamus nec quam sed mi sollicitudin faucibus quis sed arcu. Aliquam in bibendum massa, quis rutrum diam. Duis et rhoncus mi, id viverra mauris. Nunc gravida malesuada odio, non fermentum massa porta eget. Donec lorem lectus, maximus at sollicitudin at, suscipit dictum quam. Donec porttitor nisl libero, cursus volutpat purus consequat eu. Nullam sed iaculis ante. Pellentesque urna sapien, vehicula non elit quis, accumsan fringilla metus. Phasellus odio ipsum, tincidunt id fringilla sed, condimentum vel magna.</Text>
                    <HStack>
                        <Checkbox colorScheme='blue'>I agree to the</Checkbox>
                        <Link color='blue' href='#'>terms of service</Link> 
                        {/* tinggal hrefnya diganti */}
                    </HStack>
                    <Button bg='#EA8238' borderRadius={20} w='150px' border='1px' fontWeight='bold' _hover={{ bg: '#F19552' }} alignSelf='end'>SUBMIT</Button>
                </VStack>
            </Box>
        </VStack>
     );
}
 
export default ToS;