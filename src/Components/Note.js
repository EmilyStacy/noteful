import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import NotefulContext from '../notefulContext';

class Note extends Component{
    
    render(){
    return (
        <NotefulContext.Consumer>
        {(context)=>(
            <div className="note">
                <Link to={`/note/${this.props.note.id}`}>
                <h2>{this.props.note.name}</h2>
                </Link>
                <p>{this.props.note.modified}</p>
                <button className="delete" onClick={()=>{context.deleteNote(this.props.note.id)}}>
                Delete note
                </button>

            </div>
        )
            }
            
        </NotefulContext.Consumer>
        )
    }
}

export default Note;