import React,{Component} from 'react';
import Note from '../Components/Note';
import NotefulContext from '../notefulContext';


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