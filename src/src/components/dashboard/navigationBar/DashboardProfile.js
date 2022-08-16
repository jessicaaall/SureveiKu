import { Img, Text } from '@chakra-ui/react';
import { Flex, VStack } from '@chakra-ui/layout';
import ProfileSVG from '../../../assets/account.svg';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { getDoc, getFirestore, doc } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { NavLink } from 'react-router-dom';

const DashboardProfile = () => {
  const [fullname, setFullname] = useState('');
  const [ppSrc, setPpSrc] = useState(ProfileSVG);

  const getFullname = async (data) => {
    setFullname(data.name);
  };

  const getProfilePicture = async (data) => {
    const { id } = data;

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
  };

  useEffect(() => {
    onAuthStateChanged(getAuth(), async (user) => {
      const id = user.uid;
      const docSnap = await getDoc(doc(getFirestore(), 'Akun', id));
      const data = docSnap.data();

      getFullname(data);
      getProfilePicture(data);
    });
  }, []);

  return (
    <NavLink to='/profile'>
      <VStack>
        <Flex alignItems='center'>
          <Text fontSize='1em' mr={2}>
            {fullname}
          </Text>
          <Img
            borderRadius='full'
            objectFit='cover'
            boxSize='2.5em'
            src={ppSrc}
            alt='dashboard-pp'
          />
        </Flex>
      </VStack>
    </NavLink>
  );
};

export default DashboardProfile;
