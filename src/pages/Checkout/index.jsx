import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Checkout = () => {
    return (
        <div className="main">
            <div className="content_area">
                <h3 className="text-center">Data Form Pembayaran</h3>
                <NavLink to="/invoice">
                    <Button variant="primary">Konfirmasi Pembelian</Button>
                </NavLink>
            </div>
        </div>
    );
};

export default Checkout;
