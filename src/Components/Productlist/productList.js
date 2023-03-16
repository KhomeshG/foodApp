import Product from "./products";
let image = require("../../Image/pizza.jpg");
let products = [
  {
    id: 1,
    name: "Pizza",
    description:
      "Concept promotional flyer and poster for Restaurants or pizzerias, template with delicious taste pepperoni pizza, mozzarella cheese and copy space for your text Concept promotional flyer and poster for Restaurants or pizzerias, template with delicious taste pepperoni pizza, mozzarella cheese and copy space for your text Concept promotional flyer and poster for Restaurants or pizzerias",
    isAvailable: false,
    image: image,
    price: 499,
  },
  {
    id: 2,
    name: "Apple Pie",
    description:
      "Concept promotional flyer and poster for Restaurants or pizzerias, template with delicious taste pepperoni pizza, mozzarella cheese and copy space for your text Concept promotional flyer and poster for Restaurants or pizzerias, template with delicious taste pepperoni pizza, mozzarella cheese and copy space for your text Concept promotional flyer and poster for Restaurants or pizzerias",
    isAvailable: true,
    image: require("../../Image/pizza.jpg"),
    price: 799,
  },
];
function ProductList() {
  return (
    <div className="productList">
      {" "}
      <Product
        id={products[0].id}
        name={products[0].name}
        description={products[0].description}
        isAvailable={products[0].isAvailable}
        image={products[0].image}
        price={products[0].price}
      ></Product>
      <Product
        id={products[1].id}
        name={products[1].name}
        description={products[1].description}
        isAvailable={products[1].isAvailable}
        image={products[1].image}
        price={products[1].price}
      ></Product>
    </div>
  );
}

export default ProductList;
