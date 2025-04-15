import './App.css';
import About from './pages/About';
import Cart from './pages/Cart';
import CheckoutPage from './pages/CheckoutPage';
import ConsumerProduct from './pages/ConsumerProduct';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ProductList from "./pages/ProductList"; // Renamed to start with uppercase
import PerfessionalProduct from './pages/PerfessionalProduct';
import Product from './pages/Product';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails'; // Assuming this is your component for product details

import './style.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Support from './pages/Support';
import Projects from './pages/Projects';
import NewContact from './pages/NewContact';
import NewNav from './components/NewNav';
import NewHome from './pages/NewHome';
import Whatsnew from './pages/Whatsnew';

function App() {
  return (
    <> 
    <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consumer-product" element={<ConsumerProduct/>} />
          <Route path="/perfessional-product" element={<PerfessionalProduct/>} />
          <Route path="/cart/:id" element={<Cart/>} />
          <Route path="/shopping-cart" element={<ShoppingCart/>} />
          <Route path="/checkoutpage" element={<CheckoutPage/>} />
          <Route path="/productlist/:id" element={<ProductList/>} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/support" element={<Support />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/newcontact" element={<NewContact />} />
          <Route path="/newnav" element={<NewNav />} />
          <Route path="/" element={<NewHome />} />
          <Route path="/new" element={<Whatsnew />} />
          </Routes>
    </Router>
    </>
  );
}

export default App;
