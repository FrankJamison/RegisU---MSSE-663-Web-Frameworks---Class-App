import { UserState } from './models/user-state.model';

export const USER_INITIAL_MOCK_STATE: UserState = {
  user: {
    id: 'userId',
    username: 'admin',
    password: 'password',
    tokens: [
      {
        id: 'tokenId',
        token: 'token',
      },
    ],
    email: 'admin@gmail.com',
  },
  loading: false,
};
