import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../features/product/productSlice";
import ProductCard from "../components/ProductCard";

function Product() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.productList);
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const renderProductList = () => {
    return products.map((product) => {
      return <ProductCard product={product} key={product.id} />;
    });
  };

  return (
    <div>
      <div className="grid grid-cols-3  gap-10 w-3/4 m-auto my-10">
        {renderProductList()}
      </div>
      ;
    </div>
  );
}

export default Product;
