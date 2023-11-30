import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./seperate.css";
import { Button } from "react-bootstrap";
import { newContext } from "../../App";
import Modal from "react-bootstrap/Modal";

function Seperate({ state }) {
  const { seperate } = useParams();
  let id = parseInt(seperate);

  const {
    addtoCart,
    cart,
    setDisplaybool,
    incrementqty,
    decrementqty,
    usermail,
  } = useContext(newContext);

  const [modalShow, setModalShow] = useState(false);

  const [original, setOriginal] = useState(null);
  const [element, setElement] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    let arr = state.find((val) => val.id === id);
    setElement(arr);
    setOriginal(arr);
    setDisplaybool(true);
  }, [state, id]);

  // function addqtyitems() {
  //   let just = { ...element, qty: element.qty + 1 };
  //   setElement(just);
  // }
  // function dicqtyitems() {
  //   if (element.qty > 1) {
  //     let just = { ...element, qty: element.qty - 1};

  //     setElement(just);
  //   }
  // }

  function setcart() {
    if (usermail) {
      let iteminCart = false;
      let arr = cart.map((val) => {
        if (val.id === element.id) {
          iteminCart = true;
          return {
            ...val,
            qty: val.qty + element.qty,
            total: (val.qty + element.qty) * original.price,
          };
        }
        return val;
      });
      if (!iteminCart) {
        let element = { ...original, total: original.qty * original.price };
        arr.push(element);
      }
      addtoCart(arr);
      setModalShow(true);
    }
    else{
      navigate("/login")
    }
  }
  console.log(cart);

  return (
    <>
      {element && (
        <div className="container seperate-div">
          <div className="row seperate-row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 seperate-col1">
              <img
                src={element.img}
                alt="img.png"
                id="img-seperate"
              />
            </div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-8 seperate-col2">
              <div className="seperate-col2-element">
                <h2 style={{ color: "rgb(255, 162, 0)", textAlign: "center" }}>
                  {element.name}
                </h2>
                <span style={{ marginTop: "30px" }}>
                  <h6>{element.detail}</h6>
                  <p>{element.about}</p>
                </span>
              </div>
            </div>
            <div
              className="col-12 col-sm-12 col-md-12 col-lg-12"
              id="seperate-button-div"
            >
              <h5>
                Total: <span id="seperate-price">₹{element.price}</span>
              </h5>
              <span className="seperate-span">
                {/* <Button variant="secondary" onClick={() => dicqtyitems(element.id)}>
                  -
                </Button>
                &nbsp;{element.qty}&nbsp;
                <Button variant="secondary" onClick={() => addqtyitems(element.id)}>
                  +
                </Button>&nbsp;&nbsp;&nbsp;&nbsp; */}
                <Button
                  variant="warning"
                  style={{ padding: "10px 70px" }}
                  onClick={setcart}
                >
                  Add to cart
                </Button>
              </span>
            </div>
          </div>
          <Modal
            show={modalShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton onClick={() => setModalShow(false)}>
              <Modal.Title id="contained-modal-title-vcenter">Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Item added to the cart!</h4>
              <p>Item added successfully...</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="warning" onClick={() => setModalShow(false)}>
                Ok
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
}

export default Seperate;
