import React from 'react';
import { useAppDispatch } from '../hooks/useTypeSelector';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { fetchUsers } from '../redux/action-creators/user';
import { UserAction } from '../types/user';

const UserList = () => {
  const { error, users, loading } = useTypeSelector((state) => state.user);
  const dispatch = useAppDispatch()

React.useEffect(() => {
  dispatch((fetchUsers() as unknown as UserAction))
  // fetchUsers()
}, [])

  if (loading) {
    return <h1>Идёт загрузка</h1>;
  }

  if (error) {
    return <h1>Произошла ошибка</h1>;
  }

  return (
    <>
      {users.length &&
        users.map(({ id, name }) => {
          return <div key={id}>{name}</div>;
        })}
    </>
  );
};

export default UserList;
