import React, { useContext, useEffect } from "react";
import "./css/main.css";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
// import { Image } from "react-bootstrap";
import { newContext } from "../App";


function Main() {
const {setDisplaybool} = useContext(newContext)
  useEffect(()=>{
    setDisplaybool(true)
  },[])

  return (
    <div id="main-div-main">
      <Carousel interval={3000} data-bs-theme="white">
        <Carousel.Item>
          <img
            className="d-block w-100 images-carousal"
            src={require("./images/New folder/Carosal1.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h5>First slide label</h5> */}
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image-fluid images-carousal"
            src={require("./images/New folder/Carosal2.jpg")}
            alt="Second slide"
            
          />
          <Carousel.Caption>
            {/* <h5>Second slide label</h5> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 images-carousal"
            src={require("./images/New folder/Carosal3.jpg")}
            alt="Third slide"
          />
          <Carousel.Caption>
            {/* <h5>Third slide label</h5> */}
            {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-3 divisions">
            <Link to={"/dog"}>
              <div className="img-div" id="one"></div>
            </Link>
            <small>Dog</small>
          </div>
          <div className="col-6 col-md-3 divisions">
            <Link to={"/cat"}>
              <div className="img-div" id="two"></div>
            </Link>
            <small>Cat</small>
          </div>
          <div className="col-6 col-md-3 divisions">
            <div className="img-div" id="three"></div>
            <small>Puppy</small>
          </div>
          <div className="col-6 col-md-3 divisions">
            <div className="img-div" id="four"></div>
            <small>Kitten</small>
          </div>
          <div className="col-6 col-md-3 divisions">
            <div className="img-div" id="five"></div>
            <small>Birds</small>
          </div>
          <div className="col-6 col-md-3 divisions">
            <div className="img-div" id="six"></div>
            <small>Reptiles</small>
          </div>
          <div className="col-6 col-md-3 divisions">
            <div className="img-div" id="seven"></div>
            <small>Small Animals</small>
          </div>
          <div className="col-6 col-md-3 divisions">
            <div className="img-div" id="eight"></div>
            <small>Fish</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
