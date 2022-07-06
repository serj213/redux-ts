import { Dispatch} from 'redux';
import axios from 'axios';
import { UserActionTypes, UserAction } from '../../types/user';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../reducers';



export const fetchUsers = () => { return (dispatch: Dispatch<UserAction>) => {
  try {
    dispatch({ type: UserActionTypes.FETCH_USERS });
    const response = axios.get('https://jsonplaceholder.typicode.com/users');
    response.then(({data}) => {
      dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: data });
    })
   
  } catch (err) {
    dispatch({
      type: UserActionTypes.FETCH_USERS_ERROR,
      payload: 'Произошла ошибка при загрузке пользователей',
    });
  }
}
};


// https://jsonplaceholder.typicode.com/users