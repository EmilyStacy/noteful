import React from 'react';
import {Link} from 'react-router-dom';
function Badfolder (props) {
    return (
        <div className="note">
                    <div>Incorrect path or bad folder/note names</div>
                    <div className="button">
                    <Link to ="/"> <button id="returnbtn">Return</button> </Link>
                    </div> 
                    </div> 
    )
}

export default Badfolder;