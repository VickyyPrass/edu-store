import { NavLink } from "react-router-dom";
import "./index.scss";
import Logo from "../../assets/logo.png";
import { FaShoppingCart, FaUser, FaAngleDown, FaAngleUp } from "react-icons/fa";
import SearchBar from "./search";
import { useState } from "react";

const Navbar = () => {
    const [show, setShow] = useState(true);

    const toggleNav = () => {
        setShow(!show);
    };

    return (
        <div className="navbar">
            <div className="container_area">
                <div className="logo_area">
                    <NavLink to="/">
                        <img src={Logo} alt="Logo" />
                    </NavLink>
                </div>

                <div className="navbar_menu_area">
                    <SearchBar />
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/product">Menu</NavLink>
                        </li>

                        <li className="list_nav">
                            <NavLink className="btn_list" onClick={toggleNav}>
                                Kategori{" "}
                                <span>
                                    {show ? <FaAngleDown /> : <FaAngleUp />}
                                </span>
                            </NavLink>
                            {show ? (
                                <div></div>
                            ) : (
                                <ul
                                    className="list_show"
                                    style={{ display: "block" }}
                                >
                                    <li>
                                        <NavLink to="/category">
                                            Kategori 1
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/category">
                                            Kategori 2
                                        </NavLink>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>

                <div className="profile_area">
                    <div className="cart_area">
                        <NavLink to="/cart">
                            <FaShoppingCart />
                            <div className="total_cart">
                                <p>99</p>
                            </div>
                        </NavLink>
                    </div>

                    <div className="account_area">
                        <NavLink to="/profile">
                            <FaUser />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
