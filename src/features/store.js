import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { ProductsDetailsReducer, ProductsReducer } from "./Products/reducer";

let rootReducer = combineReducers({
    products: ProductsReducer,
    productsDetails: ProductsDetailsReducer,
});
let initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);
export default store;
