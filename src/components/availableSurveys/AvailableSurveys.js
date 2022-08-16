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
  SimpleGrid,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import FormalHeading from '../FormalHeading';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { NavLink } from 'react-router-dom';

const AvailableSurveys = () => {
  const [surveys, setSurveys] = useState([]);

  const getSurveyData = async () => {
    const newSurveysData = [];

    const collectionSnapshot = await getDocs(
      collection(getFirestore(), 'Survey')
    );

    collectionSnapshot.forEach((doc) => {
      const data = doc.data();

      const survey = {
        title: data.judul,
        description: data.deskripsi,
        requirements: data.syarat,
        reedemable_points: data.redeemable_points,
        id: data.id,
      };

      newSurveysData.push(survey);
    });

    setSurveys(newSurveysData);
  };

  useEffect(() => {
    getSurveyData();
  }, []);

  return (
    <VStack align='center' h='100%'>
      <FormalHeading title='Available Surveys' />
      <SimpleGrid
        pt={4}
        pb={4}
        pr={2}
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
        {surveys.map(
          ({ title, description, requirements, reedemable_points, id }) => (
            <Surveybox
              title={title}
              description={description}
              requirements={requirements}
              reedemable_points={reedemable_points}
              id={id}
            />
          )
        )}
      </SimpleGrid>
    </VStack>
  );
};

const Surveybox = ({
  title,
  description,
  requirements,
  reedemable_points,
  id,
}) => {
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
          <Text align='left' color='black'>
            {title}
          </Text>
        </Box>
        <Spacer></Spacer>
        <Box>
          <Text fontSize='1em' fontWeight='bold' color='black' align='left'>
            Deskripsi
          </Text>
          <Text align='left' color='black'>
            {description}
          </Text>
        </Box>
        <Spacer></Spacer>
        <Box>
          <Text fontSize='1em' fontWeight='bold' color='black' align='left'>
            Syarat Khusus
          </Text>
          <Flex paddingLeft='10px'>
            <UnorderedList>
              {requirements.map((req) => (
                <ListItem align='left' color='black'>
                  {req}
                </ListItem>
              ))}
            </UnorderedList>
          </Flex>
        </Box>
        <Spacer></Spacer>
        <Text align='center' color='black'>
          Redeemable Points: {reedemable_points}
        </Text>
        <NavLink to={`/filling-form/${id}`}>
          <Box align='center'>
            <Button
              bgColor='#EA8238'
              color='white'
              _hover={{ bg: '#d66a1e' }}
              w='80%'
              fontWeight='bold'
              borderRadius={20}
            >
              PARTICIPATE
            </Button>
          </Box>
        </NavLink>
        <Spacer></Spacer>
      </Stack>
    </Box>
  );
};

export default AvailableSurveys;
