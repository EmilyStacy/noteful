import React,{Component} from 'react';
import Folder from './Folder';
import NotefulContext from '../notefulContext';
//display the data
//
class Folders extends Component {
    static contextType = NotefulContext;
    render(){
        const folderList = this.context.folders.map(folder =>{
            const selectedFolder = this.context.folders.folderId === folder.id;
            return(
            <Folder key={folder.id} selectedFolder={selectedFolder} folder = {folder}/>
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