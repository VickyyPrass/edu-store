import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./index.scss";
import { FaPlus, FaMinus, FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { detailsProducts } from "../../features/Products/actions";
import Spinner from "react-bootstrap/Spinner";

const Product_Detail = (props) => {
    const dispatch = useDispatch();
    const { loading, product, error } = useSelector(
        (state) => state.productsDetails
    );
    // const idUrl = this.state.match.params.productID;
    console.log("match :", props.match);

    useEffect(() => {
        dispatch(detailsProducts());
    }, [dispatch]);
    return (
        <div className="main">
            <div className="content_area">
                <Row>
                    <Col sm="5" md="5" className="product_image">
                        {/* <img src={} alt="" srcset="" /> */}
                    </Col>
                    <Col sm="4" md="6" className="product_detail">
                        <div className="description">
                            <h3>f</h3>
                            <h2>Rp.100.000</h2>
                            <hr />
                            <p>Kategori : </p>
                            <p>Deskripsi singkat : </p>
                            <hr />
                        </div>

                        <div className="btn_product">
                            <p>Jumlah</p>
                            <div className="qty_area">
                                <Button className="btn_qty">
                                    <FaMinus />
                                </Button>
                                <h5>1</h5>
                                <Button className="btn_qty">
                                    <FaPlus />
                                </Button>
                            </div>
                        </div>

                        <div className="cart_area">
                            <Button className="btn btn_cart">
                                <span>
                                    <FaCartPlus />
                                </span>
                                Masukkan Keranjang
                            </Button>
                            <Button className="btn btn_buy">
                                Beli Sekarang
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Product_Detail;
