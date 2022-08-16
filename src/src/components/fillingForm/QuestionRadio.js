import QuestionTemplate from './QuestionTemplate';
import { useState } from 'react';
import { Box, Stack, Radio, RadioGroup } from '@chakra-ui/react';

export default function QuestionRadio({ question, choices }) {
  const [value, setValue] = useState('');

  return (
    <QuestionTemplate judulPertanyaan={question}>
      <Box bg='white' borderRadius='25px' p={2} w='100%'>
        <RadioGroup value={value} onChange={setValue}>
          <Stack mt={1} spacing={1} pl={4} pr={4} pb={1} color='black'>
            {choices.map((choice) => (
              <Radio bg='#385898' value={choice} colorScheme='facebook'>
                {choice}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      </Box>
    </QuestionTemplate>
  );
}
