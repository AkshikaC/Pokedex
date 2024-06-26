import React, { useState } from "react";
import "./index.css";
import { auth, app } from "./firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate('');

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      navigate("/poke")
      //console.log(userCredential)
    })
      .catch((error) => {
        //console.log(error)
      });
  }

  return (
    <div className="container-signin">
      <section className="wrapper">
        <div className="heading">
          <h1 className="text text-large"><strong>Sign In</strong></h1>
          <p className="text text-normal" style={{ marginBottom: "2rem" }}>New user? <span><a href="/signup" className="text text-links">Create an account</a></span></p>
        </div>
        <form onSubmit={signIn}>
          <div className="input-control">
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" />
          </div>
          <div className="input-control">
            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" />
          </div>
          <button type="submit" name="Submit" className="input-submit" value="Sign In">Sign In</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
