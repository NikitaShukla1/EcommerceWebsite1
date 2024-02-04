import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Shop from "./pages/Shop";
import "./App.css";
import TopCategories from './pages/TopCategories';
import ProductPreview from "./pages/ProductPreview";
import AddToCart from "./pages/AddToCart";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <div>
        {loading ? (
          <div className="loader-wrapper">
            <span className="loader"></span>
          </div>
        ) : (
          
          <BrowserRouter>
            <div class="App">
              <Header />
              {/* <Home />
              <AboutUs />
              <TopCategories />
              <ContactUs /> */}
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/Shop" element={<Shop />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/ProductPreview/:id" element={<ProductPreview />} />
                <Route path="/AddToCart/:id" element={<AddToCart />} />
              </Routes>
              <Footer />
            </div>
          </BrowserRouter>
        )}
      </div>
    </>
  );
};

export default App;