import React, { useContext, useEffect, useRef } from "react";
import { newContext } from "../App";
import "./css/login.css";
import { Button } from "react-bootstrap";
import userlogo from "./images/userlogo.png";
import {Container,Navbar} from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

function Login({ setLogin }) {
  const { setemail, setPass,setDisplaybool } = useContext(newContext);
  const inputrefpass = useRef()
  useEffect(()=>{
    setDisplaybool(false)
  },[])
  
  return (
    <div className="Login-window">
      
      <div className="login-div">
        <div className="login">
          <div className="userlogo-div">
            <img src={userlogo} alt="logo" className="logo" />
          </div>
          <div className="input-div">
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setemail(e.target.value)}
              onKeyDown={(e)=>{if(e.key==="Enter"){inputrefpass.current.focus();}}}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
              ref={inputrefpass}
              onKeyDown={(e)=>{if(e.key==="Enter"){setLogin()}}}
            />
            <Button variant="warning" style={{marginTop:"10px"}} onClick={setLogin} id="btn-login">
              Login
            </Button>
          </div>
          <small>Don't have an account?&nbsp;<Link to={"/signup"} style={{textDecoration:"none"}}>Sign up</Link></small>
        </div>
      </div>
    </div>
  );
}

export default Login;
