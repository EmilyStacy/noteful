import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import Note from '../Components/Note';

//Note ='' Link to 'path/note.id'
//set a router to note

class Notes extends Component {
    render(){
        
        const noteList = this.props.stores.map(note=>{
            console.log(note.name);
            return(
                <Note note={note}>
                 </Note>
                 )
        });
        console.log(noteList);
        return (
            <div className="Notes">
                {noteList}
            </div>
        )
    }
}

export default Notes;