import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBl5weM3GfV98m6PmdTqYgdfWNNmlxhz5g',
  authDomain: 'deito-8dd6e.firebaseapp.com',
  projectId: 'deito-8dd6e',
  storageBucket: 'deito-8dd6e.appspot.com',
  messagingSenderId: '972900851056',
  appId: '1:972900851056:web:c7345a4a91db262766c3b5',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
