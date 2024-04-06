import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "../Store/cartSlice";

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = async () => {
      const result = await axios.get("https://fakestoreapi.com/products");
      setProducts(result?.data);
    };
    getProducts();
  }, []);

  const addToCartHandler = (product) => {
    dispatch(add(product));
  };
  return (
    <div>
      <div className="productsWrapper">
        {products?.length > 0 &&
          products.map((product, id) => {
            return (
              <div key={product?.id || id} className="card">
                <img src={product?.image} />
                <h6>{product?.title}</h6>
                <h5>{product?.price}</h5>
                <button
                  className="btn"
                  onClick={() => {
                    addToCartHandler(product);
                  }}
                >
                  Add to Card
                </button>
              </div>
            );
          })}
        Home
      </div>
    </div>
  );
};

export default Home;
