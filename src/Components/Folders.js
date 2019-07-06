import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import Folder from './Folder';
import Store from '../dummy_store';
//display the data
//
class Folders extends Component {
    render(){
        
        const folderList = this.props.stores.map(folder =>{
            const selectedFolder = this.props.folderId === folder.id;
            return(
            <Folder selectedFolder={selectedFolder} folder = {folder}/>
            )
        })
        return(
            <div className="folder_list">
                {folderList}
                <button className="add_folder">
                Add folder
                </button>
            </div>
        )
    
    }
}

export default Folders;