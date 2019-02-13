import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculador from './main/Calculator';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Calculador />, document.getElementById('root'));

serviceWorker.unregister();
