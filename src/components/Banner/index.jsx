import Carousel from "react-bootstrap/Carousel";
import "./index.scss";
import banner1 from '../../assets/banner1.jpg';

const Banner = () => {
    return (
        <div className="banner">
            <Carousel className="banner_card">
                <Carousel.Item className="banner_item" interval={3000}>
                    <div className="banner_img first">
                        <img src={banner1} alt="" />
                    </div>
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3> */}
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Banner;
