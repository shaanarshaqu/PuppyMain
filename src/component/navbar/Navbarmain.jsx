import React, { useContext } from "react";
import "./navbar.css";
import { Container, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
//for icon
import { AiOutlineShoppingCart } from "react-icons/ai";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Badge from "react-bootstrap/Badge";
import { IoLogOut } from "react-icons/io5";

function Navbarmain({
  state,
  displaybool,
  setSearch,
  displaylogin,
  users,
  setUser,
  usermail,
  setUsermail,
  cart,
  addtoCart,
  setdisplaylogin,
  setShow
}) {
  const navigate = useNavigate();

  function setcarttouser() {
    let dummyuses = users.map((user) => {
      if (user.mail === usermail.mail) {
        return { ...user, carts: cart };
      }
      return user;
    });
    setUser(dummyuses);
    addtoCart([]);
    setUsermail(null);
    setdisplaylogin(false);
    navigate("/");
  }

  function takeSearch(values) {
    let arr = state.filter((val) =>
      val.name.toLowerCase().includes(values.toLowerCase())
    );
    setSearch(arr);
    navigate("/search");
  }

  return (
    <div>
      <Navbar expand="md" className="d-flex align-item-center" id="navbar">
        <Container>
          <Navbar.Brand>
            <h3>
              Pu<span style={{ color: "orange" }}>pp</span>y
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-md"} />
          <Navbar.Offcanvas
            id={"offcanvasNavbar-expand-md"}
            aria-labelledby={"offcanvasNavbarLabel-expand-md"}
            placement="end"
            className="canvas-main"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={"offcanvasNavbarLabel-expand-md"}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="input-nav">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {displaybool ? (
                  <>
                    <Nav.Link>
                      <Link
                        to={"/"}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Home
                      </Link>
                    </Nav.Link>
                    <Nav.Link style={{ position: "relative" }}>
                      <Link
                        to={"/cart"}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <AiOutlineShoppingCart style={{ fontSize: "1.6em" }} />
                        <Badge
                          bg="warning"
                          style={{
                            position: "absolute",
                            left: "22px",
                            top: "3px",
                            borderRadius: "50%"
                          }}
                        >
                          {cart.length}
                        </Badge>
                      </Link>
                    </Nav.Link>
                  </>
                ) : (
                  <></>
                )}
              </Nav>
              <Form className="nav-inputs">
                {displaybool ? (
                  <>
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2 inp-search"
                      aria-label="Search"
                      onChange={(e) => takeSearch(e.target.value)}
                    />
                    <Button variant="warning" style={{ marginRight: "10px" }}>
                      Search
                    </Button>
                  </>
                ) : (
                  <></>
                )}
              </Form>
              <div>
                {!displaylogin ? (
                  <>
                    <Button
                      variant="primary"
                      style={{ marginRight: "10px" }}
                      onClick={() => navigate("/login")}
                    >
                      login
                    </Button>
                  </>
                ) : (
                  <>
                    <span
                      style={{
                        width: "50px",
                        overflow: "hidden",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    >
                      <img
                        src={usermail.image}
                        style={{ width: "30px", height:"30px",borderRadius: "50%" }}
                        className="img-fluid" onClick={()=>setShow(true)}
                      />
                    </span>
                    <Button
                      variant="light"
                      style={{ marginLeft: "10px", alignItems: "center" }}
                      onClick={setcarttouser}
                    >
                      <IoLogOut style={{ fontSize: "1.2em" }} />
                    </Button>
                  </>
                )}
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarmain;
