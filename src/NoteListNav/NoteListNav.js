//how to use consumer in map
import React,{Component} from 'react';
import Folders from '../Components/Folders';
// import Store from '../dummy_store';
import NotefulContext from '../notefulContext';
import Badfolder from '../Components/Badfolder';
import {Link} from 'react-router-dom';



export default class NoteListNav extends Component {
    static contextType = NotefulContext;
    render(){
        
        let newFolders = this.context.folders;
        const folderId = this.props.match.params.folderId;
        console.log(folderId);
        if (newFolders.length !==0 && newFolders.find(Folder=> Folder.id)!==folderId)
           
        {
            console.log('it ran');
            console.log(newFolders[0].id)
          return ( <Badfolder/>)
        }
        const filterNotes = this.context.notes.length>0?this.context.notes.filter(note => 
            note.folderId ===folderId):"";
        const finalNotes= this.context.notes.length?filterNotes.map(note=> {
            return(
            <div className="note">
                <Link to={`/note/${note.id}`}>
                <h2>{note.name}</h2></Link>
                <p>{note.modified}</p>
                <button className="delete">
                    Delete note
                </button>
            </div>
            )
        }): "";
        return(
            <>
                <section className="left">
                    <Folders folderId={folderId} stores={this.context.folders}/>
                </section>
                <section className="right">
                    <div className="note">
                    {finalNotes}
                    </div>
                    <div className="button">
                        <button className="add_note">
                            Add notes
                        </button>
                    </div>  
                    <div className="button">
                        <Link to ="/"> <button id="returnbtn">Return</button> </Link>
                    </div>    
                </section>
            </>

            )
           
        }
        
    

}