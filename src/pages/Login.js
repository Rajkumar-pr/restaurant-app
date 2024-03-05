import React, { useState } from 'react';
import Layout from '../component/Layout/Layout';
const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:8080/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const result = await response.json();
        setMessage(result.message);
      } else {
        setMessage('Error signing up');
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const result = await response.json();
        setMessage(result.message);
      } else {
        setMessage('Invalid username or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <Layout>
    <div style={{backgroundImage:`url(https://wallup.net/wp-content/uploads/2016/01/258626-nature-landscape-lake-reflection-mountain-clouds-forest-Italy-water-summer-trees-calm.jpg)`}}>
      <h1>User Authentication Example</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
           onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="button" onClick={handleSignup}>
        Signup
      </button>

      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </div>

     
    </div>
    </Layout>
  );
};

export default App;
