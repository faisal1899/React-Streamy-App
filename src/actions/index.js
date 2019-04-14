import { SIGN_IN, SIGN_OUT } from './types';

export const SignIn = (userId) => ({
  type: SIGN_IN,
  payload: userId,
});

export const SignOut = () => ({
  type: SIGN_OUT,
});