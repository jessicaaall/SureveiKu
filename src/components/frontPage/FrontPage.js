//Belom kelar. Gausah dicoba-coba dulu. Baru bgt dibuat//
import {Box, Text, HStack, Image} from "@chakra-ui/react";
const FrontPage = () => {
    return ( 
        <HStack spacing={20} marginTop={'10%'}>
            <Box boxSize={'70%'}>
                <Text fontSize='5em' fontWeight='bold' color='white'>Daftarkan Surveimu dengan Mudah</Text>
                <Text color={'white'}>Ingin surveimu diisi dengan responden yang berkualitas dan memenuhi target? Bergabunglah dengan SureveiKu sekarang juga.</Text>
            </Box>
            <Box boxSize={'30%'} marginRight='10%'>
                <Image src='./pie-chart.png'/>
            </Box>
        </HStack>
     );
}
 
export default FrontPage;