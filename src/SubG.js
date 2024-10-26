import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";

const SubG = ({ c }) => {
  const [clicked, setClicked] = useState(false);
  const [ar, setar] = useState([
    {
      title: "",
      img: "",
      price: "",
    },
  ]);
  function handler() {
    const updatedAr = [{ title: c.title, img: c.img, price: c.price }];
    setClicked(true);
    setar(updatedAr);
    axios
      .post(
        "https://vogueity-default-rtdb.firebaseio.com/products.json",
        updatedAr
      )
      .then(() => {
        alert("sucessfull");
      })
      .catch((error) => {
        console.error("error passing data", error);
      });
  }
  return (
    <>
      <Link to='/' className="back">
        <h1 className="s-h">Vogueity</h1>
      </Link>
      <div className="ptr">
        <div className="lefte">
          <img src={c.img} alt="imge" className="imge" />
        </div>
        <div className="righte">
          <h1>{c.title}</h1>
          <p>Price: {c.price}</p>
          <p>Rating: {c.rating}</p>
          <p>Dimensions: {c.dimensions}</p>
          <div className="pur">
            <button
              className="add"
              onClick={() => {
                if (!clicked) {
                  handler();
                }
              }}
              disabled={clicked}
            >
              Add to cart
            </button>
            <button className="buy">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubG;