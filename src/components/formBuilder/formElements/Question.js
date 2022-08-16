import {
  IconButton,
  Flex,
  Spacer,
  Box,
  Text,
  VStack,
  Select,
  HStack,
  Input,
} from '@chakra-ui/react';
import { TriangleDownIcon, CloseIcon } from '@chakra-ui/icons';
import { AddIcon, PictIcon, VidIcon } from '../icons/Icons';
import ParagraphQuestion from './questions/ParagraphQuestion';
import { useState } from 'react';
import CheckboxQuestion from './questions/CheckboxQuestion';
import RadioQuestion from './questions/RadioQuestion';
import { useEffect } from 'react';

const Question = ({
  type,
  changeType,
  removeQuestion,
  addQuestion,
  isLast,
  onChangeQuestionText,
  onChangeQuestionChoices,
}) => {
  const [questionText, setQuestionText] = useState('');
  const [questionChoices, setQuestionChoices] = useState([
    'Pilihan 1',
    'Pilihan 2',
    'Pilihan 3',
  ]);

  const handleTypeChange = (e) => {
    if (e.target.value !== type) {
      changeType(e.target.value);
    }
  };

  useEffect(() => {
    onChangeQuestionText(questionText);
  }, [questionText]);

  useEffect(() => {
    onChangeQuestionChoices(questionChoices);
  }, [questionChoices]);

  return (
    <HStack alignItems='start' w='99%'>
      <Box w='98%' h='auto' bg='#122543' borderRadius='25px'>
        <Box>
          <Flex>
            <Text
              color='white'
              fontSize='20px'
              pl={4}
              pt={2}
              pb={2}
              fontFamily='Raleway'
            >
              Pertanyaan
            </Text>
            <Spacer />
            <Select
              icon={<TriangleDownIcon />}
              iconSize='m'
              bgColor='white'
              color='black'
              _hover={{ bg: '#375682', color: 'white' }}
              w='180px'
              h='30px'
              fontSize='14px'
              fontWeight={'semibold'}
              textAlign='center'
              borderRadius='30px'
              fontFamily='Raleway'
              pt={2}
              pb={2}
              mr={2}
              onChange={handleTypeChange}
              value={type}
            >
              <option style={{ color: 'black' }} value='paragraph'>
                Paragraph
              </option>
              <option style={{ color: 'black' }} value='checkbox'>
                Checkbox
              </option>
              <option style={{ color: 'black' }} value='radio'>
                Radio
              </option>
            </Select>
            <IconButton
              aria-label='Close'
              icon={<CloseIcon />}
              bgColor='#122543'
              color='white'
              _hover={{ bg: 'red' }}
              borderRadius='100'
              onClick={removeQuestion}
            />
          </Flex>
        </Box>
        <Box w='100%' h='auto' bg='white' borderRadius='25px' pb={2} pt={2}>
          {type === 'paragraph' ? (
            <ParagraphQuestion
              questionText={questionText}
              setQuestionText={setQuestionText}
            />
          ) : type === 'checkbox' ? (
            <CheckboxQuestion
              questionText={questionText}
              setQuestionText={setQuestionText}
              questionChoices={questionChoices}
              setQuestionChoices={setQuestionChoices}
            />
          ) : (
            <RadioQuestion
              questionText={questionText}
              setQuestionText={setQuestionText}
              questionChoices={questionChoices}
              setQuestionChoices={setQuestionChoices}
            />
          )}
        </Box>
      </Box>
      {isLast && (
        <VStack
          bg='#122543'
          w='auto'
          align={'center'}
          borderRadius='10px'
          padding={1.5}
        >
          <IconButton
            aria-label='Add'
            icon={<AddIcon />}
            color='#122543'
            bg='white'
            size='xs'
            isRound
            _hover={{ bg: '#122543', color: 'white' }}
            onClick={addQuestion}
          />
          <IconButton
            aria-label='Add'
            icon={<PictIcon />}
            color='#122543'
            bg='white'
            size='xs'
            isRound
            _hover={{ bg: '#122543', color: 'white' }}
          />
          <IconButton
            aria-label='Add'
            icon={<VidIcon />}
            color='#122543'
            bg='white'
            size='xs'
            isRound
            _hover={{ bg: '#122543', color: 'white' }}
          />
        </VStack>
      )}
    </HStack>
  );
};

export default Question;
