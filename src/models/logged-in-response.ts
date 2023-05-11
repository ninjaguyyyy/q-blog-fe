import { User } from 'models/user';

export type LoggedInResponse = {
  accessToken: string;
  user: User;
};
