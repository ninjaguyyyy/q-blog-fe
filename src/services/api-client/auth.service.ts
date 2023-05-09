import axiosClient from 'services/api-client/axios-client';

const APIs = {
  LOGIN_WITH_FACEBOOK: '/api/auth/login-with-facebook',
  LOGIN_WITH_GOOGLE: '/api/auth/login-with-google',
};

export const authWithFacebook = async (payload: AuthWithFacebookPayload) => {
  const data = await axiosClient.post(APIs.LOGIN_WITH_FACEBOOK, payload);
  return data;
};

export const authWithGoogle = async (payload: AuthWithGooglePayload) => {
  const data = await axiosClient.post(APIs.LOGIN_WITH_GOOGLE, payload);
  return data;
};

type AuthWithGooglePayload = {
  accessToken: string;
};

type AuthWithFacebookPayload = {
  userID: string;
  accessToken: string;
};
