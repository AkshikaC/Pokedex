import React, { useState } from "react";
import "./index.css";
import { auth, app } from "./firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate('');

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      navigate("/")
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
          <h1 className="text text-large"><strong>Sign Up</strong></h1>
          <p className="text text-normal" style={{ marginBottom: "2rem" }}>Already a user? <span><a href="/" className="text text-links">Log in</a></span></p>
        </div>
        <form onSubmit={signUp}>
          <div className="input-control">
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" />
          </div>
          <div className="input-control">
            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" />
          </div>
          <button type="submit" name="Submit" className="input-submit" value="Sign In">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default SignUp;
