import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from '../hools/useTypeSelector';
import { fetchUsers } from '../redux/action-creators/user';

const UserList = () => {
  const { error, users, loading } = useTypeSelector((state) => state.user);
  const dispatch = useDispatch();

  const getUsers = () => {
    dispatch(fetchUsers());
  };

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
