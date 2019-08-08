import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
  users: UserDataState
}

export interface UserDataState{
  maskUserName: boolean;
}

const initialStateUser: UserDataState = {
  maskUserName: true
};

const getUserDataSelector = createFeatureSelector<UserDataState>('users');
export const getMaskUserName = createSelector(getUserDataSelector, state => state.maskUserName);

export function reducer(state = initialStateUser, action) {
  switch (action.type) {

    case 'MASK_USER_NAME':
      return {
        ...state,
        maskUserName: action.payload
      };

    default:
      return state;
  }
}
