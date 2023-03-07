import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/product/productSlice";
import ProductCard from "../components/ProductCard";

function Products() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);

  const renderProductList = () => {
    return productList.map((product) => {
      return <ProductCard product={product} />;
    });
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <div className="grid grid-cols-3 gap-10 m-auto w-3/4 mt-10">
        {renderProductList()}
      </div>
      ;
    </div>
  );
}

export default Products;
