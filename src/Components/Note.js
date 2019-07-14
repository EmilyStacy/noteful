import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import config from '../config';
import NotefulContext from '../notefulContext';

function deleteNote(noteid, callback) {
    fetch(config.API_Note_ENDPOINT + `/${noteid}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${config.API_KEY}`
      }
    })
      .then(res => {
        if (!res.ok) {
          
          return res.json().then(error => {
            
            throw error
          })
        }
        return res.json()
      })
      .then(data => {
        callback(noteid)
      })
      .catch(error => {
        console.error(error)
      })
  }

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
                <button className="delete" onClick={()=>{deleteNote(this.props.note.id,context.deleteNote)}}>
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