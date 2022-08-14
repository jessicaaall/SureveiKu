import {
  Box,
  Text,
  Image,
  Spacer,
  Stack,
  SimpleGrid,
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
    <VStack align='center' h='100%'>
      <FormalHeading title='My Surveys' />
      <SimpleGrid
        columns={3}
        spacingX={20}
        spacingY='10'
        overflowY={'scroll'}
        w='auto'
        h='full'
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
        {surveys.map(({ title, description, requirements }) => (
          <Surveybox
            title={title}
            description={description}
            requirements={requirements}
          />
        ))}
        <Spacer />
      </SimpleGrid>
    </VStack>
  );
};

const Surveybox = ({ title, description, requirements }) => {
  return (
    <Box
      w='300px'
      h='700px'
      bg='white'
      boxShadow='0 4px 12px 0 black'
      borderRadius={20}
      padding={5}
    >
      <Stack w='100%' h='100%'>
        <Spacer></Spacer>
        <Box boxSize={'15em'} w='100%'>
          <Spacer></Spacer>
          <Image src='./AvailableSurveys.png' />
        </Box>
        <Box>
          <Text fontSize='1em' fontWeight='bold' color='black' align='left'>
            Judul
          </Text>
          <Text align='left'>{title}</Text>
        </Box>
        <Spacer></Spacer>
        <Box>
          <Text fontSize='1em' fontWeight='bold' color='black' align='left'>
            Deskripsi
          </Text>
          <Text align='left'>{description}</Text>
        </Box>
        <Spacer></Spacer>
        <Box>
          <Text fontSize='1em' fontWeight='bold' color='black' align='left'>
            Syarat Khusus
          </Text>
          <Flex paddingLeft='10px'>
            <UnorderedList>
              {requirements.map((req) => (
                <ListItem align='left'>{req}</ListItem>
              ))}
            </UnorderedList>
          </Flex>
        </Box>
        <Spacer></Spacer>
        <Spacer></Spacer>
        <Box align='center'>
          <Button
            bgColor='#EA8238'
            color='white'
            _hover={{ bg: '#d66a1e' }}
            w='80%'
            fontWeight='bold'
            borderRadius={20}
          >
            ANALYSYS
          </Button>
        </Box>
        <Box align='center'>
          <Button
            bgColor='#EA8238'
            color='white'
            _hover={{ bg: '#d66a1e' }}
            w='80%'
            fontWeight='bold'
            borderRadius={20}
          >
            EDIT SURVEY
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default MySurvey;
