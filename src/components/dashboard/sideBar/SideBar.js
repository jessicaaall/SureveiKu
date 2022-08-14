import { VStack, Spacer, Stack, Button, Flex, Link } from '@chakra-ui/react';
import { Img, Text } from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowLeftIcon } from '@chakra-ui/icons';
import ProfileSVG from '../../../assets/account.svg';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getDoc, doc, getFirestore } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const SideBar = () => {
  const [fullname, setFullname] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [points, setPoints] = useState('');
  const [ppSrc, setPpSrc] = useState(ProfileSVG);

  const signOutAccount = () => {
    signOut(getAuth());
  };

  const getProfileData = async (user) => {
    const id = user.uid;
    const docSnap = await getDoc(doc(getFirestore(), 'Akun', id));
    const data = docSnap.data();

    if (data.accountType === 'google') {
      setPpSrc(getAuth().currentUser.photoURL);
      console.log(getAuth().currentUser.photoU);
    } else {
      try {
        const url = await getDownloadURL(
          ref(getStorage(), `users/${id}/pp.jpg`)
        );
        setPpSrc(url);
      } catch (error) {
        setPpSrc(ProfileSVG);
      }
    }

    setFullname(data.name);

    const capitalize = (s) => (s && s[0].toUpperCase() + s.slice(1)) || '';
    setGender(gender === '' ? '-' : capitalize(data.gender));

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
      h='full'
      boxShadow='0 4px 12px 0 black'
      w='250px'
      flexDir='column'
      justifyContent='space-between'
      bgGradient='linear(to-b, #8FBFDB, #33426E)'
    >
      <Stack alignItems='center' spacing={4}>
        <Spacer></Spacer>
        <Img
          borderRadius='full'
          objectFit='cover'
          boxSize='7em'
          src={ppSrc}
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
          <NavLink to='/redeempoints'>
            <Link>
              <Button
                color='white'
                variant='link'
                leftIcon={<ArrowForwardIcon />}
              >
                Redeem Points
              </Button>
            </Link>
          </NavLink>

          <NavLink to='/createsurvey'>
            <Link>
              <Button
                color='white'
                variant='link'
                leftIcon={<ArrowForwardIcon />}
              >
                Create Survey
              </Button>
            </Link>
          </NavLink>

          <NavLink to='/mysurveys'>
            <Link>
              <Button
                color='white'
                variant='link'
                leftIcon={<ArrowForwardIcon />}
              >
                My Surveys
              </Button>
            </Link>
          </NavLink>

          <NavLink to='/available-surveys'>
            <Link>
              <Button
                color='white'
                variant='link'
                leftIcon={<ArrowForwardIcon />}
              >
                Available Surveys
              </Button>
            </Link>
          </NavLink>

          <NavLink to='/help'>
            <Link>
              <Button
                color='white'
                variant='link'
                leftIcon={<ArrowForwardIcon />}
              >
                Help
              </Button>
            </Link>
          </NavLink>

          <NavLink to='/privacypolicy'>
            <Link>
              <Button
                color='white'
                variant='link'
                leftIcon={<ArrowForwardIcon />}
              >
                Privacy Policy
              </Button>
            </Link>
          </NavLink>
          <NavLink to='/tos'>
            <Link>
              <Button
                color='white'
                variant='link'
                leftIcon={<ArrowForwardIcon />}
              >
                Terms of Service
              </Button>
            </Link>
          </NavLink>
        </VStack>
        <Spacer></Spacer>
        <NavLink to='/signup'>
          <Button onClick={signOutAccount} leftIcon={<ArrowLeftIcon />}>
            Sign Out
          </Button>
        </NavLink>

        <Spacer></Spacer>
      </Stack>
    </Flex>
  );
};

export default SideBar;
