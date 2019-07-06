//
// have notes component here
//get the logic
import React,{Component} from 'react';
import Folders from '../Components/Folders';
import Notes from '../Components/Notes';
import Store from '../dummy_store';
import {Link} from 'react-router-dom';

export default class NoteListNav extends Component {
        
    render(){
        console.log(this.props);
        const folderId = this.props.match.params.folderId;
        const filterNotes = Store.notes.filter(note => 
            note.folderId ===folderId);
        const finalNotes= filterNotes.map(note=> {
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
        })
        return(
            <>
                <section className="left">
                    <Folders folderId={folderId} stores={Store.folders}/>
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
                </section>
            </>

            )
           
        }
        
    

}