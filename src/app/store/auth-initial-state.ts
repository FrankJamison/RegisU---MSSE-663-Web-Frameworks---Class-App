import { Token } from '@angular/compiler';
import { AuthState } from './models/auth-state.model';

export const AUTH_INITIAL_STATE: AuthState = {
  isAuth: false,
  token: '',
  isTokenExpired: true,
  loading: true
};
