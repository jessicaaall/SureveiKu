import { Box, Text, UnorderedList, ListItem, Button } from '@chakra-ui/react';

const SurveyRequirements = () => {
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
        Syarat Survei
      </Text>
      <Box w='100%' h='auto' bg='white' borderRadius='25px' pb={3}>
        <UnorderedList
          color='black'
          fontSize='20px'
          pl={4}
          pt={2}
          pb={4}
          fontFamily='Raleway'
        >
          <ListItem>Merupakan mahasiswa</ListItem>
          <ListItem>Berumur di bawah 25 tahun</ListItem>
        </UnorderedList>
        <Box pl={4} pb={2}>
          <Button
            bgColor='#122543'
            color='white'
            _hover={{ bg: '#375682' }}
            w='160px'
            h='30px'
            fontSize='14px'
            borderRadius='30px'
            fontFamily='Raleway'
          >
            Tambah syarat baru
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SurveyRequirements;
