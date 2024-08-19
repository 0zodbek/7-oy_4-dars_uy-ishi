import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Products() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data.data));
  }, [id]);
console.log(product);
  return (
    <>
    <h1>salom</h1>
    </>
  );
}

export default Products;