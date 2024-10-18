"use client";

import { useState } from 'react';
import styles from '../app/globals.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Intentando iniciar sesión');

    if (username === 'admin' && password === 'password') {
      localStorage.setItem('loginAttempt', 'success');
      setMessage('Inicio de sesión exitoso');
    } else {
      localStorage.setItem('loginAttempt', 'failure');
      setMessage('Nombre de usuario o contraseña incorrectos');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleLogin} className={styles.loginForm}>
        <h2>Welcome back</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {message && <p className={styles.message}>{message}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
