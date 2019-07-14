import React,{Component} from 'react';
// import Store from '../dummy_store';
import {Link} from 'react-router-dom';
import './NoteListMain.css';
import NotefulContext from '../notefulContext';
import config from '../config';

// function deleteNote(noteid, callback) {
//     fetch(config.API_Note_ENDPOINT + `/${noteid}`, {
//       method: 'DELETE',
//       headers: {
//         'authorization': `bearer ${config.API_KEY}`
//       }
//     })
//       .then(res => {
//         if (!res.ok) {
          
//           return res.json().then(error => {
            
//             throw error
//           })
//         }
//         return res.json()
//       })
//       .then(data => {
//         callback(noteid)
//       })
//       .catch(error => {
//         console.error(error)
//       })
//   }
export default class NoteListMain extends Component {
    static contextType = NotefulContext;
    render(){
        const noteId = this.props.match.params.noteId;
        const noteItem = this.context.notes.filter(note => 
            note.id ===noteId); 
        const Items = noteItem.map(note=> {
            return(
                <NotefulContext.Consumer>
                {(context)=> (
                <div className="notelistMain" key="note.id">
                <h2>{note.name}</h2>
                <p>{note.modified}</p>
                <p>{note.folderId}</p>
                 <button className="delete" onClick={()=>{context.deleteNote(note.id)}}>
                Delete note

                </button> 
                <p>{note.content} </p>
                </div>
                )
            }
               </NotefulContext.Consumer>
            )
        }
        
        )
        
        console.log(noteItem);
        const currentNoteFolder = noteItem.length?noteItem[0].folderId:"";
         const folderItem = this.context.folders.filter (folder =>
            folder.id === currentNoteFolder);
            const folderName =folderItem.length?folderItem[0].name:""; 
        return(
                <>
                    <section className="left">
                       <div className="highlighted"> {folderName} </div>
                    </section>
                    <section className="right">
                    <Link to ="/"> <button id="returnbtn">Return</button> </Link>
                        {Items}
                    </section>
                </>
        )
    }
}
