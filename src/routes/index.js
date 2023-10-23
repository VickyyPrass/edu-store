import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/NavbarAddress/navbar";
import Homepage from "../pages/Homepage";
import Product from "../pages/Product";
import ProductDetail from "../pages/Product_detail";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Invoice from "../pages/Invoice";
import Profile from "../pages/Profile";
import Category from "../pages/Category";
import Footer from "../components/Footer";

const Navigation = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/product" element={<Product />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                    <Route path="/category" element={<Category />}></Route>
                    <Route
                        path="/product_detail/:productID"
                        element={<ProductDetail />}
                    ></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route path="/checkout" element={<Checkout />}></Route>
                    <Route path="/invoice" element={<Invoice />}></Route>
                </Routes>
            </BrowserRouter>

            <Footer />
        </div>
    );
};

export default Navigation;
