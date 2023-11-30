import React, { useEffect, useState } from "react";
import { newContext } from "../../App";
import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import "./cat.css";
import { Link } from "react-router-dom";

const Cat = () => {
  const { state ,setDisplaybool} = useContext(newContext);
  const [catfoodmap, setcatFood] = useState([]);
  const [catcaremap, setcatCare] = useState([]);
  const food = state.filter(
    (val) => val.catagory === "cat" && val.type === "food"
  );
  const care = state.filter(
    (val) => val.catagory === "cat" && val.type === "care"
  );

  useEffect(() => {
    setcatFood(food);
    setcatCare(care);
    setDisplaybool(true)
  }, []);

  return (
    <div className="cat-section">
      <div className="container d-flex justify-start">
        <div className="row card-row">
          {catfoodmap.map((val) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 my-2">
              <Link to={`/${val.id}`} style={{textDecoration:"none"}}>
                <Card style={{ height: "340px" , overflow:"hidden"}} key={val.id}>
                  <Card.Img
                    variant="top"
                    src={val.img}
                    style={{ height: "150px" ,width:"140px"}}
                  />
                  <Card.Body>
                    <Card.Title>{val.name}</Card.Title>
                    <Card.Text>{val.detail}<br/>
                    <h5 className="h5-cat">₹{val.price}</h5></Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="row card-row">
          {catcaremap.map((val) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 my-2">
              <Link to={`/${val.id}`} style={{textDecoration:"none"}}>
                <Card style={{ height: "340px" }} key={val.id}>
                  <Card.Img
                    variant="top"
                    src={val.img}
                    style={{ height: "150px" ,width:"140px"}}
                  />
                  <Card.Body>
                    <Card.Title>{val.name}</Card.Title>
                    <Card.Text>{val.detail}<br/>
                    <h5 className="h5-cat">₹{val.price}</h5></Card.Text>
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

export default Cat;
