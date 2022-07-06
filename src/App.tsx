import React from 'react';
import UserList from './Components/UserList';
import { store } from './redux/store';

const App: React.FC = () => {
  return (
    <div className="App">
      <UserList />
    </div>
  );
};

export default App;
