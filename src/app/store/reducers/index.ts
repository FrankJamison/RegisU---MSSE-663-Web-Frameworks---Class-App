import { ActionReducerMap } from '@ngrx/store';
import { ApplicationState } from '../models/application-state.model';
import { authReducer } from './auth.reducer';
import { userReducer } from './user.reducer';
import { heroesReducer} from '../../hero-table/store/reducers/heroes.reducer'

export const appState: ActionReducerMap<ApplicationState> = {
  authState: authReducer,
  userState: userReducer,
  heroesState: heroesReducer,
};
