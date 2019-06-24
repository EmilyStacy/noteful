import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Note extends Component{
    render(){
    return (
        <div className="note">
            <h2>{this.props.note.name}</h2>
            <Link to={`/note/${this.props.note.id}`}/>
            <p>{this.props.note.modified}</p>
            <button className="delete">
            Delete note
            </button>

        </div>

        )
    }
}

export default Note;