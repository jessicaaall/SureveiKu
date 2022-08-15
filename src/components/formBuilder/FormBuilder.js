import {
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  IconButton,
  Flex,
  Spacer,
  Box,
  Text,
  VStack,
  UnorderedList,
  ListItem,
  Button,
  Stack,
  Select,
  HStack,
} from '@chakra-ui/react';
import { CloseIcon, TriangleDownIcon, createIcon } from '@chakra-ui/icons';
import { AddIcon, PictIcon, VidIcon } from './icons/Icons';
import FormalHeading from '../FormalHeading';
import '@fontsource/raleway';
import '@fontsource/krona-one';
import '@fontsource/nunito';
import SurveyOverview from './formElements/SurveyOverview';
import SurveyRequirements from './formElements/SurveyRequirements';
import ParagraphQuestion from './formElements/questions/ParagraphQuestion';
import Question from './formElements/Question';

const FormBuilder = () => {
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
          <Question type='paragraph' />
          <Question type='checkbox' />
          <Question type='radio' />

          <Box w='95.6%' h='auto' bg='#122543' borderRadius='25px'>
            <Text
              color='white'
              fontSize='20px'
              pl={4}
              pt={2}
              pb={2}
              fontFamily='Raleway'
            >
              Survei Points
            </Text>
            <Box w='100%' h='auto' bg='white' borderRadius='25px'>
              <Stack pt={2} pl={4} pb={3} spacing='0.5px'>
                <Text color='black' fontSize='20px' fontFamily='Raleway'>
                  Points per response : 10
                </Text>
                <Text color='black' fontSize='20px' fontFamily='Raleway'>
                  Target respondents : 100
                </Text>
                <Text color='black' fontSize='20px' fontFamily='Raleway'>
                  Creation fee : 1.500 points
                </Text>
                <Text color='#7298B9' fontSize='20px' fontFamily='Raleway'>
                  Points needed : 2.500
                </Text>
              </Stack>
            </Box>
          </Box>
        </VStack>
      </Box>
      <Box align='right' pt={4}>
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
      </Box>
    </VStack>
  );
};

export default FormBuilder;
