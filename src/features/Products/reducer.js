import * as product from "./constants";

export const ProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case product.ALL_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: [],
            };

        case product.ALL_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload.data,
                count: action.payload.count,
            };

        case product.ALL_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        case product.CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};
export const ProductsDetailsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case product.PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case product.PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                products: action.payload.data,
            };

        case product.PRODUCT_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload,
            };

        case product.CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};
