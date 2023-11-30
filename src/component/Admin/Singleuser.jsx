import React, { useContext, useEffect, useState } from "react";
import { newContext } from "../../App";
import { useNavigate, useParams } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function Singleuser() {
  let { id } = useParams();
  const userid = Number(id);
  const navigate = useNavigate();
  const { users, setUser, adminlogin } = useContext(newContext);
  const [currentuser, setCurrentuser] = useState({});
  useEffect(() => {
    let dummy = users[userid];
    setCurrentuser(dummy);
  }, []);

  //modelshow--------------------------------
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //--------------------------------------------

  function removeUser() {
    users.splice(userid, 1);
    navigate("/users");
  }

  return (
    <div
      style={{
        marginTop: "70px",
        paddingTop: "20px",
        paddingBottom:"20px",
        height: "100vh",
        backgroundColor: "lightblue",
      }}
    >
      {adminlogin ? (
        <>
          <div className="container">
            <div className="row">
              <div
                className="col-12 col-sm-12 col-md-3 d-flex"
                style={{
                  height: "250px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="single-img-div">
                  <img
                    src={currentuser.image}
                    className="img-fluid"
                    alt="user-profile"
                    style={{ height: "120px" ,borderRadius:"50%"}}
                  />
                </div>
              </div>
              <div
                className="col-12 col-sm-12 col-md-9 d-flex"
                style={{
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <h3 style={{ paddingLeft: "20px" }}>{currentuser.mail}</h3>
                <h6 style={{ paddingLeft: "20px" }}>
                  Previlage : {currentuser.previlage}
                </h6>
                <Button
                  variant="danger"
                  className="d-flex"
                  style={{
                    width: "150px",
                    alignSelf: "flex-end",
                    justifyContent: "center",
                  }}
                  onClick={handleShow}
                >
                  Remove User
                </Button>
              </div>
            </div>
            <br />
            <ListGroup
              as="ul"
              className="list ad-user-list"
              style={{ width: "100%" }}
            >
              <h6>Order Details</h6>
              <ListGroup.Item style={{ border: "none" }}>
                <div className="row">
                  <div className="col-1 ">
                    <b>#id</b>
                  </div>
                  <div className="col-2 ">
                    <b>Type</b>
                  </div>
                  <div className="col-2 ">
                    <b>Ctg</b>
                  </div>
                  <div className="col-4 ">
                    <b>Name</b>
                  </div>
                  <div className="col-2 ">
                    <b>Price</b>
                  </div>
                  <div className="col-1 ">
                    <b>Qty</b>
                  </div>
                </div>
              </ListGroup.Item>
              {currentuser.ordered ? (
                currentuser.ordered.map((val, index) => (
                  <ListGroup.Item key={index}>
                    <div className="row">
                      <div className="col-1 ">{val.id}</div>
                      <div className="col-2 d-flex justify-content-start ">
                        {val.type}
                      </div>
                      <div className="col-2 ">{val.catagory}</div>
                      <div className="col-4 ">{val.name}</div>
                      <div className="col-2 ">{val.price}</div>
                      <div className="col-1 ">{val.qty}</div>
                    </div>
                  </ListGroup.Item>
                ))
              ) : (
                <h5 style={{ textAlign: "center", marginTop: "20px" }}>
                  No items ordered.
                </h5>
              )}

              <h6>User Cart</h6>
              <ListGroup.Item style={{ border: "none" }}>
                <div className="row">
                  <div className="col-1 ">
                    <b>#id</b>
                  </div>
                  <div className="col-2 ">
                    <b>Type</b>
                  </div>
                  <div className="col-2 ">
                    <b>Ctg</b>
                  </div>
                  <div className="col-4 ">
                    <b>Name</b>
                  </div>
                  <div className="col-2 ">
                    <b>Price</b>
                  </div>
                  <div className="col-1 ">
                    <b>Qty</b>
                  </div>
                </div>
              </ListGroup.Item>
              {currentuser.carts ? (
                currentuser.carts.map((val, index) => (
                  <ListGroup.Item key={index}>
                    <div className="row">
                      <div className="col-1 ">{val.id}</div>
                      <div className="col-2 d-flex justify-content-start ">
                        {val.type}
                      </div>
                      <div className="col-2 ">{val.catagory}</div>
                      <div className="col-4 ">{val.name}</div>
                      <div className="col-2 ">{val.price}</div>
                      <div className="col-1 ">{val.qty}</div>
                    </div>
                  </ListGroup.Item>
                ))
              ) : (
                <h5 style={{ textAlign: "center", marginTop: "20px" }}>
                  Cart is Empty
                </h5>
              )}
            </ListGroup>
          </div>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Remove User</Modal.Title>
            </Modal.Header>
            <Modal.Body>Remove user {currentuser.mail} ?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="danger" onClick={removeUser}>
                Remove
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        <h1 style={{ color: "red", textAlign: "center" }}>Access Denied!</h1>
      )}
    </div>
  );
}

export default Singleuser;
