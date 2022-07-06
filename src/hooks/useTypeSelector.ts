import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import {  AppDispatch, RootState } from '../redux/reducers';

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch
