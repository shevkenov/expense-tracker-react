import reactDomTestUtilsProductionMin from "react-dom/cjs/react-dom-test-utils.production.min"
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from './context/context';
import './index.css';

ReactDOM.render(
    <Provider>
        <App /> 
    </Provider>,
    document.getElementById('root')
);