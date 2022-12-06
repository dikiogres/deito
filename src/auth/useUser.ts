import 'firebase/auth';

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
  return;
};

export { useUser };
