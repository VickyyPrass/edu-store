import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FaPlus, FaMinus } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "./index.scss";
import { HelmetProvider } from "react-helmet-async";
import MetaData from "../MetaData";
import image from "../../assets/burger.jpg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
    const [cart, setDataCart] = useState("");

    const toggleNav = () => {
        setDataCart("");
    };

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            delete product
        </Tooltip>
    );

    return (
        <HelmetProvider>
            <MetaData title="My Cart -" />
            <div className="content_area" onLoad={toggleNav}>
                {cart === "" ? (
                    <div className="cart_empty">
                        <h4>Keranjang kamu masih kosong nih !!!</h4>
                        <h4>Tambah menu kesini ya kawan</h4>
                    </div>
                ) : (
                    <div className="cart_table">
                        <Table
                            className="cart_area"
                            responsive="md"
                            variant="light"
                            striped
                            bordered
                        >
                            <thead>
                                <tr className="text-center">
                                    <th>#</th>
                                    <th className="produk">Produk</th>
                                    <th>Nama</th>
                                    <th className="price">Harga</th>
                                    <th className="qty">Qty</th>
                                    <th>Jumlah</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-center">
                                    <td>
                                        <OverlayTrigger
                                            placement="bottom"
                                            delay={{ show: 200, hide: 100 }}
                                            triggers={["hover"]}
                                            overlay={renderTooltip}
                                        >
                                            <Button className="btn_delete_cart">
                                                <AiOutlineCloseCircle className="icon_delete" />
                                            </Button>
                                        </OverlayTrigger>
                                    </td>
                                    <td>
                                        <img src={image} alt="" />
                                    </td>
                                    <td>Burger</td>
                                    <td>Rp. 100.000</td>
                                    <td className="qty_area">
                                        <div className="qty_box">
                                            <Button className="btn_qty">
                                                <FaMinus />
                                            </Button>
                                            <p>1</p>
                                            <Button className="btn_qty">
                                                <FaPlus />
                                            </Button>
                                        </div>
                                    </td>
                                    <td>Rp. 100.000</td>
                                </tr>
                            </tbody>
                        </Table>

                        <div className="checkout mt-5">
                            <div className="sub_total">
                                <h4>
                                    <span>Total :</span>{" "}
                                    <span>Rp.1.000.000</span>
                                </h4>
                                <NavLink to="/checkout">
                                    <button className="btn_checkout">
                                        Bayar Sekarang
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </HelmetProvider>
    );
};

export default Cart;
