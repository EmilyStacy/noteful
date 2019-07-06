import React from 'react';
import ReactDOM from 'react-dom';
// import {library} from '@fortawesome/font-awesome-svg-core';
// // import {
//     faPlus, faChevronLeft, faTrashAlt, faCheckDouble
//   } from '@fortawesome/fontawesome-free-webfonts/fontawesome.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById('root'));

