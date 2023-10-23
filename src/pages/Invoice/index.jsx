import { FaCheck } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import "./index.scss";
import Table from "react-bootstrap/Table";
import { NavLink } from "react-router-dom";

const Invoice = () => {
    return (
        <div className="main">
            <div className="content_area">
                <div className="info_success">
                    <Button variant="primary" className="btn_invoice_success">
                        <FaCheck />
                    </Button>
                    <h2>Pembelian Berhasil</h2>
                </div>

                <div className="info_invoice">
                    <Table striped variant="light">
                        <thead>
                            <tr>
                                <th colSpan={2}>Invoices</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={2}></td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td>waiting_payment</td>
                            </tr>
                            <tr>
                                <td>Total Pembayaran</td>
                                <td>Rp. 100.000</td>
                            </tr>
                            <tr>
                                <td>Penerima</td>
                                <td>
                                    <div>
                                        <p>Vicky</p>
                                        <p>email.gmail.com</p>
                                        <p>alamat</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Pembayaran</td>
                                <td>
                                    <div>
                                        <p>Edu Store</p>
                                        <p>Bank BCA 123456789</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div className="main_menu">
                    <NavLink to="/">
                        <Button variant="primary">Kembali ke Menu Utama</Button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Invoice;
