import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./index.scss";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    return (
        <div>
            <InputGroup className="search_area mb-3">
                <Form.Control
                    aria-label="search input"
                    placeholder="Cari menu disini..."
                />
                <Button variant="warning" className="button_search" id="button-search">
                    <FaSearch />
                </Button>
            </InputGroup>
        </div>
    );
};

export default SearchBar;
