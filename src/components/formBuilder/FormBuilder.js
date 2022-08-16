import {
  Box,
  VStack,
  Button
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import FormalHeading from '../FormalHeading';
import '@fontsource/nunito';
import SurveyOverview from './formElements/SurveyOverview';
import SurveyRequirements from './formElements/SurveyRequirements';
import ParagraphQuestion from './formElements/questions/ParagraphQuestion';
import Question from './formElements/Question';
import SurveyPoints from './formElements/SurveyPoints';
import { useState } from 'react';

const FormBuilder = () => {
  const [questionTypes, setQuestionTypes] = useState([
    'paragraph',
    'checkbox',
    'radio',
  ]);

  const createSurvey = async () => {};

  return (
    <VStack align='left' h='100%'>
      <Box pb={3}>
        <FormalHeading title='Create Survey' />
      </Box>
      <Box
        w='auto'
        h='full'
        overflowY={'scroll'}
        css={{
          '&::-webkit-scrollbar': { width: '8px' },
          '&::-webkit-scrollbar-track': {
            background: '#D9D9D9',
            borderRadius: '50px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#122543',
            borderRadius: '50px',
          },
        }}
      >
        <VStack align='left' pl={3} pt={3} spacing='30px'>
          <SurveyOverview />
          <SurveyRequirements />
          {questionTypes.map((qType, idx) => (
            <Question
              type={qType}
              changeType={(targetType) => {
                const newQuestionType = [...questionTypes];
                newQuestionType[idx] = targetType;
                setQuestionTypes(newQuestionType);
              }}
              removeQuestion={() => {
                const newQuestionType = [...questionTypes];
                newQuestionType.splice(idx, 1);
                setQuestionTypes(newQuestionType);
              }}
              addQuestion={() => {
                const newQuestionType = [...questionTypes];
                newQuestionType.push('paragraph');
                setQuestionTypes(newQuestionType);
              }}
              isLast={idx === questionTypes.length - 1}
            />
          ))}
          <SurveyPoints />
        </VStack>
      </Box>
      <Box align='right' pt={4}>
        <NavLink to='/my-surveys'>
          <Button
            color='white'
            bgColor='#EA8238'
            _hover={{ bg: '#d66a1e' }}
            w='180px'
            h='55px'
            fontSize='20px'
            letterSpacing={1}
            fontFamily='Nunito'
            borderRadius='27px'
          >
            SUBMIT
          </Button>
        </NavLink>
      </Box>
    </VStack>
  );
};

export default FormBuilder;
