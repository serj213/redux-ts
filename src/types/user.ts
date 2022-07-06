export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

export interface fetchUser {
  type: UserActionTypes.FETCH_USERS;
}

export interface fetchUserSuccess {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}

export interface fetchUser {
  type: UserActionTypes.FETCH_USERS;
}

export interface fetchUserError {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

export type userAction = fetchUser | fetchUserSuccess | fetchUserError;
