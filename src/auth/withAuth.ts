import cookies from 'js-cookie';

export const getUserFromCookie = () => {
  const cookie = cookies.get('auth');
  if (!cookie) {
    return;
  }
  return JSON.parse(cookie);
};
