import {
  Radio,
  RadioGroup,
  Box,
  Button,
  Stack,
  Textarea,
  Flex,
  Input,
} from '@chakra-ui/react';

const RadioQuestion = ({
  setQuestionText,
  questionText,
  questionChoices,
  setQuestionChoices,
}) => {
  const handleChangeChoice = (value, idx) => {
    const newChoice = [...questionChoices];
    newChoice[idx] = value;
    setQuestionChoices(newChoice);
  };

  const addChoice = () => {
    const newChoice = [...questionChoices];
    newChoice.push('');
    setQuestionChoices(newChoice);
  };

  const removeChoice = (idx) => {
    const newChoice = [...questionChoices];
    newChoice.splice(idx, 1);
    setQuestionChoices(newChoice);
  };

  return (
    <Box pl='6' pt='3' pr='6'>
      <Box pb={3}>
        <Textarea
          color='black'
          fontSize='17px'
          pl={4}
          pr={4}
          fontFamily='Raleway'
          value={questionText}
          onChange={(e) => {
            setQuestionText(e.target.value);
          }}
          bg='none'
          border='none'
          _focus={{ boxShadow: 'none' }}
          placeholder='Masukkan pertanyaan anda di sini'
        />
        <RadioGroup colorScheme='facebook' direction={['column', 'row']}>
          <Stack fontFamily='Raleway' color='black'>
            {questionChoices.map((choice, idx) => (
              <Flex role='group'>
                <Radio borderColor={'#375682'} value='Pilihan 1'></Radio>
                <Input
                  color='black'
                  fontSize='17px'
                  pl={4}
                  pr={4}
                  fontFamily='Raleway'
                  value={choice}
                  onChange={(e) => {
                    handleChangeChoice(e.target.value, idx);
                  }}
                  bg='none'
                  border='none'
                  _focus={{ boxShadow: 'none' }}
                  checked={false}
                  placeholder='Masukkan pilihan disini'
                />
                <Button
                  visibility='hidden'
                  _groupHover={{ visibility: 'visible' }}
                  onClick={() => {
                    removeChoice(idx);
                  }}
                >
                  X
                </Button>
              </Flex>
            ))}
          </Stack>
        </RadioGroup>
      </Box>
      <Box marginBottom='1' pt={3}>
        <Button
          bgColor='#122543'
          color='white'
          _hover={{ bg: '#375682' }}
          w='160px'
          h='30px'
          fontSize='14px'
          borderRadius='30px'
          fontFamily='Raleway'
          onClick={addChoice}
        >
          Add New Option
        </Button>
      </Box>
    </Box>
  );
};

export default RadioQuestion;
