import { Box, Text, Input, Textarea } from '@chakra-ui/react';

const SurveyOverview = ({
  surveyTitle,
  setSurveyTitle,
  surveyDesc,
  setSurveyDesc,
}) => {
  return (
    <Box w='97%' h='auto' bg='#122543' borderRadius='25px'>
      <Text color='white' fontSize='20px' pl={4} pt={2} pb={2}>
        Deskripsi Survei
      </Text>
      <Box w='100%' h='auto' bg='white' borderRadius='25px' pb={3}>
        <Input
          color='#122543'
          fontSize='40px'
          fontWeight='900'
          pl={4}
          pb={2}
          my={4}
          bg='none'
          border='none'
          fontFamily='Raleway'
          _focus={{ boxShadow: 'none' }}
          placeholder='Judul Survey'
          value={surveyTitle}
          onChange={(e) => {
            setSurveyTitle(e.target.value);
          }}
        />
        <Textarea
          color='black'
          fontSize='17px'
          pl={4}
          pr={4}
          fontFamily='Raleway'
          placeholder='Masukkan deskripsi survey Anda di sini'
          bg='none'
          border='none'
          _focus={{ boxShadow: 'none' }}
          value={surveyDesc}
          onChange={(e) => {
            setSurveyDesc(e.target.value);
          }}
        />
      </Box>
    </Box>
  );
};

export default SurveyOverview;
