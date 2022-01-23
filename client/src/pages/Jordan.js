import React, { useEffect } from "react";
import Footer from "../components/Footer";
import CategoryMenu from "../components/CategoryMenu";
import ProductItem from "../components/ProductItem";
import { UPDATE_PRODUCTS } from "../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import spinner from "../assets/spinner.gif";
import { useSelector, useDispatch } from "react-redux";

function Jordan() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }
  }
  return (
    <div style={{ marginTop: "1%" }}>
      <CategoryMenu />
      <div className="mx-2">
        <div className="flex-row" style={{ marginTop: ".8%", marginLeft: "18%", marginRight: "18%"}}>
        {filterProducts().slice(8,16, state.showItems).map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
        {loading ? <img src={spinner} alt="loading" /> : null}
      </div>
      <Footer />
    </div>
  );
}

export default Jordan;
