import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import userService from '../services/userService';
import { useAuth } from '../utils/authContext';

import backgroundImage from './assets/login.jpg';

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    userService
      .login(credentials)
      .then((res) => {
        console.log(res.data);
        auth.setUsername(credentials.username);
        window.localStorage.setItem('token', res.data.token);
        navigate('/');
      })
      .catch((err) => window.alert(err.response.data.error));
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ maxWidth: '400px', width: '100%', padding: '20px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.8)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Form>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
          </Form.Group>
          <div className="d-grid mb-3">
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Login
            </Button>
          </div>
          <Form.Text>
            New user? <Link to={'/register'}>Register Here!</Link>
          </Form.Text>
        </Form>
      </div>
    </div>
  );
}
