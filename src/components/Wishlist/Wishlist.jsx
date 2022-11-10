import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useWish } from "../../hooks/useStoreContext";
import Figure from "../UI/Figure";

const Wishlist = () => {
  const { wishListItems } = useWish();
  const navigate = useNavigate();

  const gotoShopHandler = () => {
    navigate("/shop");
  };

  return (
    <>
      <section className="flex min-h-[30vh] flex-col items-center justify-center gap-y-4 border-b border-b-dark-brown p-6 md:min-h-fit md:py-12">
        <h1 className="font-noto text-3xl uppercase md:text-4xl">Wishlist</h1>
      </section>
      <section>
        {wishListItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <span className="my-6 grid place-items-center text-xl font-semibold">
              Wishlist Empty
            </span>
            <button
              className="bg-dark-brown py-2 px-6 text-white-bone"
              onClick={gotoShopHandler}
            >
              Shop
            </button>
          </div>
        ) : (
          <ul className="grid grid-cols-2 gap-3 bg-white-bone p-6 sm:grid-cols-4 lg:grid-cols-6">
            {wishListItems.map((item) => {
              return (
                <li key={item.id}>
                  <Link to={`/shop/${item.id}`}>
                    <Figure
                      {...item}
                      classImage="object-contain h-52 w-48 bg-white object-center p-4"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </>
  );
};

export default Wishlist;