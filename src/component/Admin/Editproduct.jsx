import React, { useContext, useEffect, useRef, useState } from "react";
import images from "./pictures/items.png";
import { newContext } from "../../App";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";

function Editproduct() {
  const { id } = useParams();
  let productid = parseInt(id);
  const { state, setState, adminlogin } = useContext(newContext);
  const navigate = useNavigate();
  const [element, setElement] = useState({});
  //set img
  const [selectedImage, setSelectedImage] = useState("");
  const elementName = useRef();
  const elementDetail = useRef();
  const [elementCtg, setElementCtg] = useState("");
  const [elementType, setElementType] = useState("");
  const elementAbout = useRef();
  const elementPrice = useRef();

  useEffect(() => {
    let dummy = state.find((val) => val.id === productid);
    setElement(dummy);
  }, [state]);

  useEffect(() => {
    // Set default values for radio buttons when the component mounts
    setElementCtg(element.catagory);
    setElementType(element.type);
  }, [element.catagory, element.type]);

  function editstate() {
      let dummyarray = state.map((val) => {
        if (val.id === productid) {
          return {
            ...val,
            catagory: elementCtg,
            type: elementType,
            img:selectedImage || element.img,
            name: elementName.current.value,
            detail: elementDetail.current.value,
            about: elementAbout.current.value,
            price: parseInt(elementPrice.current.value),
          };
        }
        return val;
      });
      setState(dummyarray);
      alert("item updated");
      navigate("/products");

  }

  function removeitem() {
    let itemindex = state.indexOf(element);
    let dummystate = [...state];
    dummystate.splice(itemindex, 1);
    setState(dummystate);
    navigate("/products");
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        marginTop: "65px",
        backgroundColor: "lightblue",
        paddingBottom: "20px",
        minHeight: "100vh",
      }}
    >
      {adminlogin ? (
        <div className="container" style={{ paddingTop: "20px" }}>
          <div className="row">
            <div
              className="col-12 col-sm-12 col-md-5 d-flex justify-content-center"
              style={{ flexDirection: "column", alignItems: "center" }}
            >
              <div
                className="d-flex"
                style={{
                  overflow: "hidden",
                  borderRadius: "10px",

                  // backgroundColor: "yellow",
                  alignItems: "center",
                  height: "250px",
                  width: "250px",
                  border: "2px solid black",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <label htmlFor="uploadimage">
                  <img
                    src={selectedImage || element.img}
                    style={{ borderRadius: "10px", height: "240px" }}
                    className="img-fluid"
                  />
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="input-file"
                  id="uploadimage"
                  style={{ textDecoration: "none", display: "none" }}
                />
              </div>
              <p>Choose Image</p>
              <Button variant="danger" onClick={removeitem} style={{borderRadius:"25%",display:"flex",alignItems:"center",padding:"5px 10px" }}>
                <MdDeleteForever style={{ fontSize: "1.6em" }} />
              </Button>
            </div>
            <div
              className="col-12 col-sm-12 col-md-7 d-flex"
              style={{ justifyContent: "center" }}
            >
              <div
                className="d-flex"
                style={{ flexDirection: "column", width: "100%" }}
              >
                <strong style={{ fontSize: "18px" }}>#id:{element.id}</strong>
                <br />
                Name:
                <input
                  type="text"
                  defaultValue={element.name}
                  ref={elementName}
                />
                Detail:
                <input
                  type="text"
                  defaultValue={element.detail}
                  ref={elementDetail}
                />
                <strong>Ctg:</strong>
                <span>
                  <input
                    type="radio"
                    name="ctg"
                    checked={elementCtg === "dog"}
                    onChange={() => setElementCtg("dog")}
                  />
                  Dog&nbsp;
                  <input
                    type="radio"
                    name="ctg"
                    checked={elementCtg === "cat"}
                    onChange={() => setElementCtg("cat")}
                  />
                  Cat
                </span>
                <strong>Type:</strong>
                <span>
                  <input
                    type="radio"
                    name="type"
                    checked={elementType === "food"}
                    onChange={() => setElementType("food")}
                  />
                  Food&nbsp;
                  <input
                    type="radio"
                    name="type"
                    checked={elementType === "care"}
                    onChange={() => setElementType("care")}
                  />
                  Care
                </span>
                About item:
                <input
                  type="text"
                  defaultValue={element.about}
                  ref={elementAbout}
                />
                <span>
                  <b style={{ marginRight: "10px", fontSize: "20px" }}>₹</b>
                  <input
                    type="number"
                    style={{ width: "150px" }}
                    min={1}
                    defaultValue={element.price}
                    ref={elementPrice}
                  />
                </span>
                <span className="d-flex" style={{ justifyContent: "center" }}>
                  <Button
                    variant="secondary"
                    style={{ width: "90px", marginTop: "20px" }}
                    onClick={() => navigate("/products")}
                  >
                    Cancel
                  </Button>
                  &nbsp;
                  <Button
                    style={{ width: "150px", marginTop: "20px" }}
                    onClick={editstate}
                  >
                    Save Changes
                  </Button>
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 style={{ color: "red", textAlign: "center" }}>Access Denied!</h1>
      )}
    </div>
  );
}

export default Editproduct;
