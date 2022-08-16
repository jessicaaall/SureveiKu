import { doc, setDoc, getFirestore, Timestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { v4 as uuid } from 'uuid';
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

const createNewSurvey = async (
  title,
  desc,
  reqs,
  questions,
  finishUploadCB
) => {
  const id = uuid();

  await setDoc(doc(getFirestore(), 'Survey', id), {
    creatorId: getAuth().currentUser.uid,
    deskripsi: desc,
    id: id,
    judul: title,
    redeemable_points: 10,
    syarat: reqs,
  });

  await Promise.all(
    questions.map(async ({ question, qType, choices }, idx) => {
      await setDoc(
        doc(getFirestore(), 'Survey', id, 'questions', `question${idx + 1}`),
        {
          question: question,
          qType: qType,
          choices: choices,
        }
      );
    })
  );

  finishUploadCB();
};

export { firebaseConfig, createNewUserData, createNewSurvey };
