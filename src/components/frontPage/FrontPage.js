//Belom kelar. Gausah dicoba-coba dulu. Baru bgt dibuat//
import {Box, Text, HStack, Image, VStack} from "@chakra-ui/react";
const FrontPage = () => {
    return ( 
        <HStack w='full' h='full' spacing={20} marginTop={'10%'} alignItems='flex-start'>
            <VStack alignItems='baseline'>
                <Text fontSize='5em' fontWeight='bold' color='white'>Daftarkan Surveimu dengan Mudah</Text>
                <Text fontSize='2em' color={'white'}>Ingin surveimu diisi dengan responden yang berkualitas dan memenuhi target? Bergabunglah dengan SureveiKu sekarang juga.</Text>
            </VStack>    
                <Image src='./pie-chart.png'/>
        </HStack>
     );
}
 
export default FrontPage;