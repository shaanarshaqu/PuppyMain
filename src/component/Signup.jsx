import React, { useRef, useState } from "react";
import "./css/signup.css";
import { Button } from "react-bootstrap";
import userlogo from "./images/userlogo.png";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Signup({ validate }) {
  const [mail, setemail] = useState("");
  const [pass, setPass] = useState("");
  const [conpass, setconfPass] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const inputrefpass = useRef();
  const inputrefconpass = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="signup-window">
      <Navbar className="bg-body-tertiary" id="navbar">
        <Container fluid>
          <Navbar.Brand>
            <Link
              to={"/login"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="signup-div">
        <div className="signup">
          
            <div className="userlogo-div-sign d-flex align-items-center">
              <label htmlFor="imginput"><img
                src={selectedImage || userlogo}
                alt="logo"
                className="logo"
              /></label>
            </div>
          <h6>Set a profile photo.</h6>
          <div className="input-div">
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setemail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  inputrefpass.current.focus();
                }
              }}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
              ref={inputrefpass}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  inputrefconpass.current.focus();
                }
              }}
            />
            <input
              type="password"
              placeholder="Conform Password"
              onChange={(e) => setconfPass(e.target.value)}
              ref={inputrefconpass}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  validate(mail.trim(), pass, conpass);
                }
              }}
            />
              <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="input-file"
            id="imginput"
            name="uploadimage"  
            style={{display:"none"}}
            
          />
            <Button
              variant="primary"
              style={{ marginTop: "10px" }}
              onClick={() => validate(mail.trim(), pass, conpass,selectedImage)}
              id="btn-login"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
