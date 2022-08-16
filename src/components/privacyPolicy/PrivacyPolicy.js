import { Box, Text, Spacer, VStack} from "@chakra-ui/react";
import FormalHeading from "../FormalHeading";

const PrivacyPolicy = () => {
    return (
        <VStack align='left' h='100%' >
            <FormalHeading title='Privacy Policy'/>
            <Spacer></Spacer>
            <Box w='100%' bg='white' borderRadius='6' boxShadow="lg" css={{"&::-webkit-scrollbar": {width:"8px",},"&::-webkit-scrollbar-track": {background:'#D9D9D9', borderRadius:"50px",},"&::-webkit-scrollbar-thumb": {background:'#122543', borderRadius:"50px",},}} overflowY="auto">
                <VStack alignItems='baseline' padding={10} borderRadius={20}>
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
            </Box>
        </VStack>
     );
}
 
export default PrivacyPolicy;
