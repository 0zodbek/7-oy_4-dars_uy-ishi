import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Filter from "../components/Filter/Filtr.jsx";
import styles from "../components/Filter/filtr.module.css"
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
            className="input input-bordered input-sm"
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
            className="select select-bordered select-sm"
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
            className="select select-bordered select-sm"
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
            className="select select-bordered select-sm"
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
            className="checkbox checkbox-primary checkbox-sm"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-sm">
          search
        </button>
        <a className="btn btn-accent btn-sm" href="/products">
          reset
        </a>
      </form>
      <div className="container max-w-6xl mx-auto flex flex-wrap justify-between px-8">
        {data.length > 0 &&
          data.map((el, index) => {
            console.log(el);
            return (
              <div
                onClick={() => handleClick(el.id)}
                style={{ width: "352px", height: "332px", cursor: "pointer", marginTop:"16px"}}
                className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
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
                  <span class="text-secondary">${(el.attributes.price)/100}</span>
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
