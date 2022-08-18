import {
  Box,
  Text,
  Image,
  Spacer,
  Button,
  VStack,
  Flex,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import FormalHeading from '../FormalHeading';
import CardWrapper from '../CardWrapper';
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
      <CardWrapper columns={3}>
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
      </CardWrapper>
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
      h='auto'
      bg='white'
      boxShadow='0 4px 12px 0 black'
      borderRadius={20}
      padding={5}
    >
      <VStack w='100%' h='100%' align='left'>
        <Box boxSize='auto' w='100%'>
          <Image src='./AvailableSurveys.png'/>
        </Box>
        <Text fontSize='1em' fontWeight='bold' color='black'>
            Judul
          </Text>
        <Text color='black' style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>
            {title}
        </Text>
        <Spacer/>
        <Text fontSize='1em' fontWeight='bold' color='black' align='left'>
          Deskripsi
        </Text>
        <Text align='left' color='black' style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>
          {description}
        </Text>
        <Spacer/>
        <Text fontSize='1em' fontWeight='bold' color='black' align='left'>
          Syarat Khusus
        </Text>
          <Flex paddingLeft='10px'>
            <UnorderedList>
              {requirements.map((req) => (
                <ListItem align='left' color='black'>
                  <Text style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>{req}</Text>
                </ListItem>
              ))}
            </UnorderedList>
          </Flex>
          <Spacer/>
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
      </VStack>
    </Box>
  );
};

export default AvailableSurveys;
