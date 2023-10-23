import MetaData from "../MetaData";
import { HelmetProvider } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import CardProduct from "../../components/CardProduct";
import { allProducts } from "../../features/Products/actions";

const Product = () => {
    const dispatch = useDispatch();
    const { loading, products, error, count } = useSelector(
        (state) => state.products
    );

    useEffect(() => {
        dispatch(allProducts());
    }, [dispatch]);
    return (
        <HelmetProvider>
            <MetaData title="" />
            <div className="content_area">
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
                                                image={
                                                    process.env
                                                        .REACT_APP_BASE_URL +
                                                    "/images/products/" +
                                                    product.image_url
                                                }
                                                title={product.name}
                                                price={product.price}
                                                // tags={JSON.stringify(product.name)}
                                                productID={product._id}
                                            />
                                        </Col>
                                    );
                                })}
                        </Row>
                    )}
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Product;
