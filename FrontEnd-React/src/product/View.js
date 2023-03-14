import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    stock: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const result = await axios.get(`http://localhost:3001/products/${id}`);
    setProduct(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Thông tin sản Phẩm</h2>

          <div className="card">
            <div className="card-header">
              id : {product.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Tên sản phẩm:</b>
                  {product.name}
                </li>
                <li className="list-group-item">
                  <b>Giá:</b>
                  {product.price}
                </li>
                <li className="list-group-item">
                  <b>Tồn Kho:</b>
                  {product.stock}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
