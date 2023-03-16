import * as React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import ProductList from "./Components/Productlist/productList";
import CreateProduct from "./Components/CreateProduct/createProduct";
function App() {
  return (
    <ChakraProvider>
      <CreateProduct></CreateProduct>
      <ProductList></ProductList>
    </ChakraProvider>
  );
}

export default App;
