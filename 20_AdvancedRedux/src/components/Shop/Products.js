import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "My First Book",
    price: 6,
    description: "This is the book i ever wrote",
  },
  {
    id: "p2",
    title: "My Second Book",
    price: 5,
    description: "This is the book i ever wrote",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((productItem) => (
          <ProductItem
            key={productItem.id}
            id={productItem.id}
            title={productItem.title}
            price={productItem.price}
            description={productItem.description}
          />
        ))}
        {/* <ProductItem
          title="My First Book"
          price={6}
          description="This is the book i ever wrote"
        />
        <ProductItem
          title="My Second Book"
          price={5}
          description="This is the book i ever wrote"
        /> */}
      </ul>
    </section>
  );
};

export default Products;
