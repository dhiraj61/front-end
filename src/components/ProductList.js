import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5001/product");
    result = await result.json();
    setProducts(result);
  };
  return (
    <div className="product-list">
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">Sr. No.</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Company</th>
          </tr>
        </thead>
        <tbody className="tablehead">
          {products.map((item, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>{item.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
