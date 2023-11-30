import React, { useState } from "react";
import "./css/paymentsection.css";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useContext } from "react";
import {newContext} from "../App"
import { useNavigate } from "react-router-dom";

function Payment({ usermail, total }) {

  const {users,setUser,cart} = useContext(newContext)

  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate()

  function setorder(){
    let dummyusers = users.map((val)=>{
      if(val.mail === usermail.mail){
        return {...val,ordered:cart}
      }
      return val
    })
    setUser(dummyusers)
    setModalShow(true)
  }
console.log(users)

  return (
    <div className="container paymentsection">
      <div className="row">
        <div className=".col-12 .col-sm-12 col-md-6 payment-inp-main">
          <div className="payment-inp">
            <p>Name:</p>
            <input type="text" placeholder="Name" />
            <p>Phone No</p>
            <input type="text" placeholder="Phone No" />
            <p>PIN</p>
            <input type="text" placeholder="PIN Code" />
            <p>City</p>
            <input type="text" placeholder="City" />
            <p>Address</p>
            <textarea rows={5} placeholder="Address" />
          </div>
        </div>
        <div className=".col-12 .col-sm-12 col-md-6 payment-inp-main2">
          <div className="payment-inp-main2-payment">
            <h3 style={{ color: "orange", marginBottom: "20px" }}>₹{total}</h3>
            <input type="radio" name="gatway" id="cashondelivery" />
            Cash on Delivery
            <br />
            <input type="radio" name="gatway" id="upi" />
            UPI
            <br />
            <input type="radio" name="gatway" id="netbanking" />
            Net Banking
            <br />
            <input type="radio" name="gatway" id="Debit-Credit" />
            Debit/Credit Card
            <br />
            <Button variant="warning" onClick={setorder}>Proceed</Button>
          </div>
        </div>
      </div>
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={() => setModalShow(false)}>
          <Modal.Title id="contained-modal-title-vcenter" style={{color:"green",textAlign:"center"}}>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 style={{color:"green"}}>Order Successfull</h4>
          <p>Your order will be delivered within 24 hours..</p>
        </Modal.Body>
        <Modal.Footer>
          <span onClick={()=>navigate("/")}><Button variant="success" onClick={() => setModalShow(false)}>
            Ok
          </Button></span>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Payment;
