import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Loader from "../assets/gif.gif";
import { useNavigate } from "react-router-dom";
function Products() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate("");
  const [cartItem, setCartItem] = useState([]); // Cart item state
  const [count, setCount] = useState(0);
  let indicator = 0 ;
  const [item, setItem] = useState("");
  const [counter, setCounter] = useState()
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.data),setItem(JSON.parse(JSON.stringify(product))))
      .catch((error)=> {console.log(error)})
      .finally(() => setIsLoading(false));
  }, [id]);
  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  const handleClick = (id) => {
    let products=[];
    if(localStorage.getItem("cart")){
    products = JSON.parse(localStorage.getItem("cart"));
  }
  if(localStorage.getItem("counter")){
    setCounter(JSON.parse(localStorage.getItem("counter")))}
    const newItem = { id: id, count: count, title: product.attributes.title, company: product.attributes.company , image: product.attributes.image};
    products.push(newItem);
    localStorage.setItem("cart", JSON.stringify(products))
    let counter = JSON.parse(localStorage.getItem("cart"))
    console.log(counter);
    counter.map((item, index) =>{
    indicator += (item.count * 1)
    console.log(indicator);
    localStorage.setItem("counter", JSON.stringify(indicator))
    })
  };
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
              <p className="mt-6 leading-8 text-base">
                {product.attributes.description}
              </p>
              <h4 className="text-md font-medium tracking-wider capitalize mt-6">
                colors
              </h4>
              <div className="colors">
                <button
                  type="button"
                  className="badge w-6 h-6 mr-2 false bg-green-500"
                ></button>
                <button
                  type="button"
                  className="badge w-6 h-6 mr-2 false bg-blue-500 border-secondary"
                ></button>
              </div>
              <label className="label" htmlFor="amount">
                <h4 className="text-md font-medium -tracking-wider capitalize">
                  amount
                </h4>
              </label>
              <select
                onChange={() => {
                  setCount(event.target.value);
                }}
                className="select border-primary border-solid select-bordered w-80 rounded-md select-md"
                id="amount"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
              </select>
              <br />
              <button
                onClick={() => {
                  handleClick(product.id);
                }}
                className="btn hover:bg-blue-900 btn-md mt-12 border-none rounded-lg bg-blue-700 text-white"
              >
                Add to bag
              </button>
              {""}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Products;
