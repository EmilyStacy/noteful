import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import NotefulContext from '../notefulContext';

class Note extends Component{
    
    render(){
    return (
        <NotefulContext.Consumer>
        {(context)=>(
            <div className="col-sm-12 text-center ">
                <div className="card padding margin">
                            <div className="card-body">
                        <Link to={`/note/${this.props.note.id}`}>
                        <h2 className="card-title">{this.props.note.name}</h2>
                        </Link>
                        <p className="card-text">{this.props.note.modified}</p>
                        <button className="delete" onClick={()=>{context.deleteNote(this.props.note.id)}}>
                        Delete note
                        </button>
                    </div>
                </div>
            </div>
        )
            }
            
        </NotefulContext.Consumer>
        )
    }
}

export default Note;