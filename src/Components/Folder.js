import React from 'react';
import  {Link} from 'react-router-dom';
import "./Folder.css";

export default function Folder(props){
    console.log(props.selectedFolder);
    return (
    <div className ={`folder ${props.folder.id}`}>
        <Link to={`/folder/${props.folder.id}`}>
        
            <p className={props.selectedFolder?"highlightedFolder":""}>{ props.folder.name}</p>
        </Link>
        
    
    </div>



        )
}