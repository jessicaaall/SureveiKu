//Belom kelar. Gausah dicoba-coba dulu. Baru bgt dibuat//
import { Text, HStack, Image, VStack, Button } from '@chakra-ui/react';
const FrontPage = () => {
  return (
    <HStack
      w='full'
      h='full'
      alignItems='baseline'
      marginTop={'10%'}
      alignItems='center'
    >
      <VStack spacing={19} alignItems='baseline'>
        <VStack alignItems='baseline'>
          <VStack spacing={-8} alignItems='baseline'>
            <Text fontSize='4.5em' fontWeight='bold' color='white' textShadow='1px 1px black'>
              Daftarkan Surveimu
            </Text>
            <Text fontSize='4.5em' fontWeight='bold' color='white' textShadow='1px 1px black'>
              Dengan Mudah
            </Text>
            </VStack>
          <VStack alignItems='baseline'>
            <Text fontSize='xl' color={'white'} textShadow='1px 1px black'>
              Ingin surveimu diisi dengan responden yang berkualitas dan memenuhi
              target?
            </Text>
            <Text fontSize='xl' color={'white'} textShadow='1px 1px black'>
              Bergabunglah dengan SureveiKu sekarang juga.
            </Text>
          </VStack>
        </VStack>
        <Button bg='#49439B' color='white' fontWeight='bold' borderRadius={0} w='220px' h='40px' fontSize={18} _hover={{ bg: '#231E63' }}>DAFTAR SEKARANG</Button>
      </VStack>
      <Image src='./pie-chart.png' boxSize={500}/>
    </HStack>
  );
};

export default FrontPage;