import React, { useState } from 'react';
import Login from './pages/login/login';
import Auth from './pages/auth/auth';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = ({ email, password }) => {
    if (email.length>0 && password.length>0) {
      setUser({ name: 'Budapest' });
    } else {
      alert('Rossz email vagy jelszó');
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      {user ? (
        <Auth userName={user.name} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
