import { NavLink } from "react-router-dom";
import Banner from "../../components/Banner";
import CardProduct from "../../components/CardProduct";
import "./index.scss";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaAngleDoubleRight } from "react-icons/fa";
import { HelmetProvider } from "react-helmet-async";
import MetaData from "../MetaData";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { topProducts } from "../../features/Products/actions";
import Spinner from "react-bootstrap/Spinner";

const Homepage = () => {
    const dispatch = useDispatch();
    const { loading, products, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(topProducts());
    }, [dispatch]);

    return (
        <HelmetProvider>
            <MetaData title="" />
            <div className="content_area">
                <Banner />
                <div className="product_area">
                    {loading ? (
                        <div className="spinner">
                            <Spinner animation="border" variant="info" />
                            <h5>Loading...</h5>
                        </div>
                    ) : (
                        <Row>
                            {products &&
                                products.map((product, index) => {
                                    return (
                                        <Col xs={4} md={3} key={index}>
                                            <CardProduct
                                                key={product._id}
                                                data={product}
                                            />
                                        </Col>
                                    );
                                })}
                        </Row>
                    )}
                </div>

                <div className="load_menu">
                    <NavLink to="/product">
                        <Button variant="primary">
                            <FaAngleDoubleRight /> Semua menu...
                        </Button>
                    </NavLink>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Homepage;
