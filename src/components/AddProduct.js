import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const userId = JSON.parse(localStorage.getItem("user"))._id;
  const [error, setError] = useState(false);

  const addProduct = async () => {
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    } else {
      let result = await fetch("http://localhost:5001/add-product", {
        method: "post",
        body: JSON.stringify({ name, price, category, company, userId }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      if (result.name) {
        alert("Data Inserted...");
      }
    }
  };
  return (
    <div className="product">
      <h1>Add Product</h1>
      <input
        className="inputfield"
        type="text"
        placeholder="Enter Product Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {error && !name && <span className="span">Name is Required</span>}
      <input
        className="inputfield"
        type="text"
        placeholder="Enter Product Price"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      {error && !price && <span className="span">Price is Required</span>}
      <input
        className="inputfield"
        type="text"
        placeholder="Enter Product Category"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      {error && !category && <span className="span">Category is Required</span>}
      <input
        className="inputfield"
        type="text"
        placeholder="Enter Product Company"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      />
      {error && !company && <span className="span">Company is Required</span>}
      <button className="appButton" onClick={addProduct}>
        Add
      </button>
    </div>
  );
};

export default AddProduct;
