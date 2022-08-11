import { Img, Text } from '@chakra-ui/react';
import { Flex, VStack } from '@chakra-ui/layout';
import ProfileSVG from '../../../assets/account.svg';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { getDoc, getFirestore, doc } from 'firebase/firestore';

const DashboardProfile = () => {
  const [fullname, setFullname] = useState('');

  const getFullname = async (user) => {
    const id = user.uid;
    const docSnap = await getDoc(doc(getFirestore(), 'Akun', id));
    const data = docSnap.data();

    setFullname(data.name);
  };

  useEffect(() => {
    onAuthStateChanged(getAuth(), getFullname);
  }, []);

  return (
    <VStack>
      <Flex alignItems='center'>
        <Text fontSize='1em' mr={4}>
          {fullname}
        </Text>
        <img
          style={{ width: '3em', height: '3em' }}
          src={ProfileSVG}
          alt='dashboard-pp'
        />

        {/* <Img
          borderRadius='full'
          objectFit='cover'
          boxSize='3em'
          src='/dashboard-pp.jpg'
          alt='dashboard-pp'
        /> */}
      </Flex>
    </VStack>
  );
};

export default DashboardProfile;
