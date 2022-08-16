import {
  Box,
  Text,
  Stack,
  Button,
  Image,
  Checkbox,
  Link,
  HStack,
  VStack,
  Radio,
  RadioGroup,
  Spacer,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import FormalHeading from '../FormalHeading';
import { NavLink, useParams } from 'react-router-dom';
import { BsTelephone } from 'react-icons/bs';

import QuestionInputBox from '../fillingForm/QuestionInputBox';
import QuestionCheckbox from '../fillingForm/QuestionCheckbox';
import QuestionRadio from '../fillingForm/QuestionRadio';

import './garis.css';
import { useEffect, useState } from 'react';
import {
  getFirestore,
  getDoc,
  getDocs,
  doc,
  collection,
  setDoc,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const FillingForm = () => {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);

  const getQuestionData = async () => {
    const docSnap = await getDocs(
      collection(getFirestore(), 'Survey', id, 'questions')
    );

    const newQuestions = [...questions];

    docSnap.forEach((doc) => {
      newQuestions.push(doc.data());
    });

    setQuestions(newQuestions);
  };

  const addPoints = async () => {
    const id = getAuth().currentUser.uid;
    const docSnap = await getDoc(doc(getFirestore(), 'Akun', id));
    const data = docSnap.data();
    data.points = data.points + 10;

    await setDoc(doc(getFirestore(), 'Akun', id), data);
  };

  useEffect(() => {
    getQuestionData();
  }, []);

  return (
    <VStack align='left' h='100%'>
      <FormalHeading title='Judul Survei' />
      <HStack alignSelf={'end'} pb={2}>
        <NavLink to='/dashboard'>
          <Link>
            <Button
              color='white'
              variant='link'
              fontSize='2em'
              leftIcon={<BsTelephone />}
            >
              <Text>Contact Surveyor</Text>
            </Button>
          </Link>
        </NavLink>
      </HStack>

      <Box
        borderRadius='20px'
        p={6}
        w='auto'
        pr={4}
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
        <VStack align='left' spacing='25px'>
          {questions.map(({ qType, question, choices }) => {
            if (qType === 'paragraph') {
              return (
                <QuestionInputBox
                  question={question}
                  inputPlaceholder='Masukkan contoh jawaban'
                />
              );
            } else if (qType === 'checkbox') {
              return <QuestionCheckbox question={question} choices={choices} />;
            } else {
              return (
                <QuestionRadio
                  question='yes'
                  choices={['Pilihan 1', 'Pilihan 2', 'Pilihan 3']}
                />
              );
            }
          })}
        </VStack>
      </Box>

      <Box align='right' pt={4}>
        <NavLink to='/survey-done'>
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
            onClick={addPoints}
          >
            SUBMIT
          </Button>
        </NavLink>
      </Box>
    </VStack>
  );
};

export default FillingForm;
