import {
  Box,
  Text,
  UnorderedList,
  ListItem,
  Button,
  Input,
  Flex,
} from '@chakra-ui/react';

const SurveyRequirements = ({ surveyReqs, setSurveyReqs }) => {
  const handleChange = (value, idx) => {
    const newSurveyReqs = [...surveyReqs];
    newSurveyReqs[idx] = value;
    setSurveyReqs(newSurveyReqs);
  };

  const addReq = () => {
    const newSurveyReqs = [...surveyReqs];
    newSurveyReqs.push('');
    setSurveyReqs(newSurveyReqs);
  };

  const removeReq = (idx) => {
    const newSurveyReqs = [...surveyReqs];
    newSurveyReqs.splice(idx, 1);
    setSurveyReqs(newSurveyReqs);
  };

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
          {surveyReqs.map((req, idx) => (
            <ListItem pr={5}>
              <Flex role='group'>
                <Input
                  value={req}
                  onChange={(e) => {
                    handleChange(e.target.value, idx);
                  }}
                  p={0}
                  bg='none'
                  border='none'
                  _focus={{ boxShadow: 'none' }}
                  spellCheck={false}
                  placeholder='Masukkan syarat disini'
                />
                <Button
                  visibility='hidden'
                  _groupHover={{ visibility: 'visible' }}
                  onClick={() => {
                    removeReq(idx);
                  }}
                >
                  X
                </Button>
              </Flex>
            </ListItem>
          ))}
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
            onClick={addReq}
          >
            Tambah syarat baru
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SurveyRequirements;
