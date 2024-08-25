import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Filter from "../components/Filter/Filtr.jsx";
import styles from "../components/Filter/filtr.module.css";
function Products() {
  const [data, setData] = useState("");
  const [page, setPage] = useState(null);
  const navigate = useNavigate("");
  const [price, setPrice] = useState(0);
  function handlePriceChange(event) {
    setPrice(event.target.value);
  }
  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleClick = (id) => {
    fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then((res) => res.json())
      .then((productData) => {
        console.log(productData);
        navigate(`/product/${id}`);
      });
  };
  console.log(data);
  return (
    <div>
      {/* <Filter /> */}
      <form
        style={{ maxWidth: "1088px" }}
        method="get"
        action="/products?page=2"
        className="bg-base-200 rounded-md px-8 mt-20 mx-auto py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center"
      >
        <div className="form-control">
          <label for="search" className="label">
            <span className="label-text capitalize">search product</span>
          </label>
          <input
            type="search"
            name="search"
            className=" rounded-lg input input-bordered input-sm"
            value=""
          />
        </div>
        <div className="form-control">
          <label for="category" className="label">
            <span className="label-text capitalize">select category</span>
          </label>
          <select
            name="category"
            id="category"
            className=" rounded-lg select select-bordered select-sm"
          >
            <option value="all">all</option>
            <option value="Tables">Tables</option>
            <option value="Chairs">Chairs</option>
            <option value="Kids">Kids</option>
            <option value="Sofas">Sofas</option>
            <option value="Beds">Beds</option>
          </select>
        </div>
        <div className="form-control">
          <label for="company" className="label">
            <span className="label-text capitalize">select company</span>
          </label>
          <select
            name="company"
            id="company"
            className="rounded-lg select select-bordered select-sm"
          >
            <option value="all">all</option>
            <option value="Modenza">Modenza</option>
            <option value="Luxora">Luxora</option>
            <option value="Artifex">Artifex</option>
            <option value="Comfora">Comfora</option>
            <option value="Homestead">Homestead</option>
          </select>
        </div>
        <div className="form-control">
          <label for="order" className="label">
            <span className="label-text capitalize">sort by</span>
          </label>
          <select
            name="order"
            id="order"
            className="select rounded-lg select-bordered select-sm"
          >
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
            <option value="high">high</option>
            <option value="low">low</option>
          </select>
        </div>
        <div className="form-control">
          <label for="price" className="label cursor-pointer">
            <span className="label-text capitalize">select price</span>
            <span>$1,000.00</span>
          </label>
          <input
            type="range"
            min="0"
            max="1000"
            value={price}
            className={styles.slider}
            onChange={handlePriceChange}
          />
          <div className="w-full flex justify-between text-xs px-2 mt-2">
            <span className="font-bold text-md">0</span>
            <span className="font-bold text-md">Max : $1,000.00</span>
          </div>
        </div>
        <div className="form-control items-center">
          <label for="shipping" className="label cursor-pointer">
            <span className="label-text capitalize">free shipping</span>
          </label>
          <input
            type="checkbox"
            name="shipping"
            className="checkbox  rounded-lg checkbox-primary checkbox-sm "
            style={{border: "1px solid grey"}}
          />
        </div>
        <button type="submit" className="btn rounded-lg btn-primary btn-sm">
          search
        </button>
        <a className="btn btn-accent rounded-lg btn-sm" href="/products">
          reset
        </a>
      </form>
      <div class="flex justify-between items-center mt-8 border-b border-base-300 pb-5 max-w-6xl mx-auto px-8">
        <h4 class="font-medium text-md">22 products</h4>
        <div class="flex gap-x-2">
          <button
            type="button"
            class="text-xl btn btn-circle btn-sm btn-primary text-primary-content"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
            </svg>
          </button>
          <button
            type="button"
            class="text-xl btn btn-circle btn-sm btn-ghost text-based-content"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="container max-w-6xl mx-auto flex flex-wrap justify-between px-8">
        {data.length > 0 &&
          data.map((el, index) => {
            console.log(el);
            return (
              <div
                onClick={() => handleClick(el.id)}
                style={{
                  width: "352px",
                  height: "332px",
                  cursor: "pointer",
                  marginTop: "16px",
                }}
                className="card w-full shadow-xl mx-auto hover:shadow-2xl transition duration-300"
                key={index}
              >
                <figure class="px-4 pt-4">
                  <img
                    src={el.attributes.image}
                    alt="avant-garde lamp"
                    className="rounded-xl h-64 md:h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title capitalize tracking-wider">
                    {el.attributes.title}
                  </h2>
                  <span class="text-secondary">
                    ${el.attributes.price / 100}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
      {/* Pagination */}
      {/* {page && <Pagination page={page} />} */}
    </div>
  );
}

export default Products;
