import { VStack, Spacer, Stack, Button, Flex, Link } from '@chakra-ui/react';
import { Img, Text } from '@chakra-ui/react';
import ProfileSVG from '../../../assets/account.svg';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getDoc, doc, getFirestore } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';
import { BsFillDoorOpenFill, BsCashCoin, BsClipboardPlus, BsClipboardData, BsClipboardCheck, BsQuestionCircle, BsFileText, BsJournalText,
  BsXCircle, BsShieldFillExclamation, BsCollection, BsPersonCircle } from "react-icons/bs";
import { useDisclosure } from '@chakra-ui/react';
import React from 'react';

const SideBarComp = (props) => {
  return(
    <NavLink to={props.linkTo}>
      <Link>
        <Button
          color='white'
          variant='link'
          leftIcon={props.icon}>
          <Text>{props.title}</Text>
        </Button>
      </Link>
    </NavLink>
  );
};

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

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

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
      <Stack alignItems='center' spacing={4} h='90vh' overflowY={'auto'} 
      css={{"&::-webkit-scrollbar": {width:"0"}}}>
        <Spacer></Spacer>
        <NavLink to='/profile'>
          <Img
            borderRadius='full'
            objectFit='cover'
            boxSize='7em'
            src={ppSrc}
            alt='dashboard-pp'
            boxShadow='0 4px 12px 0 black'
          />
        </NavLink>
        <Text color='white' fontSize='1.2em'>
          {fullname !== '' ? fullname : <span>&nbsp;&nbsp;</span>}
        </Text>
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
          <SideBarComp title='Dashboard' icon={<BsCollection/>} linkTo='/dashboard'/>
          <SideBarComp title='Profile' icon={<BsPersonCircle/>} linkTo='/profile'/>
          <SideBarComp title='Redeem Points' icon={<BsCashCoin/>} linkTo='/redeem-points'/>
          <SideBarComp title='Create Survey' icon={<BsClipboardPlus/>} linkTo='/create-survey'/>
          <SideBarComp title='My Surveys' icon={<BsClipboardData/>} linkTo='/my-surveys'/>
          <SideBarComp title='Available Surveys' icon={<BsClipboardCheck/>} linkTo='/available-surveys'/>
          <SideBarComp title='Help' icon={<BsQuestionCircle />} linkTo='/help'/>
          <SideBarComp title='Privacy Policy' icon={<BsFileText />} linkTo='/privacy-policy'/>
          <SideBarComp title='Terms of Service' icon={<BsJournalText />} linkTo='/tos'/>
        </VStack>
        <Spacer/>
        <Button onClick={onOpen} leftIcon={<BsFillDoorOpenFill />}>
          Sign Out
        </Button>
        <AlertDialog
          motionPreset='slideInBottom'
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isCentered
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Sign Out
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure you want to sign out?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button colorScheme='red' ref={cancelRef} onClick={onClose} leftIcon={<BsXCircle/>}>
                  Cancel
                </Button>
                <Button colorScheme='green' onClick={signOutAccount} ml={3} leftIcon={<BsShieldFillExclamation/>}>
                  Proceed
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
        <Spacer/>
      </Stack>
    </Flex>
  );
};

export default SideBar;
