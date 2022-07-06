import React from 'react';
import { useTypeSelector } from '../hools/useTypeSelector';

const UserList = () => {
  const { error, users, loading } = useTypeSelector((state) => state.user);

  return <>d</>;
};

export default UserList;
