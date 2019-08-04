import React,{Component} from 'react';
import Folder from './Folder';
import './Folders.css'
import NotefulContext from '../notefulContext';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
class Folders extends Component {
    static contextType = NotefulContext;
    
    render(){
        const folderList = this.context.folders.map(folder =>{
            const selectedFolder = this.props.folderId === folder.id;
            return(
            <Folder key={folder.id} selectedFolder={selectedFolder} folder = {folder}/>
            )
        })
                
        return(
            <NotefulContext.Consumer>{context =>(
            <>
            <div>
                
               {folderList}
            </div>
            <div>
             <Link to = '../addFolder'>
                <button className="btn btn-secondary btn-sm">   
                Add folder
                </button>
                </Link>

            </div>
            </>
            )
            
        }</NotefulContext.Consumer>
        )
    
    }
}

export default Folders;

Folder.propTypes = {
    selectedFolder:PropTypes.bool,
    folder: PropTypes.exact(
        {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }
    )
}