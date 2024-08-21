import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../assets/gif.gif";

function Products() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.data))
      .catch((error) => console.error("Error fetching product:", error))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div className="flex text-red-300 justify-center">
          <img src={Loader} alt="Loading..." />
        </div>
      ) : (
        !id && <h1>salom</h1>
      )}
      {product && (
        <div className="container px-8 py-20 mx-auto max-w-6xl lg:px-8 flex justify-between">
          <div className="flex gap-20">
            {""}
            <div className="w-[512px] h-[384px]">
              <img 
                className="h-96 object-cover rounded-lg lg:w-full"
                src={product.attributes?.image}
                alt={product.attributes?.title}
              />
            </div>
            <div className="w-1/2">
              <h2 className="capitalize text-[#394E6A] text-3xl font-bold">
                {product.attributes.title}
              </h2>
              <p className="text-xl text-neutral-content font-bold mt-2">
                {product.attributes.company}
              </p>
              <p className="mt-3 text-xl">${product.attributes.price / 100}</p>
              <p className="mt-6 leading-8">{product.attributes.description}</p>
              <div className="colors">
                <button type="button" className="badge w-6 h-6 mr-2 false bg-green-500"  ></button>
                <button type="button" className="badge w-6 h-6 mr-2 false bg-blue-500 border-secondary"  ></button>
                </div>
              {""}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Products;
