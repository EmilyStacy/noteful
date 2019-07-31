import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
// import {library} from '@fortawesome/font-awesome-svg-core';
// // import {
//     faPlus, faChevronLeft, faTrashAlt, faCheckDouble
//   } from '@fortawesome/fontawesome-free-webfonts/fontawesome.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById('root'));

