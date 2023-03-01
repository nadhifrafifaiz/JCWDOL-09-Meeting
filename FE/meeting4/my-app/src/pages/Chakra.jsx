import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Slider,
  SliderFilledTrack,
  SliderTrack,
  SliderThumb,
} from "@chakra-ui/react";

function Chakra() {
  return (
    <div>
      <Card>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>

      <Slider aria-label="slider-ex-1" defaultValue={30}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </div>
  );
}

export default Chakra;
