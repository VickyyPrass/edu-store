import logo from "../../assets/logo.png";
import "./index.scss";

const Footer = () => {
    return (
        <div className="footer_area">
            <div className="footer_content">
                <img src={logo} alt="logo" />
                <p>@Copyright Edu Store 2023</p>
            </div>
        </div>
    );
};

export default Footer;
