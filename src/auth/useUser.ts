import firebase from 'firebase/compat/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { getUserFromCookie } from './userCookie';
import { initFirebase } from '../lib/firebase';

initFirebase();

export const mapUserData = async (user: {
  getIdToken?: any;
  uid?: any;
  email?: any;
}) => {
  const { uid, email } = user;
  const token = await user.getIdToken(true);
  return {
    id: uid,
    email,
    token,
  };
};

const useUser = () => {
  const [user, setUser] = useState();
  const router = useRouter();

  const logout = async () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        router.push('/');
      })
      .catch((e: { e: any }) => {
        console.error(e);
      });
  };

  useEffect(() => {
    const userFromCookie = getUserFromCookie();
    if (!userFromCookie) {
      return;
    }
    setUser(userFromCookie);
    return;
  }, []);

  return { user, logout };
};

export { useUser };
