
"use client";
import Search from "./components/Search";
import { useState } from "react";
import Image from "next/image";
import styles from "./components/mine.module.css";
import Footer from "./components/Footer";
import { items } from "./components/data";
import Link from "next/link";

export default function Home() {
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart`);
  };

  const addToFavorite = (item) => {
    setFavorite([...favorite, item]);
    alert(`${item.name} added to favorites`);
  };

  return (
    <div className={styles.div}>
      <div className={styles.hero}>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded flex items-right bg-black text-white"
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="product">Product</option>
          <option value="fashion">Fashion</option>
          <option value="books">Books</option>
          <option value="sports">Sports</option>
          <option value="beauty">Beauty</option>
        </select>

        <Search />
        {/* <div className={styles.content}>
          <aside>
            <h1 className="text-2xl font-bold capitalize">Olayinka Stores</h1>
            <p className="text-lg font-bold capitalize">
              This is an online store where you can get anything
            </p>
            <button
              type="button"
              className="bg-red-600 text-white p-4 rounded-md my-8 hover:animate-pulse"
            >
              20% off on all items
            </button>
          </aside>
        </div> */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {Object.values(items).map((group, groupIndex) =>
            group.map((item, index) => (
              <div key={`${groupIndex}-${item.id}`} className="bg-black p-4 rounded shadow-md text-center">
                <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                <Image
                  src={item.Image}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="mx-auto rounded"
                />
                <Link
                  href={`/items/${item.id}`}
                  className="block mt-4 text-blue-600 underline"
                >
                  View Product
                </Link>
                <div className="mt-4">
                  <button
                    className="bg-green-600 text-white px-4 py-2 rounded mr-2"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="bg-yellow-400 text-black px-4 py-2 rounded"
                    onClick={() => addToFavorite(item)}
                  >
                    Favorite
                  </button>
                </div>
              </div>

            ))
          )}
        </section>
        {/* PRODUCT DISPLAY SECTION */}


        <Footer />
      </div>
    </div>
  );
}


