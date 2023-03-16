import {
  FormControl,
  FormHelperText,
  FormLabel,
  FormErrorMessage,
  Input,
  Flex,
  Spacer,
  Select,
  Button,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";

function ProductForm() {
  let [pName, updatedName] = useState("");
  let [pPrice, updatedPrice] = useState("");
  let [pDescription, updatedDescription] = useState("");
  let [pisAvailable, updatedAvailableProduct] = useState("");
  let [pImage, updateImage] = useState("");

  function nameInputHandler(event) {
    updatedName(event.target.value);
  }
  function priceInpuHandler(event) {
    updatedPrice(event.target.value);
  }
  function descriptionInputHandler(event) {
    updatedDescription(event.target.value);
  }
  function productImageHandler(event) {
    updateImage(event.target.value);
  }
  function productAvailableHandler(event) {
    updatedAvailableProduct(event.target.value);
  }

  function createHandleEvent(event) {
    event.preventDefault();
    let res = {
      productName: pName,
      productPrice: pPrice,
      productDescription: pDescription,
      productAvailable: pisAvailable,
      productImage: pImage,
    };

    console.log(res);
  }
  return (
    <div className="productForm">
      <Flex>
        <FormControl p="20px">
          {" "}
          <FormLabel as="b" fontSize="lg" color="black">
            Product Name
          </FormLabel>
          <Input
            type="text"
            placeholder="Entre Product Name Here"
            onChange={nameInputHandler}
          />
        </FormControl>
        <Spacer></Spacer>
        <FormControl p="20px">
          {" "}
          <FormLabel as="b" fontSize="lg" color="black">
            Product Price
          </FormLabel>
          <Input
            type="number"
            placeholder="Entre Product Price Here"
            onChange={priceInpuHandler}
          />
        </FormControl>
      </Flex>

      <FormControl p="20px">
        {" "}
        <FormLabel as="b" fontSize="lg" color="black">
          Product Description
        </FormLabel>
        <Input
          type="text"
          placeholder="Entre Product Description Here"
          onChange={descriptionInputHandler}
        />
      </FormControl>

      <Flex>
        {" "}
        <FormControl p="20px">
          {" "}
          <FormLabel as="b" fontSize="lg" color="black" spacing={10}>
            is Product Available in Stock?
          </FormLabel>
          <Select
            placeholder="Select option"
            onChange={productAvailableHandler}
          >
            <option value="available">Available</option>
            <option value="not-available">Not Available</option>
          </Select>
        </FormControl>
        <Spacer></Spacer>
        <FormControl p="20px">
          {" "}
          <FormLabel as="b" fontSize="lg" color="black" spacing={10}>
            Select Product Image
          </FormLabel>
          <Input type="file" onChange={productImageHandler} />
        </FormControl>
      </Flex>
      <Center>
        <Button p="20px" bg="blue.200" onClick={createHandleEvent}>
          {" "}
          Add Products
        </Button>
      </Center>
    </div>
  );
}

export default ProductForm;
