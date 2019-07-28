import React,{Component} from 'react';
// import Store from '../dummy_store';
import {Link} from 'react-router-dom';
import './NoteListMain.css';
import NotefulContext from '../notefulContext';

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
        
        console.log(noteItem[0]);
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
