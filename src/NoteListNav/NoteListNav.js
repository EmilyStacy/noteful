//how to use consumer in map
import React,{Component} from 'react';
import Folders from '../Components/Folders';
// import Store from '../dummy_store';
import NotefulContext from '../notefulContext';
import {Link} from 'react-router-dom';



export default class NoteListNav extends Component {
    static contextType = NotefulContext;
    render(){
        console.log(this.props);
        const folderId = this.props.match.params.folderId;
        const filterNotes = this.context.notes.length?this.state.notes.filter(note => 
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
                </section>
            </>

            )
           
        }
        
    

}