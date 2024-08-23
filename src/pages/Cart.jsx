import React, { useEffect, useState } from "react";

function Cart() {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    let add = [];
    add.push(JSON.parse(localStorage.getItem("cart")));
    setProducts(add);
  }, []);
  console.log(products[0]);
  return (
    <div>
      {products[0] &&
        products[0].map((product, index) => (
          console.log(product),
          <div
          className="flex mt-8 max-w-6xl mx-auto  relative"
            key={index}
          >
           <img className="w-32 h-32 rounded-lg" src={product.image} alt="" />
           
            <div className="name flex flex-col mr-36 absolute left-48">
              <h2 className="capitalize font-medium">{product.title}</h2>
              <h2 className="mt-2 capitalize text-sm text-neutral-content">{product.company}</h2>
              <p>color <span class="badge badge-sm"></span></p>
            </div>
            <div className="flex flex-col absolute left-1/3">
              <span class="label-text">Amount</span>
              <select className="rounded-lg w-14" name="" id="">
                <option value={product.count}>{product.count}</option>
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
            </div>
           
          </div>
        ))}
    </div>
  );
}

export default Cart;
