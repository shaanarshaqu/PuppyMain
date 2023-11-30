import React, { useEffect } from "react";
import { newContext } from "../../App";
import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import "./dog.css";
import { Link} from "react-router-dom";


const Dog = () => {
  const { state ,setDisplaybool} = useContext(newContext);
  const food = state.filter(
    (val) => val.catagory === "dog" && val.type === "food"
  );
  const care = state.filter(
    (val) => val.catagory === "dog" && val.type === "care"
  );
  const [foodmap, setFood] = useState([]);
  const [caremap, setCare] = useState([]);
  useEffect(() => {
    setFood(food);
    setCare(care);
    setDisplaybool(true)
  }, []);

  return (
    <div className="dog-section">
      <div className="container">
        <div className="row card-row">
          {foodmap.map((val, index) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 my-2">
              <Link to={`/${val.id}`} style={{textDecoration:"none"}}>
                <Card style={{ height: "370px" }} key={val.id}>
                  <Card.Img
                    variant="top"
                    src={val.img}
                    style={{ height: "150px" ,width:"150px"}}
                  />
                  <Card.Body>
                    <Card.Title>{val.name}</Card.Title>
                    <Card.Text>{val.detail}<br/>
                    <h5 className="h5-dog">₹{val.price}</h5></Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="row card-row">
          {caremap.map((val, index) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 my-2">
              <Link to={`/${val.id}`} style={{textDecoration:"none"}}>
                <Card style={{ height: "370px" }} key={val.id}>
                  <Card.Img
                    variant="top"
                    src={val.img}
                    style={{ height: "150px" ,width:"150px"}}
                  />
                  <Card.Body>
                    <Card.Title>{val.name}</Card.Title>
                    <Card.Text>{val.detail}<br/>
                    <h5 className="h5-dog">₹{val.price}</h5></Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dog;
