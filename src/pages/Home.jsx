import React from "react";
import Amino from '../../public/images/supplements/Amino.jpg'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Elevate Your Fitness Journey
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Shop premium protein supplements from the world’s top brands.
            </p>
            <a
              href="/products"
              className="inline-block bg-blue-600 text-white px-5 py-3 rounded-md font-medium hover:bg-blue-700 transition"
            >
              Shop Now
            </a>
          </div>
          <img          
            src={Amino}
            alt="Protein Supplements"
            className="w-80 h-60 object-cover rounded-lg shadow-lg mt-8 md:mt-0"
          />
        </div>
      </header>

      {/* Featured Brands */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Featured Brands
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          <img src="/images/supplements/on-logo.png" alt="Optimum Nutrition" className="h-10" />
          <img src="/images/supplements/myprotein-logo.png" alt="MyProtein" className="h-10" />
          <img src="/images/supplements/mb-logo.png" alt="MuscleBlaze" className="h-10" />
          <img src="/images/supplements/gnc-logo.png" alt="GNC" className="h-10" />
          <img src="/images/supplements/dymatize-logo.png" alt="Dymatize" className="h-10" />
        </div>
      </section>

      {/* Popular Products */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Popular Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Static product cards */}
          <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <img
              src="/images/supplements/on-gold-standard.jpg"
              alt="ON Gold Standard Whey"
              className="w-full h-40 object-contain mb-3"
            />
            <h3 className="font-bold text-lg mb-1">ON Gold Standard Whey</h3>
            <p className="text-gray-600 mb-2">Optimum Nutrition</p>
            <p className="font-semibold text-blue-600">₹5,499</p>
          </div>
          <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <img
              src="/images/supplements/mb-whey.jpg"
              alt="MuscleBlaze Whey Protein"
              className="w-full h-40 object-contain mb-3"
            />
            <h3 className="font-bold text-lg mb-1">MuscleBlaze Whey Protein</h3>
            <p className="text-gray-600 mb-2">MuscleBlaze</p>
            <p className="font-semibold text-blue-600">₹3,999</p>
          </div>
          <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <img
              src="/images/supplements/myprotein-impact.jpg"
              alt="MyProtein Impact Whey"
              className="w-full h-40 object-contain mb-3"
            />
            <h3 className="font-bold text-lg mb-1">MyProtein Impact Whey</h3>
            <p className="text-gray-600 mb-2">MyProtein</p>
            <p className="font-semibold text-blue-600">₹4,299</p>
          </div>
          <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <img
              src="/images/supplements/dymatize-elite.jpg"
              alt="Dymatize Elite Whey"
              className="w-full h-40 object-contain mb-3"
            />
            <h3 className="font-bold text-lg mb-1">Dymatize Elite Whey</h3>
            <p className="text-gray-600 mb-2">Dymatize</p>
            <p className="font-semibold text-blue-600">₹4,999</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-2">100% Authentic Products</h3>
              <p className="text-gray-600">
                We guarantee genuine and certified supplements from trusted brands.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Free Shipping</h3>
              <p className="text-gray-600">
                Fast and free delivery on all orders above ₹999.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Expert Guidance</h3>
              <p className="text-gray-600">
                Get nutrition tips and product recommendations from certified experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white mt-12 shadow-inner">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">&copy; 2025 FitSupps. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="/privacy" className="text-gray-500 hover:text-blue-600 text-sm">Privacy Policy</a>
            <a href="/terms" className="text-gray-500 hover:text-blue-600 text-sm">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}