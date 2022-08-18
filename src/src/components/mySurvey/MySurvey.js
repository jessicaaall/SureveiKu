import {
  Box,
  Text,
  Image,
  Spacer,
  Stack,

  Button,
  VStack,
  Flex,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import FormalHeading from '../FormalHeading';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import CardWrapper from '../CardWrapper';

const MySurvey = () => {
  const [surveys, setSurveys] = useState([]);

  const getSurveyData = async () => {
    const newSurveysData = [];
    const uid = getAuth().currentUser.uid;

    const collectionSnapshot = await getDocs(
      collection(getFirestore(), 'Survey')
    );

    collectionSnapshot.forEach((doc) => {
      const data = doc.data();

      if (data.creatorId === uid) {
        const survey = {
          title: data.judul,
          description: data.deskripsi,
          requirements: data.syarat,
        };

        newSurveysData.push(survey);
      }
    });

    setSurveys(newSurveysData);
  };

  useEffect(() => {
    getSurveyData();
  }, []);

  return (
    <VStack h='100%'>
      <FormalHeading title='My Surveys' />
      <CardWrapper columns={3}>
      {surveys.map(({ title, description, requirements }) => (
          <Surveybox
            title={title}
            description={description}
            requirements={requirements}
          />
        ))}
      </CardWrapper>
    </VStack>
  );
};

const Surveybox = ({ title, description, requirements }) => {
  return (
    <Box
      w='300px'
      h='auto'
      bg='white'
      boxShadow='0 4px 12px 0 black'
      borderRadius={20}
      padding={5}
    >
      <Stack w='100%' h='100%' align='left'>
        <Box boxSize={'auto'} w='100%'>
          <Image src='./AvailableSurveys.png' />
        </Box>
        <Text fontSize='1em' fontWeight='bold' color='black'>
          Judul
        </Text>
        <Text align='left' style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>{title}</Text>
        <Spacer></Spacer>
        <Text fontSize='1em' fontWeight='bold' color='black'>
          Deskripsi
        </Text>
        <Text align='left' style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>{description}</Text>
        <Spacer></Spacer>
        <Text fontSize='1em' fontWeight='bold' color='black' align='left'>
          Syarat Khusus
        </Text>
        <Flex paddingLeft='10px'>
          <UnorderedList>
            {requirements.map((req) => (
              <ListItem align='left'>
                <Text style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>
                {req}</Text></ListItem>
            ))}
          </UnorderedList>
        </Flex>
        <Spacer/>
        <NavLink to='/analysis-page'>
          <Box align='center'>
            <Button
              bgColor='#EA8238'
              color='white'
              _hover={{ bg: '#d66a1e' }}
              w='80%'
              fontWeight='bold'
              borderRadius={20}
            >
              ANALYSIS
            </Button>
          </Box>
        </NavLink>
        <NavLink to='/responses-page'>
          <Box align='center'>
            <Button
              bgColor='#EA8238'
              color='white'
              _hover={{ bg: '#d66a1e' }}
              w='80%'
              fontWeight='bold'
              borderRadius={20}
            >
              RESPONSES
            </Button>
          </Box>
        </NavLink>
      </Stack>
    </Box>
  );
};

export default MySurvey;
