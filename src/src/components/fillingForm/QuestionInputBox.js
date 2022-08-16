import { Box, Textarea, Image, Stack } from '@chakra-ui/react';
import QuestionTemplate from './QuestionTemplate';

export default function QuestionInputBox({
  children,
  question,
  inputPlaceholder,
}) {
  return (
    <QuestionTemplate judulPertanyaan={question}>
      <Stack pr={5} pl={5}>
        {children}
      </Stack>
      <Box borderRadius='25px' bg='white' w='100%' h='full'>
        <Textarea borderRadius='25px' placeholder={inputPlaceholder} />
      </Box>
    </QuestionTemplate>
  );
}
