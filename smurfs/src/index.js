import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from 'react-redux';
import {smurfReducer} from "./reducers/smurfReducer";
import { applyMiddleware,createStore } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(smurfReducer,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root"));
