import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
 
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    loadProducts();
  }, [products]);

  const loadProducts = async () => {
    const result = await axios.get("http://localhost:3001/products");
    setProducts(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Tồn Kho</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/view/${product.id}`}>
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edit/${product.id}`}>
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger mx-2"
                    to={`/delete/${product.id}`}>
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
