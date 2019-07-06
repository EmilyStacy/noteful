import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import Note from '../Components/Note';
import Store from '../dummy_store';

//Note ='' Link to 'path/note.id'
//set a router to note


class Notes extends Component {
    render(){
        const store= Store.notes;
        const noteList = store.map(note=>{
            return(
                <Note note={note}/>
                 )
        });
        console.log(noteList);
        return (
        <>
            <div className="Notes">
                {noteList}
            </div>
            <div className="button">
                <button className="add_note">
                Add notes
                </button>
            </div>
        </>
        )
    }
}

export default Notes;