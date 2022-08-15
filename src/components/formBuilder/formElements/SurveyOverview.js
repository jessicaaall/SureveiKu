import { Box, Text } from '@chakra-ui/react';

const SurveyOverview = () => {
  return (
    <Box w='95.6%' h='auto' bg='#122543' borderRadius='25px'>
      <Text
        color='white'
        fontSize='20px'
        pl={4}
        pt={2}
        pb={2}
        fontFamily='Raleway'
      >
        Deskripsi Survei
      </Text>
      <Box w='100%' h='auto' bg='white' borderRadius='25px' pb={3}>
        <Text
          color='#122543'
          fontSize='40px'
          fontWeight='900'
          pl={4}
          pb={2}
          fontFamily='Raleway'
        >
          Ceritanya Judul Survei
        </Text>
        <Text
          color='black'
          fontSize='20px'
          fontWeight='900'
          pl={4}
          fontFamily='Raleway'
        >
          Deskripsi
        </Text>
        <Text color='black' fontSize='17px' pl={4} pr={4} fontFamily='Raleway'>
          Survei ini dibuat untuk menganalisis kaitan antara penggunaan gawai
          terhadap waktu jam tidur. Hipotesis yang diajukan adalah penggunaan
          gawai yang berlebih sebelum tidur akan mengakibatkan waktu jam tidur
          yang berkurang dan kualitas tidur yang tidak baik.
        </Text>
      </Box>
    </Box>
  );
};

export default SurveyOverview;
