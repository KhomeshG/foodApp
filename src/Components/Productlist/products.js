import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Spacer,
  Image,
} from "@chakra-ui/react";

import { useState } from "react";

function Product(props) {
  let [value, updatedValue] = useState(0);

  //products
  //   let [pName, updateName] = useState("");
  //   let [pDescription, updateDescription] = useState("");
  //   let [pDescription, updateDescription] = useState("");
  //   let [pDescription, updateDescription] = useState("");
  function increament(event) {
    updatedValue(++value);
    console.log(value);
    // document.getElementById("demo").innerHTML = value;
  }
  function decrease(event) {
    updatedValue(--value);
    console.log(value);
    // document.getElementById("demo").innerHTML = value;
  }
  function Display() {
    return value > 0 ? value : "Zero";
  }

  //isVailable color
  let color = props.isAvailable ? "blue.300" : "red.300";
  return (
    <Box m="20px" p="20px" border="2px" borderColor="red.50" size="200px">
      <Heading mb="12px" pb="2px">
        {props.name}
      </Heading>

      <Flex h="200px">
        <Text w="70%">{props.description}</Text>
        <Spacer />
        <Box w="20%">
          <Image src={props.image} alt="pizz image" />
        </Box>
      </Flex>

      <Flex alignItems="center" gap="2">
        <Text as="b" fontSize="lg" color="black">
          ₹ {props.price}
        </Text>
        <Spacer />
        <Button bg="green.300" onClick={increament}>
          +
        </Button>
        <Text>{Display()}</Text>
        <Button bg="red.300" onClick={decrease}>
          -
        </Button>
        <Spacer />

        <Button bg="blue.300"> BUY-NOW</Button>
        <Spacer />
        <Button py="20px" w="150px" bg={color}>
          {props.isAvailable ? "Available" : "Not-Available"}
        </Button>
      </Flex>
    </Box>
  );
}

export default Product;
