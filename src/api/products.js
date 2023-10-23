import axios from "axios";

const root_url = process.env.REACT_APP_BASE_URL;

export const getDataProducts = async (params) => {
    return await axios.get(`${root_url}/api/products`, {
        params,
    });
};

export const getDataProductsByID = async (id) => {
    return await axios.get(`${root_url}/api/products/${id}`);
};
