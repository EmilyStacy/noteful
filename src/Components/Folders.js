import React,{Component} from 'react';
import Folder from './Folder';
import NotefulContext from '../notefulContext';
import {Link} from 'react-router-dom';

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
            <div className="container"> 
            <div className="folder_list">
               {folderList}
            <Link to = '../addFolder'>
              <button className="add_folder">   
            Add folder
            </button>
            </Link>
            </div>
            </div>
            )
            
        }</NotefulContext.Consumer>
        )
    
    }
}

export default Folders;