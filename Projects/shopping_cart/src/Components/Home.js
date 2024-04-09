import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/cartSlice";
import { STATUSES, fetchProducts } from "../Store/productSlice";

// thunk -> is a function which return promise
// multiple components fetch details again
// either you pass products into child or else make an api call
const Home = () => {
  const { data, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const addToCartHandler = (product) => {
    dispatch(add(product));
  };
  return (
    <div>
      {status === STATUSES.LOADING && (
        <div>
          <h2>Loading Data</h2>
        </div>
      )}
      {status === STATUSES.ERROR && (
        <div>
          <h2>Something Went Wrong</h2>
        </div>
      )}
      {status === STATUSES.SUCCESS && (
        <div className="productsWrapper">
          {data?.length > 0 &&
            data.map((product, id) => {
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
      )}
    </div>
  );
};

export default Home;
