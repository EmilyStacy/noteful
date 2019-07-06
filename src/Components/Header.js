import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
function Header (props) {
    return (
        <div className="row">
        <h1><Link to ='/'>Noteful</Link></h1>
        </div>
    )
}

export default Header;