import './App.css';
import Hamburger from './components/Hmburger';
import AddProduct from "./pages/AddProduct";
import ViewProducts from "./pages/ViewProducts";
import EditProducts from "./pages/EditProducts";
import ViewProductDetails from "./pages/ViewProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position='top-center' />
        {/* <BrowserRouter> */}
        <Hamburger />
        <Routes>
          {/* <Route path="/home" element={<Home />} />
                <Route path="/AboutUs" element={<AboutUs />} /> */}
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/ViewProducts" element={<ViewProducts />} />
          <Route path="/EditProducts/:id" element={<EditProducts />} />
          <Route path="/ViewProductDetails/:id" element={<ViewProductDetails />} />
          
          
          {/* <Route path="/contact" element={<ContactUs />} /> */}
        </Routes>
        {/* </BrowserRouter> */}
      </div>
    </BrowserRouter>
  );
}

export default App;