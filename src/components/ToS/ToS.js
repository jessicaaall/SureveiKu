import { HStack, Box, Text,Spacer, Button, VStack, Checkbox, Link } from "@chakra-ui/react";
import FormalHeading from '../FormalHeading'
import "@fontsource/nunito"

const ToS = () => {
    return (
        <VStack align='left' h='100%'>
            <FormalHeading title='Terms of Service'/>
            <Box w='100%' h='auto' bg='white' borderRadius={20} boxShadow='lg' overflowY='auto' css={{"&::-webkit-scrollbar": {width:"8px",},"&::-webkit-scrollbar-track": {background:'#D9D9D9', borderRadius:"50px",},"&::-webkit-scrollbar-thumb": {background:'#122543', borderRadius:"50px",},}}>
                <VStack alignItems='baseline' padding={10} borderRadius={20}  >
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
                </VStack>
                <Spacer></Spacer>
            </Box>
            <VStack alignItems='baseline' pt={5}>
                <HStack>
                    <Checkbox colorScheme='blue' color='white'>I agree to the <Link color='white' href='#'>terms of service</Link></Checkbox>
                </HStack>
                <Button color='white' bgColor='#EA8238' _hover={{ bg: '#d66a1e' }} w='180px' h='55px' fontSize='20px' letterSpacing={1} fontFamily='Nunito' borderRadius='27px' alignSelf='end'>
                    SUBMIT
                </Button>
            </VStack>
        </VStack>
     );
}
 
export default ToS;