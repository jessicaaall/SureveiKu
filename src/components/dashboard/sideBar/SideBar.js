import { VStack, Spacer, Stack, Button, Flex } from '@chakra-ui/react';
import { Img, Text } from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowLeftIcon } from '@chakra-ui/icons';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { getDoc, doc, getFirestore } from 'firebase/firestore';

const SideBar = () => {
  const [fullname, setFullname] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [points, setPoints] = useState('');

  const signOutAccount = () => {
    signOut(getAuth());
  };

  const getProfileData = async (user) => {
    const id = user.uid;
    const docSnap = await getDoc(doc(getFirestore(), 'Akun', id));
    const data = docSnap.data();

    setFullname(data.name);

    const capitalize = (s) => (s && s[0].toUpperCase() + s.slice(1)) || '';
    setGender(capitalize(data.gender));

    const dobTimestamp = data.dob;
    const dobDate = dobTimestamp.toDate();
    setDob(dobDate.toLocaleDateString('en-GB'));

    const pointsSeparated = data.points
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    setPoints(pointsSeparated);
  };

  useEffect(() => {
    onAuthStateChanged(getAuth(), getProfileData);
  }, []);

  return (
    <Flex
      pos='fixed'
      left='0'
      h='95vh'
      // marginTop="2.5vh"
      boxShadow='0 4px 12px 0 black'
      w='300px'
      flexDir='column'
      justifyContent='space-between'
      bgGradient='linear(to-b, #8FBFDB, #33426E)'
    >
      <Stack alignItems='center' mt={4} spacing={4}>
        <Img
          borderRadius='full'
          objectFit='cover'
          boxSize='7em'
          src='/dashboard-pp.jpg'
          alt='dashboard-pp'
          boxShadow='0 4px 12px 0 black'
        />
        <Text color='white' fontSize='1.2em'>
          {fullname !== '' ? fullname : <span>&nbsp;&nbsp;</span>}
        </Text>
        <Spacer></Spacer>
        <VStack align='baseline'>
          <Text color='white' fontSize='1em'>
            Gender: {gender}
          </Text>
          <Text color='white' fontSize='1em'>
            Date of birth: {dob}
          </Text>
          <Text color='white' fontSize='1em'>
            Total points: {points}
          </Text>
        </VStack>
        <Spacer></Spacer>
        <VStack align='baseline'>
          <Button color='white' variant='link' leftIcon={<ArrowForwardIcon />}>
            Redeem Points
          </Button>
          <Button color='white' variant='link' leftIcon={<ArrowForwardIcon />}>
            Create Survey
          </Button>
          <Button color='white' variant='link' leftIcon={<ArrowForwardIcon />}>
            My Surveys
          </Button>
          <Button color='white' variant='link' leftIcon={<ArrowForwardIcon />}>
            Available Surveys
          </Button>
          <Button color='white' variant='link' leftIcon={<ArrowForwardIcon />}>
            Help
          </Button>
          <Button color='white' variant='link' leftIcon={<ArrowForwardIcon />}>
            Privacy Policy
          </Button>
          <Button color='white' variant='link' leftIcon={<ArrowForwardIcon />}>
            Terms of Service
          </Button>
        </VStack>
        <Spacer></Spacer>
        <Button onClick={signOutAccount} leftIcon={<ArrowLeftIcon />}>
          Sign Out
        </Button>
      </Stack>
    </Flex>
  );
};

export default SideBar;
