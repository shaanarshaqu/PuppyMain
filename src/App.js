import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./component/Login";
import { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./component/Signup";
import {
  validateEmail,
  validatePassword,
  validateCon_pass,
} from "./component/Validate";
import Navbarmain from "./component/navbar/Navbarmain";
import Main from "./component/Main";
import { useReducer } from "react";
import { items } from "./component/Items";
import Dog from "./component/Dogs/Dog";
import Cat from "./component/Cats/Cat";
import Seperate from "./component/single/Seperate";
import Cart from "./component/Cart";
import Payment from "./component/Payment";
import Search from "./component/Search";
import AdminMain from "./component/Admin/AdminMain";
import Users from "./component/Admin/Users";
import Products from "./component/Admin/Products";
import adminlogo from "./component/Admin/pictures/users.png";
import logo1 from "./component/images/puppy.png";
import Singleuser from "./component/Admin/Singleuser";
import Addproduct from "./component/Admin/Addproduct";
import Editproduct from "./component/Admin/Editproduct";
import Offcanvas from "react-bootstrap/Offcanvas";

export const newContext = createContext();

function App() {
  const [state, setState] = useState(items);
  const [cart, addtoCart] = useState([]);

  const [displaybool, setDisplaybool] = useState(false);
  const [displaylogin, setdisplaylogin] = useState(false);
  const [search, setSearch] = useState("");

  const [users, setUser] = useState([
    {
      image: adminlogo,
      mail: "admin@gmail.com",
      pass: "admin@123",
      previlage: "admin",
    },
    {
      image: logo1,
      mail: "shaan123@gmail.com",
      pass: "12345678",
      previlage: "user",
    },
    {
      image: adminlogo,
      mail: "john321@gmail.com",
      pass: "56789012",
      previlage: "user",
    },
  ]);
console.log(users)
  const [adminlogin, setAdminlogin] = useState(false);
  const [inpemail, setemail] = useState("");
  const [inppass, setPass] = useState("");
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);

  // -------------------------------------------------offcanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  //------------------------------------------------------

  const [usermail, setUsermail] = useState(null);

  function incrementqty(id) {
    let increment = cart.map((val) => {
      if (val.id === id) {
        return { ...val, qty: val.qty + 1, total: (val.qty + 1) * val.price };
      }
      return val;
    });
    addtoCart(increment);
  }
  function decrementqty(id) {
    let increment = cart.map((val) => {
      if (val.id === id) {
        if (val.qty > 1) {
          return { ...val, qty: val.qty - 1, total: (val.qty - 1) * val.price };
        }
      }
      return val;
    });
    addtoCart(increment);
  }

  const setLogin = () => {
    const findUser = users.find(
      (list) =>
        list.mail === inpemail.trim() &&
        list.pass === inppass &&
        list.previlage === "user"
    );
    const admin = users.find(
      (list) =>
        list.mail === inpemail.trim() &&
        list.pass === inppass &&
        list.previlage === "admin"
    );

    if (admin) {
      setUsermail(admin);
      navigate("/adminmain");
      setAdminlogin(true);
      return 1;
    }
    if (findUser) {
      setUsermail(findUser);
      setdisplaylogin(true);
      let userElement = users.find((val) => val.mail === inpemail.trim());
      if (userElement && userElement.carts) {
        addtoCart(userElement.carts);
      }
      navigate("/");
    } else {
      alert("Incorrect Email or Password");
      console.log("podey...");
    }
  };

  const validate = (signmail, signpass, signconfpass, selectedImage) => {
    let check = users.find((val) => val.mail === signmail);
    if (check) {
      alert("user is already exist..");
    }
    if (!check) {
      if (
        validateEmail(signmail) &&
        validatePassword(signpass) &&
        validateCon_pass(signpass, signconfpass) &&
        selectedImage
      ) {
        setUser([
          ...users,
          {
            mail: signmail,
            pass: signpass,
            image: selectedImage,
            previlage: "user",
          },
        ]);
        alert("success");
        navigate("/login");
      } else {
        alert("failed...");
      }
    }
  };

  return (
    <div className="App">
      <Navbarmain
        displaybool={displaybool}
        setSearch={setSearch}
        state={state}
        displaylogin={displaylogin}
        users={users}
        setUser={setUser}
        usermail={usermail}
        setUsermail={setUsermail}
        cart={cart}
        addtoCart={addtoCart}
        setdisplaylogin={setdisplaylogin}
        adminlogin={adminlogin}
        setShow={setShow}
      />

      <newContext.Provider
        value={{
          displaybool,
          setDisplaybool,
          setemail,
          setPass,
          state,
          setState,
          addtoCart,
          cart,
          incrementqty,
          decrementqty,
          usermail,
          setLogin,
          adminlogin,
          users,
          setUser,
        }}
      >
        <Routes>
          <Route path="/login" element={<Login setLogin={setLogin} />} />
          <Route path="/signup" element={<Signup validate={validate} />} />
          <Route path="/" element={<Main />} />
          <Route path="/dog" element={<Dog />} />
          <Route path="/cat" element={<Cat />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} setTotal={setTotal} total={total} />}
          />
          <Route
            path="/payment"
            element={<Payment usermail={usermail} total={total} />}
          />

          <Route path="/adminmain" element={<AdminMain />} />
          <Route path="/users" element={<Users users={users} />} />
          <Route path="/users/:id" element={<Singleuser />} />

          <Route path="/products" element={<Products state={state} />} />
          <Route path="/products/:id" element={<Editproduct />} />

          <Route path="/products/addproducts" element={<Addproduct />} />

          <Route path="/search" element={<Search search={search} />} />
          <Route path=":seperate" element={<Seperate state={state} />} />
        </Routes>
      </newContext.Provider>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ display: "flex", flexDirection:"column",alignItems:"center"}}>
          {usermail ? (
            <>
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "3px solid orange",
                }}
              >
                <img
                  src={usermail.image}
                  style={{ width: "110px", borderRadius: "50%" }}
                  className="img-fluid"
                />
              </div>
              <br/>
              <h6>{usermail.mail}</h6>
            </>
          ) : (
            <></>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default App;
