import { Card, Layout } from "antd";
import { useEffect, useState } from "react";
import LayoutCarousel from "../../layout/MainLayout/Carousel/CarouselLayout";

interface IProduct {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const HomePage = () => {
  const [products, setProducts] = useState<IProduct[]>();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        res.json();
      })
      .then((json) => console.log(json));
  }, []);

  console.log({ products });

  const category = products?.map((product) => (
    <li
      style={{
        border: "2px solid #000",
        marginRight: 60,
        padding: 15,
        borderRadius: "50%",
      }}
    >
      {product.category}
    </li>
  ));

  return (
    <>
      <LayoutCarousel />
      <p style={{ marginLeft: 24, marginTop: 12 }}>Categories</p>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          overflowX: "auto",
          padding: 20,
        }}
      >
        {category}
      </ul>
      <Layout style={{ margin: 24 }}>
        {products?.map((product) => (
          <Card>{product.title}</Card>
        ))}
      </Layout>
    </>
  );
};

export default HomePage;
