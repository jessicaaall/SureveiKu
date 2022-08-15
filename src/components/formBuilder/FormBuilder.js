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
import FormalHeading from '../FormalHeading';
import '@fontsource/raleway';
import '@fontsource/krona-one';
import '@fontsource/nunito';
import SurveyOverview from './formElements/SurveyOverview';
import SurveyRequirements from './formElements/SurveyRequirements';
import ParagraphQuestion from './formElements/questions/ParagraphQuestion';
import Question from './formElements/Question';

export const AddIcon = createIcon({
  displayName: 'AddIcon',
  viewBox: '3.9 4 8 8',
  path: (
    <path
      fill='currentColor'
      d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z'
    />
  ),
});
export const PictIcon = createIcon({
  displayName: 'PictIcon',
  viewBox: '0 1 16 15',
  path: (
    <path
      fill='currentColor'
      d='M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z'
    />
  ),
});
export const VidIcon = createIcon({
  displayName: 'VidIcon',
  viewBox: '0 1 16 15',
  path: (
    <path
      fill='currentColor'
      d='M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z'
    />
  ),
});

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
