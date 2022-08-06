import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";

import Review from "../components/ProductDetails/Review";
// import OtherProduct from "../components/ProductDetails/OtherProduct";
import formatCurrency from "../utils/formatCurrency";
import useAxios from "../hooks/useAxios";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [amount, setAmount] = useState(1);
  const { productId } = useParams();
  const { requestHttp } = useAxios();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    requestHttp(
      {
        method: "GET",
        url: `products/${productId}`,
      },
      (data) => setProduct(data)
    );
  }, [requestHttp, productId]);

  const decreaseAmountHandler = () => setAmount((prevState) => prevState - 1);
  const increaseAmountHandler = () => setAmount((prevState) => prevState + 1);

  const shopButtonHandler = () => {
    console.log(amount);
  };

  return (
    <>
      <section className="mt-16 grid grid-cols-1 md:mt-10">
        <img
          src={product.image}
          alt=""
          className="h-52 w-full border-x border-b border-dark-brown bg-white object-contain object-center p-4"
        />
        <div className="flex flex-col items-start justify-center gap-y-6 border-b border-b-dark-brown p-5 text-dark-brown">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-semibold uppercase">
              {product.title}
            </h1>
            <span className="flex items-center">
              <MdOutlineStar /> {product.rating?.rate} ({product.rating?.count})
            </span>
          </div>
          <span className="font-medium uppercase">
            Rp. {formatCurrency(product.price)}
          </span>
          <div className="flex max-w-fit border-2 border-dark-brown">
            <button
              onClick={decreaseAmountHandler}
              className="py-2 px-4 text-lg font-bold"
            >
              -
            </button>
            <form action="">
              <input
                type="text"
                value={amount}
                readOnly
                className="h-full w-10 border-x border-x-dark-brown bg-white-bone text-center outline-none"
              />
            </form>
            <button
              onClick={increaseAmountHandler}
              className="py-2 px-4 text-lg font-bold"
            >
              +
            </button>
          </div>
          <p className="text-sm">{product.description}</p>
          <span className="text-xs font-medium uppercase">
            Category : {product.category}
          </span>
          <button
            className="w-full border border-dark-brown py-3 font-medium uppercase duration-300 hover:bg-dark-brown hover:text-white-bone"
            onClick={shopButtonHandler}
          >
            Add to Cart
          </button>
        </div>
      </section>
      <Review />
    </>
  );
};

export default ProductDetails;