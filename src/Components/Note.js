import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Note extends Component{
    
    render(){
    return (
        <div className="note">
            <Link to={`/note/${this.props.note.id}`}>
            <h2>{this.props.note.name}</h2>
            </Link>
            <p>{this.props.note.modified}</p>
            <button className="delete">
            Delete note
            </button>

        </div>

        )
    }
}

export default Note;