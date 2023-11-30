import React, { useContext } from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import "./css/users.css";
import { Link, useNavigate } from "react-router-dom";
import { newContext } from "../../App";

function Users({ users }) {
  const navigate = useNavigate();
  const { adminlogin } = useContext(newContext);
  return (
    <div
      style={{
        marginTop: "70px",
        backgroundColor: "lightblue",
        paddingTop: "20px",
        minHeight: "100vh",
      }}
    >
      {adminlogin ? (
        <div className="container container-main">
          <ListGroup
            as="ul"
            className="list ad-user-list"
            style={{ width: "100%", padding: 0 }}
          >
            {users.map((val, index) => {if(val.previlage === "admin"){return <></>}
            return <>
              <Link to={`/users/${index}`} style={{ textDecoration: "none" }}>
                <ListGroup.Item
                  style={{
                    width: "100%",
                    height: "70px",
                    borderRadius: "10px",
                    border: "1px solid black",
                    marginBottom: "2px",
                    paddingTop: "13px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  key={index}
                >
                  <div className="row" style={{ width: "100%" }}>
                    <div
                      className="col-1 ad-user-img-div d-flex"
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={val.image}
                        alt=""
                        width={"40px"}
                        style={{ borderRadius: "50%", height: "40px" }}
                      />
                    </div>
                    <div
                      className="col-9 ad-user-mail-div d-flex"
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      <h6
                        style={{
                          fontFamily: "sans-serif",
                          paddingLeft: "30px",
                        }}
                      >
                        {val.mail}
                      </h6>
                    </div>

                    <div
                      className="col-2 ad-bage d-flex"
                      style={{
                        justifyContent: "flex-end",
                        paddingBottom: "10px",
                      }}
                    >
                      <Badge
                        bg="warning"
                        pill
                        style={{ width: "20px", height: "20px" }}
                        className="ad-user-badge"
                      >
                        {val.ordered &&
                          val.ordered.length != 0 &&
                          val.ordered.length}
                      </Badge>
                      &nbsp;
                      <Badge
                        bg="secondary"
                        pill
                        style={{ width: "20px", height: "20px" }}
                        className="ad-user-badge"
                      >
                        {val.carts && val.carts.length != 0 && val.carts.length}
                      </Badge>
                    </div>
                  </div>
                </ListGroup.Item>
              </Link>
           </> })}
          </ListGroup>
        </div>
      ) : (
        <h1 style={{ color: "red", textAlign: "center" }}>Access Denied !</h1>
      )}
    </div>
  );
}

export default Users;
