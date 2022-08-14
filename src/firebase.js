import { doc, setDoc, getFirestore, Timestamp } from 'firebase/firestore';
import { ref, getStorage, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD7M6DCxoStCLAvS_h90cYiP_lf0t-RZIM',
  authDomain: 'sureveiku.firebaseapp.com',
  projectId: 'sureveiku',
  storageBucket: 'sureveiku.appspot.com',
  messagingSenderId: '466573760758',
  appId: '1:466573760758:web:735c666e5fb51dae55f4d7',
};

const createNewUserData = async (id, fullname, email, points, accountType) => {
  const date = new Date();
  const ts = Timestamp.fromDate(date);

  await setDoc(doc(getFirestore(), 'Akun', id), {
    acceptTos: false,
    alamat: '',
    email: email,
    gender: '',
    hobi: '',
    id: id,
    name: fullname,
    pekerjaan: '',
    points: points,
    telephone: '',
    dob: ts,
    accountType: accountType,
  });
};

export { firebaseConfig, createNewUserData };
