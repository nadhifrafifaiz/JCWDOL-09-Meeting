import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../features/product/productSlice";

function Product() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const product = useSelector((state) => state.product.product);

  useEffect(() => {
    dispatch(getProductById(id));
  }, []);
  return (
    <div>
      Product {id}
      <p>{product.productName}</p>
    </div>
  );
}

export default Product;
