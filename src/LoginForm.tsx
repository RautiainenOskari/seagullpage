import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from "../firebaseConfig";

function LoginForm() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
      setLoginError(null);
    } catch (error) {
      setLoginError("Authentication failed. Please check your email and password.");
    }
  };

  return (
    <div className="login-form">
      <h3>Sign in for cool seagull video!</h3>
      {loginError && <div className="alert">{loginError}</div>}
      {isLoggedIn ? (
        <div className="alert">
          <iframe
            width="420"
            height="315"
            src="https://www.youtube.com/embed/NX581YGspCI?si=yoXKRX0ESQ1U-Mvg"
            title="Seagull Video"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <div>
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <br/>
          <button type="submit">Sign in</button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
