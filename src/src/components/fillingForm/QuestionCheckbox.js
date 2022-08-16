import QuestionTemplate from './QuestionTemplate';
import { Box, Stack, Checkbox } from '@chakra-ui/react';

export default function QuestionCheckbox({ question, choices }) {
  return (
    <QuestionTemplate judulPertanyaan={question}>
      <Box bg='white' borderRadius='25px' p={2} w='100%'>
        <Stack mt={1} spacing={1} pl={4} pr={4} pb={1} color='black'>
          {choices.map((choice) => (
            <Checkbox colorScheme='facebook' defaultValue={false}>
              {choice}
            </Checkbox>
          ))}
        </Stack>
      </Box>
    </QuestionTemplate>
  );
}
