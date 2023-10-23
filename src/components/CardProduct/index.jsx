import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import { NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import "./index.scss";
import { useEffect } from "react";

const CardProduct = (props) => {
    useEffect(() => {
        console.log("props", props.data.tags);
    }, []);

    return (
        <div className="card_menu_area">
            <Card className="card_product">
                <Card.Img
                    variant="top"
                    className="card_image"
                    src={
                        process.env.REACT_APP_BASE_URL +
                        "/images/products/" +
                        props.data.image_url
                    }
                    alt={props.data.title}
                />
                <Card.Body className="card_body">
                    <Card.Text className="card_title">
                        {props.data.title}
                    </Card.Text>

                    <Stack direction="horizontal" className="card_tags">
                        <Badge pill bg="warning" text="dark">
                            {/* {props.data.tags} */}
                        </Badge>
                    </Stack>

                    <Card.Text className="card_price">
                        Rp. {props.data.price}
                    </Card.Text>

                    <NavLink to={"/product_detail/" + props.data._id}>
                        <Button variant="primary" className="btn_details">
                            <FaCartPlus />
                            <span> </span>
                            Lihat Produk
                        </Button>
                    </NavLink>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardProduct;
