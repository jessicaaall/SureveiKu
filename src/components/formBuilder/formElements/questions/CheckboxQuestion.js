import { Checkbox, CheckboxGroup, Box, Button, Stack } from '@chakra-ui/react';

const CheckboxQuestion = () => {
  return (
    <Box pl='6' pt='3' pr='6'>
      <Box pb={3}>
        <CheckboxGroup colorScheme='facebook' direction={['column', 'row']}>
          <Stack spacing={[1, 5]} color='black'>
            <Checkbox
              borderColor={'#375682'}
              fontFamily='Raleway'
              value='Pilihan 1'
            >
              Pilihan 1
            </Checkbox>
            <Checkbox
              borderColor={'#375682'}
              fontFamily='Raleway'
              value='Pilihan 2'
            >
              Pilihan 2
            </Checkbox>
            <Checkbox
              borderColor={'#375682'}
              fontFamily='Raleway'
              value='Pilihan 3'
            >
              Pilihan 3
            </Checkbox>
          </Stack>
        </CheckboxGroup>
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

export default CheckboxQuestion;
