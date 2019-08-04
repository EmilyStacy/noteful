import React,{Component} from 'react';
import Note from '../Components/Note';
import NotefulContext from '../notefulContext';
import {Link} from 'react-router-dom';
import './Notes.css';
import PropTypes from 'prop-types';


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
        <div>
            <div className="col-sm-12 padding margin">
                <Link to = 'addNote'>
                <button className="btn btn-primary">
                Add notes
                </button>
                </Link>
            </div>
            <div className="row">
                {noteList}
            </div>
            
        </div>
        )
    }
}

export default Notes;

Note.propTypes = {
    note:PropTypes.exact( {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    folderId: PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    modified:PropTypes.string.isRequired
}
)
}