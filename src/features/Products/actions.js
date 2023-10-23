import * as item from "./constants";
import { getDataProducts, getDataProductsByID } from "../../api/products";

export const allProducts = () => async (dispatch) => {
    try {
        dispatch({ type: item.ALL_PRODUCTS_REQUEST });
        const { data } = await getDataProducts({
            limit: 8,
        });

        dispatch({
            type: item.ALL_PRODUCTS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: item.ALL_PRODUCTS_FAIL,
            payload: error.response.data.error,
        });
    }
};

export const topProducts = () => async (dispatch) => {
    try {
        dispatch({ type: item.ALL_PRODUCTS_REQUEST });
        const { data } = await getDataProducts({
            limit: 8,
        });

        setTimeout(() => {
            dispatch({
                type: item.ALL_PRODUCTS_SUCCESS,
                payload: data,
            });
        }, 1000);
    } catch (error) {
        dispatch({
            type: item.ALL_PRODUCTS_FAIL,
            // payload: error.response.data.error,
        });
    }
};

export const detailsProducts = (id) => async (dispatch) => {
    try {
        dispatch({ type: item.PRODUCT_DETAILS_REQUEST });
        const { data } = await getDataProductsByID(id);

        dispatch({
            type: item.PRODUCT_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: item.PRODUCT_DETAILS_FAIL,
            payload: error.response.data.error,
        });
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: item.CLEAR_ERRORS,
    });
};
