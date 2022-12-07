import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  let user = localStorage.getItem('deito-user');
  user = JSON.parse(user);

  useEffect(() => {
    if (!user) {
      router.push('auth/login');
    }
  }, [router, user]);

  return <div>{user ? children : null}</div>;
};

export default ProtectedRoute;
