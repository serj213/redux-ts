import { combineReducers } from 'redux';
import { useReducer } from './userReducer';

export const rootReducer = combineReducers({
  user: useReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
