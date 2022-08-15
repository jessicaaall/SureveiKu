import { Radio, RadioGroup, Box, Button, Stack } from '@chakra-ui/react';

const RadioQuestion = () => {
  return (
    <Box pl='6' pt='3' pr='6'>
      <Box pb={3}>
        <RadioGroup colorScheme='facebook' direction={['column', 'row']}>
          <Stack spacing={[1, 5]} fontFamily='Raleway' color='black'>
            <Radio borderColor={'#375682'} value='Pilihan 1'>
              Pilihan 1
            </Radio>
            <Radio borderColor={'#375682'} value='Pilihan 2'>
              Pilihan 2
            </Radio>
            <Radio borderColor={'#375682'} value='Pilihan 3'>
              Pilihan 3
            </Radio>
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
        >
          Add New Option
        </Button>
      </Box>
    </Box>
  );
};

export default RadioQuestion;
