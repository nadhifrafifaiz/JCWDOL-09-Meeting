import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getProductById } from "../features/product/productSlice";
import { Image } from "@chakra-ui/image";
import { Stack, Text, Heading } from "@chakra-ui/layout";

function DetailProduct() {
  let dispatch = useDispatch();
  let { id } = useParams();
  let product = useSelector((state) => state.product.product);
  useEffect(() => {
    dispatch(getProductById(id));
  }, []);

  return (
    <div className="">
      <div className="w-3/4 m-auto my-10">
        <div className="grid grid-cols-2">
          <div>
            <Image
              src={product.productImage}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              boxSize="400px"
              objectFit="cover"
              className="m-auto"
            />
          </div>
          <div>
            <Stack mt="6" spacing="3">
              <Heading size="md">{product.productName}</Heading>
              <Text>{product.description}</Text>
              <Text color="blue.600" fontSize="2xl">
                {product.price}
              </Text>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
