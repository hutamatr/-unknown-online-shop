import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Figure from "../components/UI/Figure";
import Hero from "../components/Home/Hero";
import FashionProducts from "../components/Home/FashionProducts";
import BestSellers from "../components/Home/BestSellers";
import OurPhilosophy from "../components/Home/OurPhilosophy";
import useAxios from "../hooks/useAxios";

const Home = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const { requestHttp, loading, error } = useAxios();

  useEffect(() => {
    requestHttp(
      {
        method: "GET",
        url: "products?limit=2",
        headers: false,
      },
      (data) => setDataProduct(data)
    );
  }, [requestHttp]);

  const productContent = (
    <ul className="grid min-h-fit grid-cols-2 content-center gap-3 md:content-center">
      {dataProduct.map((product) => {
        return (
          <li key={product.id} className="">
            {loading.isLoading ? (
              <p className="mx-auto text-center font-manrope font-light uppercase text-dark-brown">
                {loading.loadingMessage}
              </p>
            ) : (
              <Link to={`shop/${product.id}`} className="flex justify-center">
                <Figure
                  {...product}
                  classImage="object-contain h-52 w-48 bg-white object-center p-4"
                />
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      <Hero />
      <section className="grid min-h-max grid-cols-1 gap-8 border-b border-dark-brown p-6 md:min-h-fit md:grid-cols-2 md:grid-rows-1 md:gap-10 md:p-10">
        <div className="flex flex-col gap-y-8">
          <h1 className="font-noto text-4xl font-light uppercase italic text-dark-brown md:text-5xl">
            Care for your clothes like the good friends they are.
          </h1>
          <span className="block text-end font-light uppercase italic md:text-xl">
            -Joan Crawford
          </span>
        </div>
        {error.isError ? (
          <p className="mx-auto text-center font-medium uppercase text-red-700">
            {error.errorMessage}
          </p>
        ) : (
          productContent
        )}
      </section>
      <FashionProducts />
      <BestSellers />
      <OurPhilosophy />
    </>
  );
};

export default Home;
