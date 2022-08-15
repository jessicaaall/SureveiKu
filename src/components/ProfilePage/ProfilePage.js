import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import FormalHeading from '../FormalHeading';
import '@fontsource/krona-one';

const ProfilPage = () => {
  return (
    <VStack align='left' w='full' h='full'>
      <FormalHeading title='PROFILE' />
      <VStack
        align='left'
        w='full'
        h='full'
        css={{
          '&::-webkit-scrollbar': { width: '8px' },
          '&::-webkit-scrollbar-track': {
            background: '#D9D9D9',
            borderRadius: '50px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#122543',
            borderRadius: '50px',
          },
        }}
        overflowX='auto'
        height='full'
      >
        <SimpleGrid
          rows={8}
          spacingY={5}
          mt='0.5%'
          mr='1.25%'
          w='auto'
          h='full'
        >
          <Box w='100%' bg='#0F2543' boxShadow='lg' borderRadius={20}>
            <HStack h='full'>
              <Text
                pl='1.5%'
                w='150px'
                color='white'
                fontFamily='raleway'
                fontSize='lg'
                align='left'
              >
                Nama
              </Text>
              <Box w='full' h='full' bg='white' borderRadius={20}>
                <Input
                  size='lg'
                  fontFamily='raleway'
                  fontSize='lg'
                  fontWeight='bold'
                  color='black'
                  placeholder='Sally Hermawan'
                  textAlign='right'
                  borderRadius={20}
                ></Input>
              </Box>
            </HStack>
          </Box>
          <Box w='100%' bg='#0F2543' boxShadow='lg' borderRadius={20}>
            <HStack>
              <Text
                pl='1.5%'
                w='150px'
                color='white'
                fontFamily='raleway'
                fontSize='lg'
                align='left'
              >
                No. Telp
              </Text>
              <Box w='full' h='full' bg='white' borderRadius={20}>
                <Input
                  size='lg'
                  fontFamily='raleway'
                  fontSize='lg'
                  fontWeight='bold'
                  color='black'
                  placeholder='08123456789'
                  textAlign='right'
                  borderRadius={20}
                ></Input>
              </Box>
            </HStack>
          </Box>
          <Box w='100%' bg='#0F2543' boxShadow='lg' borderRadius={20}>
            <HStack>
              <Text
                pl='1.5%'
                w='150px'
                color='white'
                fontFamily='raleway'
                fontSize='lg'
                align='left'
              >
                Email
              </Text>
              <Box w='full' h='full' bg='white' borderRadius={20}>
                <Input
                  size='lg'
                  fontFamily='raleway'
                  fontSize='lg'
                  fontWeight='bold'
                  color='black'
                  placeholder='akuganteng@sally.com'
                  textAlign='right'
                  borderRadius={20}
                ></Input>
              </Box>
            </HStack>
          </Box>
          <Box w='100%' bg='#0F2543' boxShadow='lg' borderRadius={20}>
            <HStack>
              <Text
                pl='1.5%'
                w='150px'
                color='white'
                fontFamily='raleway'
                fontSize='lg'
                align='left'
              >
                Alamat
              </Text>
              <Box w='full' h='full' bg='white' borderRadius={20}>
                <Input
                  size='lg'
                  fontFamily='raleway'
                  fontSize='lg'
                  fontWeight='bold'
                  color='black'
                  placeholder='JL. Tubagus Upin IX No. 23, Sekrelawak, Bondang, Jawa Atas 14335'
                  textAlign='right'
                  borderRadius={20}
                ></Input>
              </Box>
            </HStack>
          </Box>
          <Box w='100%' bg='#0F2543' boxShadow='lg' borderRadius={20}>
            <HStack>
              <Text
                pl='1.5%'
                w='150px'
                color='white'
                fontFamily='raleway'
                fontSize='lg'
                align='left'
              >
                Tanggal Lahir
              </Text>
              <Box w='full' h='full' bg='white' borderRadius={20}>
                <Input
                  size='lg'
                  fontFamily='raleway'
                  fontSize='lg'
                  fontWeight='bold'
                  color='black'
                  type='date-local'
                  placeholder='7/03/1970'
                  textAlign='right'
                  borderRadius={20}
                ></Input>
              </Box>
            </HStack>
          </Box>
          <Box w='100%' bg='#0F2543' boxShadow='lg' borderRadius={20}>
            <HStack>
              <Text
                pl='1.5%'
                w='150px'
                color='white'
                fontFamily='raleway'
                fontSize='lg'
                align='left'
              >
                Pekerjaan
              </Text>
              <Box w='full' h='full' bg='white' borderRadius={20}>
                <Input
                  size='lg'
                  fontFamily='raleway'
                  fontSize='lg'
                  fontWeight='bold'
                  color='black'
                  placeholder='Psikolog'
                  textAlign='right'
                  borderRadius={20}
                ></Input>
              </Box>
            </HStack>
          </Box>
          <Box w='100%' bg='#0F2543' boxShadow='lg' borderRadius={20}>
            <HStack>
              <Text
                pl='1.5%'
                w='150px'
                color='white'
                fontFamily='raleway'
                fontSize='lg'
                align='left'
              >
                Gender
              </Text>
              <Box w='full' h='full' bg='white' borderRadius={20}>
                <Input
                  size='lg'
                  fontFamily='raleway'
                  fontSize='lg'
                  fontWeight='bold'
                  color='black'
                  placeholder='Perempuan'
                  textAlign='right'
                  borderRadius={20}
                ></Input>
              </Box>
            </HStack>
          </Box>
          <Box w='100%' bg='#0F2543' boxShadow='lg' borderRadius={20}>
            <HStack>
              <Text
                pl='1.5%'
                w='150px'
                color='white'
                fontFamily='raleway'
                fontSize='lg'
                align='left'
              >
                Hobi
              </Text>
              <Box w='full' h='full' bg='white' borderRadius={20}>
                <Input
                  size='lg'
                  fontFamily='raleway'
                  fontSize='lg'
                  fontWeight='bold'
                  color='black'
                  placeholder='Minum Kopi'
                  textAlign='right'
                  borderRadius={20}
                ></Input>
              </Box>
            </HStack>
          </Box>
        </SimpleGrid>
        <Flex pl='85%' pr='1.25%' pt='1.75%' pb='0.5%'>
          <Button
            bg='#EA8238'
            borderRadius={20}
            color='white'
            fontWeight='bold'
            w='100%'
            fontSize={18}
            _hover={{ bg: '#d66a1e' }}
          >
            EDIT PROFILE
          </Button>
        </Flex>
      </VStack>
    </VStack>
  );
};

export default ProfilPage;
