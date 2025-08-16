import React, { useState } from 'react';
import './Sign_Up.css';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Sign_Up = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showerr, setShowerr] = useState('');
  const navigate = useNavigate();
  
  
  
  

  const register = async (e) => {
    e.preventDefault();

    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, phone }),
    });

    const json = await response.json();

    if (json.authtoken) {
      sessionStorage.setItem('auth-token', json.authtoken);
      sessionStorage.setItem('name', name);
      sessionStorage.setItem('phone', phone);
      sessionStorage.setItem('email', email);

      navigate('/');
      window.location.reload();
    } else {
      if (json.errors) {
        setShowerr(json.errors.map(err => err.msg).join(', '));
      } else {
        setShowerr(json.error);
      }
    }
  };
  const handleReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setPassword('');
    };

  return (
    
    <div className="container" style={{ marginTop: '5%' }}>
      <div className="signup-grid">
      <div className="signup-text">
            <h1>Sign Up</h1>
          </div>
          <div className="signup-text1" style={{ textAlign: "left" }}>
            Already a member?
            <span>
              <Link to="/login" style={{ color: "#2190FF" }}>
                Login
              </Link>
            </span>
            </div>
        <div className="signup-form">
          <form method="POST" onSubmit={register}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Enter your name"
                aria-describedby="helpId"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                name="phone"
                id="phone"
                className="form-control"
                placeholder="Enter your phone number"
                aria-describedby="helpId"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                aria-describedby="helpId"
              />
              <small id="helpId" className="form-text text-muted">
                We'll never share your email.
              </small>
              {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
              />
            </div>
            <div className="btn-group">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
              <button
                  type="reset"
                  className="btn btn-danger mb-2 waves-effect waves-light"
                  onClick={handleReset}
                 >
                  Reset
                </button>
              <Link to="/login" className="btn btn-link">
                Already a member? Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  );
};

export default Sign_Up;
