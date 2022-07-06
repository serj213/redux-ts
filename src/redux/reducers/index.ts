import { combineReducers } from 'redux';
import { useReducer } from './userReducer';
import { store } from '../store';

export const rootReducer = combineReducers({
  user: useReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
