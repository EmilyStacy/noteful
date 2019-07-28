import React,{Component} from 'react';
import Note from '../Components/Note';
import NotefulContext from '../notefulContext';
import {Link} from 'react-router-dom';
import './Notes.css';


class Notes extends Component {
    static contextType = NotefulContext;
    render(){
        const store= this.context.notes;
        const noteList = store.map(note=>{
            return(
                <Note key={note.id} note={note}/>
                 )
        });
        return (
        <div className="container">
            <div className="Notes">
                {noteList}
            </div>
            <div className="button">
                <Link to = 'addNote'>
                <button className="add_note">
                Add notes
                </button>
                </Link>
            </div>
        </div>
        )
    }
}

export default Notes;