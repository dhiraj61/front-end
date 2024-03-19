import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = async () => {
    let result = await fetch(`http://localhost:5001/product/${param.id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };

  const Updatedetail = async () => {
    let result = await fetch(`http://localhost:5001/update/${param.id}`, {
      method: "Put",
      body: JSON.stringify({ name, price, category, company }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    console.log(result);
    navigate("/");
  };
  return (
    <div className="product">
      <h1>Update Product</h1>
      <input
        className="inputfield"
        type="text"
        placeholder="Enter Product Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        className="inputfield"
        type="text"
        placeholder="Enter Product Price"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <input
        className="inputfield"
        type="text"
        placeholder="Enter Product Category"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      <input
        className="inputfield"
        type="text"
        placeholder="Enter Product Company"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      />
      <button className="appButton" onClick={Updatedetail}>
        Update
      </button>
    </div>
  );
};

export default UpdateProduct;
