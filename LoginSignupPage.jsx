
import React, { useState } from 'react';
import styles from './LoginSignupPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  showLogin,
  showSignup,
  loginSuccess,
  signupSuccess,
} from '../Redux/userSlice';

const LoginSignupPage = () => {
  const dispatch = useDispatch();
  const { isLogin, status, user } = useSelector((s) => s.user);


  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
  });


  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    dispatch(loginSuccess({ email: loginData.email }));
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    dispatch(signupSuccess({ email: signupData.email, name: signupData.name }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <h2>{isLogin ? 'Login Form' : 'Signup Form'}</h2>

        
        <div className={styles.toggleBtns}>
          <button
            className={isLogin ? styles.active : ''}
            onClick={() => dispatch(showLogin())}
          >
            Signup
          </button>
          <button
            className={!isLogin ? styles.active : ''}
            onClick={() => dispatch(showSignup())}
          >
            Login
          </button>
        </div>

       
        {status === 'success' && (
          <div className={styles.successBox}>
            🎉 Hello {user?.name || user?.email}! You’re authenticated.
          </div>
        )}

     
        {isLogin && (
          <form className={styles.form} onSubmit={handleLoginSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              required
            />
            <a href="#!" className={styles.link}>
              Forgot password?
            </a>
            <button type="submit" className={styles.submitBtn}>
              Login
            </button>
            <p className={styles.switchText}>
              Not a member?{' '}
              <span onClick={() => dispatch(showSignup())}>Login now</span>
            </p>
          </form>
        )}

        {!isLogin && (
          <form className={styles.form} onSubmit={handleSignupSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={signupData.name}
              onChange={(e) =>
                setSignupData({ ...signupData, name: e.target.value })
              }
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={signupData.email}
              onChange={(e) =>
                setSignupData({ ...signupData, email: e.target.value })
              }
              required
            />
            <input
              type="password"
              placeholder="Create Password"
              value={signupData.password}
              onChange={(e) =>
                setSignupData({ ...signupData, password: e.target.value })
              }
              required
            />
            <button type="submit" className={styles.submitBtn}>
              Signup
            </button>
            <p className={styles.switchText}>
              Already a member?{' '}
              <span onClick={() => dispatch(showLogin())}>Signup now</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignupPage;







