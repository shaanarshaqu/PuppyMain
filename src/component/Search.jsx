import React, { useContext, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { newContext } from "../App";

function Search({ search }) {
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="container">
        <div className="row">
        {search.map((val, index) => (
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 my-2">
            <Link to={`/${val.id}`} style={{ textDecoration: "none" }}>
              <Card style={{ height: "370px" }} key={val.id}>
                <Card.Img
                  variant="top"
                  src={val.img}
                  style={{ height: "150px" }}
                />
                <Card.Body>
                  <Card.Title>{val.name}</Card.Title>
                  <Card.Text>
                    {val.detail}
                    <br />
                    <h5 className="h5-dog">₹{val.price}</h5>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
