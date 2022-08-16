import { Textarea } from '@chakra-ui/react';
import { useState } from 'react';

const ParagraphQuestion = ({ setQuestionText, questionText }) => {
  const handleChange = (e) => {
    setQuestionText(e.target.value);
  };

  return (
    <Textarea
      color='black'
      fontSize='17px'
      pl={4}
      pr={4}
      value={questionText}
      onChange={handleChange}
      bg='none'
      border='none'
      _focus={{ boxShadow: 'none' }}
      placeholder='Masukkan pertanyaan anda kesini'
    />
  );
};

export default ParagraphQuestion;
