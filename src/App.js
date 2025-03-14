import { useState } from "react";
import { ShoppingCart, Search, User } from "lucide-react";
import { Button } from "./components/ui/button";

export default function RiotMerchClone() {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-red-600">Riot Merch</h1>
        <nav className="hidden md:flex gap-6 text-lg">
          <a href="#" className="hover:text-red-500">Shop</a>
          <a href="#" className="hover:text-red-500">Collections</a>
          <a href="#" className="hover:text-red-500">New Arrivals</a>
          <a href="#" className="hover:text-red-500">Sale</a>
        </nav>
        <div className="flex gap-4">
          <Search className="w-5 h-5 cursor-pointer" />
          <ShoppingCart className="w-5 h-5 cursor-pointer" />
          <User className="w-5 h-5 cursor-pointer" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Latest Drop</h2>
          <p className="text-lg mt-2">Exclusive Riot Games apparel and collectibles</p>
          <Button className="mt-4 bg-red-600 text-white px-6 py-2">Shop Now</Button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="h-48 bg-gray-300 rounded-lg"></div>
            <h3 className="mt-2 text-lg font-semibold">Product {item}</h3>
            <p className="text-red-600 font-bold">$49.99</p>
            <Button className="w-full mt-2 bg-red-600 text-white">Add to Cart</Button>
          </div>
        ))}
      </section>
    </div>
  );
}
