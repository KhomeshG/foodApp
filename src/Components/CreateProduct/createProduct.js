import { Box } from "@chakra-ui/react";
import ProductForm from "./productForm";

function CreateProduct() {
  return (
    <div className="create-product">
      <Box m="20px" p="20px" border="2px">
        <ProductForm></ProductForm>
      </Box>
    </div>
  );
}

export default CreateProduct;
