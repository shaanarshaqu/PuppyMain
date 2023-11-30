import React, { useContext, useEffect, useState } from "react";
import { newContext } from "../App";
import "./css/cart.css";
import { MdDelete } from "react-icons/md";

import { Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom"; 
import Login from "./Login";


function Cart({ cart,setTotal,total }) {
  const { setDisplaybool, addtoCart, state, incrementqty, decrementqty,usermail,setLogin } =
    useContext(newContext);
  const [displaycart,setDisplaycart]= useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setDisplaybool(true);
    if (cart.length !== 0) {
      let total = cart.reduce((totalval, val) => totalval + val.total,0);
      setTotal(total);
      setDisplaycart(true)
    }
    else{
      setDisplaycart(false)
    }
  }, [cart]);
  console.log(cart);

  function removeFromcart(index){
    
    let dummycart=[...cart];
    dummycart.splice(index,1);
    addtoCart(dummycart)

    
  }





  return (
    <div className="cart-main" style={{ marginTop: "70px", marginBottom:"80px"}}>
      {usermail?<><div className="container container-main">
        {displaycart?<>{cart.map((val,index) => (
          <div className="row cart-main-row mb-2">
            <div className="col-12 ">
              <div className="row cart-second-row">
                <div className="col-3 cart-second-column">
                  <div className="img-div-cart" style={{position:"relative"}}>
                    <img src={val.img} />
                    <span style={{position:"absolute",bottom:"20px"}} onClick={()=>removeFromcart(index)}><MdDelete style={{ fontSize: '1.61em' ,color:"white",backgroundColor:"gray",borderRadius:"10px"}}/></span>
                  </div>
                  <div className="btn-div-cart">
                    <Button
                      variant="secondary"
                      onClick={() => decrementqty(val.id)}
                    >
                      -
                    </Button>
                    &nbsp;{val.qty}&nbsp;
                    <Button
                      variant="secondary"
                      onClick={() => incrementqty(val.id)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className="col-9 cart-second-column2">
                  <div className="cart-second-column2-div">
                    <h4>{val.name}</h4>
                    <small>{val.detail}</small>
                    <p>{val.about}</p>
                    <h6 style={{ color: "orange" }}>₹{val.total}</h6>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}</>:<><h1 style={{color:"orange"}}>Cart is empty</h1></>}
        <div className="cart-total-div">
          <div className="cart-total-div-inner">
          {displaycart ? <><h3 style={{color:"orange"}}>₹{total}</h3><Button variant="warning" onClick={()=>navigate("/payment")}>Proceed to Payment</Button></>:<></>}
          </div>
        </div>
      </div></>:<Login setLogin={setLogin}/>}
    </div>
  );
}

export default Cart;
