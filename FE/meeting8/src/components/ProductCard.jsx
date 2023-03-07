import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";

function ProductCard(props) {
  const { product } = props;
  const navigate = useNavigate();

  const addToCart = () => {};
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={product.productImage}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          boxSize="300px"
          objectFit="cover"
          className="m-auto"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{product.productName}</Heading>
          <Text>{product.description}</Text>
          <Text color="blue.600" fontSize="2xl">
            {product.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => navigate("/product/" + product.id)}
          >
            See Detail
          </Button>
          <Button variant="ghost" colorScheme="blue" onClick={addToCart}>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
